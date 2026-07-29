import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { resumeCVData } from "../data/data";

function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="resume"
      ref={ref}
      className="section"
      style={{
        background: "var(--bg-base)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <span className="section-label">Résumé</span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              margin: "0.3em 0 0.7em",
            }}
          >
            View My Resume
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Full-stack developer with expertise in the MERN stack, building
            scalable, user-centric web applications. Download my resume to
            explore my complete professional journey.
          </p>

          <motion.button
            onClick={() => window.open(resumeCVData.resumeLink, "_blank")}
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
            data-magnetic
            onMouseEnter={(e) => {
              if (!prefersReducedMotion) {
                e.currentTarget.style.background = "rgba(232,131,74,0.14)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(232,131,74,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(232,131,74,0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2.25rem",
              background: "rgba(232,131,74,0.08)",
              border: "1px solid rgba(232,131,74,0.35)",
              borderRadius: "6px",
              color: "var(--accent)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            View Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
