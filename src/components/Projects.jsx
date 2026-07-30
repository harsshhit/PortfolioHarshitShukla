import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { projectsData } from "../data/data";

function ProjectCard({ project, index, total }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const images = Array.isArray(project.imageUrl)
    ? project.imageUrl.filter(Boolean)
    : project.imageUrl
    ? [project.imageUrl]
    : [];

  const currentImg = images[activeImgIndex] || images[0];

  // Extract clean domain for browser header bar
  const getCleanDomain = (url) => {
    if (!url) return "project.demo";
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace("www.", "");
    } catch {
      return "project.demo";
    }
  };

  const formattedNum = String(index + 1).padStart(2, "0");
  const stickyTop = 85 + index * 22; // Staggered sticky top for stacked deck effect

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{
        position: "sticky",
        top: `${stickyTop}px`,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? "0" : "3.5rem",
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: "rgba(13, 14, 18, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isHovered
            ? "1px solid rgba(232, 131, 74, 0.4)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
          padding: "clamp(1.25rem, 3vw, 2.25rem)",
          boxShadow: isHovered
            ? "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(232, 131, 74, 0.15)"
            : "0 20px 50px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Light Gradient on top corner */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: isHovered
              ? "linear-gradient(90deg, transparent, #E8834A 50%, transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 50%, transparent)",
            transition: "all 0.4s ease",
          }}
        />

        {/* Top Header Row: Number + Domain Tags + Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {/* Left: Giant Number + Title & Tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #F2F2F0 0%, #484845 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                userSelect: "none",
              }}
            >
              {formattedNum}
            </span>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.2rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  {project.tags?.[0] || "FEATURED WORK"} • {project.tags?.[1] || "WEB APP"}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Right: Live Project & Github Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                aria-label={`View ${project.title} source code on GitHub`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.55rem 0.95rem",
                  minHeight: "40px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "999px",
                  color: "var(--text-primary)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Code
              </a>
            )}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                aria-label={`Open live project for ${project.title}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.55rem 1.15rem",
                  minHeight: "40px",
                  background: "var(--accent)",
                  border: "1px solid var(--accent)",
                  borderRadius: "999px",
                  color: "#080808",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  textDecoration: "none",
                  boxShadow: "0 0 20px var(--accent-glow)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(232, 131, 74, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow)";
                }}
              >
                LIVE PROJECT
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Content Body Grid: Left Info + Right Browser Preview Window */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "1.75rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Description & Tags */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.925rem, 1.4vw, 1.05rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {project.description}
            </p>

            {/* Tags list */}
            <div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                  marginBottom: "0.6rem",
                }}
              >
                TECHNOLOGIES USED
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags?.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.35rem 0.8rem",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "8px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Multi-Image Gallery Thumbnails (if multiple images exist) */}
            {images.length > 1 && (
              <div style={{ paddingTop: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  SCREENSHOT PREVIEWS ({activeImgIndex + 1}/{images.length})
                </div>
                <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
                  {images.map((img, imgI) => (
                    <button
                      key={imgI}
                      onClick={() => setActiveImgIndex(imgI)}
                      aria-label={`View screenshot ${imgI + 1} for ${project.title}`}
                      style={{
                        width: "56px",
                        height: "36px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        border: activeImgIndex === imgI
                          ? "2px solid var(--accent)"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        padding: 0,
                        background: "none",
                        cursor: "pointer",
                        opacity: activeImgIndex === imgI ? 1 : 0.6,
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${imgI + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sleek Browser Frame Window */}
          <div
            style={{
              background: "#08080A",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.7)",
              position: "relative",
            }}
          >
            {/* Browser Top Navigation Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.6rem 0.9rem",
                background: "#121216",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                userSelect: "none",
              }}
            >
              {/* Window Dots */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
              </div>

              {/* URL Address Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(0, 0, 0, 0.4)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.72rem",
                  fontFamily: "'DM Sans', sans-serif",
                  color: "rgba(255, 255, 255, 0.5)",
                  maxWidth: "220px",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                {getCleanDomain(project.liveLink)}
              </div>

              <div style={{ width: "30px" }} />
            </div>

            {/* Browser Content Screenshot */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 Aspect Ratio
                overflow: "hidden",
                background: "#0d0d12",
              }}
            >
              {currentImg ? (
                <img
                  src={currentImg}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #121218 0%, #1a1a24 100%)",
                    color: "var(--text-tertiary)",
                    gap: "0.5rem",
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span style={{ fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
                    Interface Preview
                  </span>
                </div>
              )}

              {/* Overlay Gradient on Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,10,0.4) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
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
      style={{
        background: "var(--bg-base)",
        position: "relative",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(6rem, 12vw, 10rem)",
      }}
    >
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232, 131, 74, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Title Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "3.5rem",
          }}
        >
          <span className="section-label">Selected Works</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              maxWidth: "540px",
              lineHeight: 1.6,
            }}
          >
            A curated stack of production web applications, AI tools, and full-stack digital experiences.
          </p>
        </motion.div>

        {/* Stacked Cards Deck Container */}
        <div style={{ position: "relative" }}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
