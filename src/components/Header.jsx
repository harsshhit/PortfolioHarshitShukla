import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderContext } from "../context/HeaderContext";
import { socialLinks } from "../data/data";

const IconMap = { FaGithub, FaTwitter, FaLinkedin, FaCode };

const NAV_LINKS = [
  { href: "#home",       label: "Home" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { toggleHeaderActive, setSocialsVisible } = useHeaderContext();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setSocialsVisible(showMenu);
    return () => { toggleHeaderActive(false); setSocialsVisible(false); };
  }, [toggleHeaderActive, setSocialsVisible, showMenu]);

  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("home");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleMenu = () => {
    const next = !showMenu;
    setShowMenu(next);
    setSocialsVisible(next);
    toggleHeaderActive(next);
  };

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowMenu(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8,8,8,0.97)",
              backdropFilter: "blur(20px)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "3rem",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  onClick={() => setShowMenu(false)}
                  data-magnetic
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-primary)",
                    textDecoration: "none",
                    padding: "0.2em 0.6em",
                    minHeight: "48px",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "color 0.2s ease",
                    lineHeight: 1.15,
                    touchAction: "manipulation",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-primary)";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              style={{ display: "flex", gap: "1rem" }}
            >
              {socialLinks.map((link, i) => {
                const Icon = IconMap[link.iconName];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + i * 0.07 }}
                    data-magnetic
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      fontSize: "1.1rem",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                      touchAction: "manipulation",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(232,131,74,0.1)";
                      e.currentTarget.style.borderColor = "rgba(232,131,74,0.4)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--bg-elevated)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                    aria-label={link.label}
                  >
                    {Icon && <Icon />}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                position: "absolute",
                bottom: "2.5rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
              }}
            >
              Tap anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          position: "fixed",
          bottom: "clamp(1.25rem, 3vw, 2rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
        }}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            padding: "0.5rem",
            background: "rgba(15,15,15,0.92)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${showMenu ? "rgba(232,131,74,0.4)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: "999px",
            boxShadow: showMenu
              ? "0 0 30px rgba(232,131,74,0.15), 0 8px 32px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(0,0,0,0.4)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {!isMobile && NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onMouseEnter={() => setHoveredItem(link.href)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  padding: "0.45rem 0.9rem",
                  borderRadius: "999px",
                  background: isActive ? "rgba(232,131,74,0.1)" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--text-tertiary)",
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onFocus={() => setHoveredItem(link.href)}
                onBlur={() => setHoveredItem(null)}
              >
                {link.label}
              </a>
            );
          })}

          {!isMobile && (
            <div
              style={{
                width: "1px",
                height: "20px",
                background: "var(--border)",
                margin: "0 0.25rem",
              }}
            />
          )}

          <motion.button
            onClick={toggleMenu}
            onMouseEnter={() => !isMobile && setHoveredItem("menu")}
            onMouseLeave={() => !isMobile && setHoveredItem(null)}
            whileTap={{ scale: 0.92 }}
            data-magnetic
            aria-label="Toggle navigation menu"
            aria-expanded={showMenu}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: showMenu ? "rgba(232,131,74,0.15)" : "var(--bg-elevated)",
              border: `1px solid ${showMenu ? "rgba(232,131,74,0.5)" : "var(--border)"}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              padding: 0,
              flexShrink: 0,
              touchAction: "manipulation",
            }}
          >
            <motion.span
              animate={{ rotate: showMenu ? 45 : 0, y: showMenu ? 6.5 : 0 }}
              style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                background: showMenu ? "var(--accent)" : "var(--text-secondary)",
                borderRadius: "1px",
                transition: "background 0.2s ease",
              }}
            />
            <motion.span
              animate={{ opacity: showMenu ? 0 : 1, scaleX: showMenu ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                background: showMenu ? "var(--accent)" : "var(--text-secondary)",
                borderRadius: "1px",
              }}
            />
            <motion.span
              animate={{ rotate: showMenu ? -45 : 0, y: showMenu ? -6.5 : 0 }}
              style={{
                display: "block",
                width: "16px",
                height: "1.5px",
                background: showMenu ? "var(--accent)" : "var(--text-secondary)",
                borderRadius: "1px",
                transition: "background 0.2s ease",
              }}
            />
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;