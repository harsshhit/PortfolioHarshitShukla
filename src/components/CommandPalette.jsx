import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, resumeCVData } from "../data/data";

const COMMANDS = [
  { id: "home", label: "Jump to Home", category: "Navigation", icon: "🏠", action: () => (window.location.hash = "#home") },
  { id: "skills", label: "Jump to Skills & Stack", category: "Navigation", icon: "⚡", action: () => (window.location.hash = "#skills") },
  { id: "experience", label: "Jump to Experience", category: "Navigation", icon: "💼", action: () => (window.location.hash = "#experience") },
  { id: "projects", label: "Jump to Projects", category: "Navigation", icon: "🚀", action: () => (window.location.hash = "#projects") },
  { id: "contact", label: "Jump to Contact", category: "Navigation", icon: "✉️", action: () => (window.location.hash = "#contact") },
  { id: "resume", label: "View Resume (PDF)", category: "Actions", icon: "📄", action: () => window.open(resumeCVData.resumeLink, "_blank") },
  { id: "github", label: "Open GitHub Profile", category: "Socials", icon: "💻", action: () => window.open("https://github.com/harsshhit", "_blank") },
  { id: "linkedin", label: "Open LinkedIn Profile", category: "Socials", icon: "👔", action: () => window.open("https://www.linkedin.com/in/harshit-shukla-8b706417a", "_blank") },
];

// Append projects to command list
projectsData.forEach((p) => {
  COMMANDS.push({
    id: `project-${p.id}`,
    label: `Project: ${p.title}`,
    category: "Projects",
    icon: "📂",
    action: () => {
      if (p.liveLink) window.open(p.liveLink, "_blank");
      else window.location.hash = "#projects";
    },
  });
});

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Toggle on Cmd+K / Ctrl+K
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,8,8,0.85)",
            backdropFilter: "blur(12px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "clamp(4rem, 12vh, 8rem)",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "580px",
              background: "#121212",
              border: "1px solid rgba(232,131,74,0.3)",
              borderRadius: "12px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(232,131,74,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                }}
              />
              <kbd
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "0.2rem 0.5rem",
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  color: "var(--text-tertiary)",
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results list */}
            <div style={{ maxHeight: "320px", overflowY: "auto", padding: "0.5rem 0" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "1.5rem", textAlign: "center", color: "var(--text-tertiary)", fontSize: "0.9rem" }}>
                  No commands found matching "{query}"
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.7rem 1.25rem",
                        background: isSelected ? "rgba(232,131,74,0.12)" : "transparent",
                        borderLeft: isSelected ? "3px solid var(--accent)" : "3px solid transparent",
                        color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", flex: 1 }}>
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          color: "var(--text-tertiary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.6rem 1.25rem",
                background: "var(--bg-surface)",
                borderTop: "1px solid var(--border)",
                fontSize: "0.72rem",
                color: "var(--text-tertiary)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span>Navigation: ↑ ↓ Navigate • ↵ Select</span>
              <span style={{ color: "var(--accent)" }}>Cmd + K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
