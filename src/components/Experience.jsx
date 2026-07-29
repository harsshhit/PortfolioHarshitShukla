import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { experienceData } from "../data/data";

function TimelineEntry({ title, company, duration, description, tags, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "0 clamp(0.75rem, 3vw, 2rem)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "0.15rem",
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 260 }}
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: isInView ? "0 0 16px rgba(232,131,74,0.55)" : "none",
            border: "2px solid var(--bg-base)",
            flexShrink: 0,
            zIndex: 1,
            position: "relative",
          }}
        >
          {!prefersReducedMotion && isInView && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "50%",
                border: "1px solid rgba(232,131,74,0.5)",
              }}
            />
          )}
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              flex: 1,
              width: "1px",
              background: "linear-gradient(to bottom, rgba(232,131,74,0.4), rgba(232,131,74,0.05))",
              marginTop: "0.5rem",
              transformOrigin: "top",
              minHeight: "2rem",
            }}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="card-glass"
        style={{
          padding: "clamp(1.25rem, 3vw, 2rem)",
          marginBottom: "1.75rem",
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(232,131,74,0.08)",
              border: "1px solid rgba(232,131,74,0.2)",
              padding: "0.25rem 0.6rem",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            {duration}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 0.2rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            margin: "0 0 1.15rem",
          }}
        >
          @ {company}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.65rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "0.5rem",
                }}
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {tags?.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {tags.map((tag, i) => (
              <span key={i} className="tag-chip" style={{ fontSize: "0.75rem", minHeight: "32px", display: "inline-flex", alignItems: "center" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

const Experience = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section"
      style={{
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
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
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-heading">Experience</h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-secondary)",
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              maxWidth: "480px",
            }}
          >
            My professional journey and contributions across the tech industry.
          </p>
        </motion.div>

        <div style={{ maxWidth: "760px" }}>
          {experienceData.map((exp, i) => (
            <TimelineEntry
              key={exp.id}
              {...exp}
              index={i}
              isLast={i === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
