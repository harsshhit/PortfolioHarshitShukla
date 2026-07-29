import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { projectsData } from "../data/data";

function ProjectCard({ title, description, tags, imageUrl, github, liveLink, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(cardRef, { once: true, amount: 0.15 });

  useEffect(() => {
    const checkTouch = () => {
      const touch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.innerWidth < 768;
      setIsTouch(touch);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (prefersReducedMotion || isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  }, [prefersReducedMotion, isTouch]);

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const imgSrc = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => !isTouch && setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        transform: !isTouch ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : "none",
        transition: hovered ? "transform 0.08s ease" : "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
        willChange: !isTouch ? "transform" : "auto",
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(232,131,74,0.2)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        borderColor: hovered ? "rgba(232,131,74,0.25)" : "var(--border)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          overflow: "hidden",
          background: "var(--bg-elevated)",
        }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${title} preview`}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered && !prefersReducedMotion && !isTouch ? "scale(1.07)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, var(--bg-elevated), var(--bg-hover))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "var(--text-tertiary)", fontSize: "2rem" }}>◻</span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            opacity: isTouch || hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            zIndex: 2,
          }}
        >
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.45rem 0.8rem",
              minHeight: "36px",
              background: "rgba(8,8,8,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(232,131,74,0.4)",
              borderRadius: "6px",
              color: "var(--accent)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              touchAction: "manipulation",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>

      <div style={{ padding: "clamp(1.15rem, 3vw, 1.5rem)", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {tags?.map((tag, i) => (
            <span key={i} className="tag-chip" style={{ fontSize: "0.75rem", padding: "0.25rem 0.65rem" }}>
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            paddingTop: "0.75rem",
            marginTop: "0.25rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.45rem",
              padding: "0.65rem 0.85rem",
              minHeight: "44px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              color: "var(--text-secondary)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.825rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
              touchAction: "manipulation",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.45rem",
              padding: "0.65rem 0.85rem",
              minHeight: "44px",
              background: "rgba(232,131,74,0.08)",
              border: "1px solid rgba(232,131,74,0.3)",
              borderRadius: "6px",
              color: "var(--accent)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.825rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
              touchAction: "manipulation",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg-base)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,131,74,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">Work</span>
          <h2 className="section-heading">Projects</h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-secondary)",
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              maxWidth: "480px",
            }}
          >
            A selection of web applications showcasing full-stack capabilities.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
