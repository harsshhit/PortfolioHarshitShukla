import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { skillsData } from "../data/data";

const CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: skillsData.programmingLanguages,
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    skills: skillsData.frontendTechnologies,
  },
  {
    id: "backend",
    label: "Backend & DB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: skillsData.backendAndDatabase,
  },
  {
    id: "tools",
    label: "Dev Tools",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: skillsData.developmentTools,
  },
  {
    id: "testing",
    label: "Testing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    skills: skillsData.testingAndQuality,
  },
  {
    id: "core",
    label: "Core",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    skills: skillsData.coreStrengths,
  },
];

function SkillPill({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="tag-chip"
      style={{
        padding: "0.45rem 0.9rem",
        fontSize: "0.82rem",
        minHeight: "36px",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {skill}
    </motion.div>
  );
}

function CategoryTab({ cat, isActive, onClick, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      onClick={onClick}
      data-magnetic
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.65rem 1.25rem",
        minHeight: "44px",
        borderRadius: "6px",
        border: isActive ? "1px solid rgba(232,131,74,0.5)" : "1px solid var(--border)",
        background: isActive ? "rgba(232,131,74,0.08)" : "var(--bg-elevated)",
        color: isActive ? "var(--accent)" : "var(--text-secondary)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        whiteSpace: "nowrap",
        flexShrink: 0,
        touchAction: "manipulation",
      }}
    >
      <span style={{ opacity: isActive ? 1 : 0.6, color: isActive ? "var(--accent)" : "inherit" }}>
        {cat.icon}
      </span>
      {cat.label}
      {isActive && (
        <motion.div
          layoutId="active-tab"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(232,131,74,0.05)",
            borderRadius: "inherit",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
    </motion.button>
  );
}

function Skills() {
  const [active, setActive] = useState("languages");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const activeCategory = CATEGORIES.find((c) => c.id === active);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-base)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(232,131,74,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(232,131,74,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-heading">Skills & Stack</h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-secondary)",
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              maxWidth: "500px",
            }}
          >
            Technologies I work with across the full development spectrum.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "flex",
            gap: "0.6rem",
            marginBottom: "2rem",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "0.5rem",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryTab
              key={cat.id}
              cat={cat}
              isActive={active === cat.id}
              onClick={() => setActive(cat.id)}
              index={i}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: 0.3 }}
            className="card-glass"
            style={{ padding: "clamp(1.25rem, 3.5vw, 2.5rem)" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  padding: "0.6rem",
                  background: "rgba(232,131,74,0.1)",
                  borderRadius: "8px",
                  color: "var(--accent)",
                  display: "flex",
                }}
              >
                {activeCategory?.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {activeCategory?.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--text-tertiary)",
                    margin: 0,
                    letterSpacing: "0.06em",
                  }}
                >
                  {activeCategory?.skills.length} technologies
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {activeCategory?.skills.map((skill, i) => (
                <SkillPill key={skill} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.25rem",
            marginTop: "2.25rem",
          }}
        >
          {[
            { label: "Frontend", pct: 92 },
            { label: "Backend", pct: 78 },
            { label: "DevOps", pct: 60 },
            { label: "Problem Solving", pct: 88 },
          ].map(({ label, pct }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.4rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                }}
              >
                <span style={{ color: "var(--text-secondary)" }}>{label}</span>
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>{pct}%</span>
              </div>
              <div
                style={{
                  height: "4px",
                  background: "var(--bg-elevated)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${pct}%` } : { width: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: 0.6 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, var(--accent-dim), var(--accent))",
                    borderRadius: "2px",
                    boxShadow: "0 0 8px rgba(232,131,74,0.4)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
