import { motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useState, useEffect, useRef, useCallback } from "react";
import profile from "../assets/profile1.png";

const ParticleField = lazy(() => import("./ParticleField"));

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function useTextScramble(finalText, delay = 400) {
  const [display, setDisplay] = useState(finalText);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      const len = finalText.length;
      let iteration = 0;
      const totalFrames = len * 4;

      const interval = setInterval(() => {
        setDisplay(
          finalText
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 4) return finalText[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration++;
        if (iteration > totalFrames) clearInterval(interval);
      }, 35);
    }, delay);

    return () => clearTimeout(timer);
  }, [finalText, delay, prefersReducedMotion]);

  return display;
}

const ROLES = ["Software Developer", "React Engineer", "Full Stack Builder"];

function useTypewriter() {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(ROLES[0]);
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(ROLES[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx, prefersReducedMotion]);

  return displayed;
}

function MagneticLink({ href, children, className, secondary = false }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const onMouseMove = useCallback((e) => {
    if (prefersReducedMotion || !ref.current) return;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) return;

    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [prefersReducedMotion]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  const onMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.1s ease";
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className={className || (secondary ? "btn-secondary" : "btn-primary")}
      data-magnetic
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        minHeight: "44px",
        padding: "0.75rem 1.6rem",
        touchAction: "manipulation",
      }}
    >
      {children}
    </a>
  );
}

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      setTimeStr(now.toLocaleTimeString("en-US", options) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const name = useTextScramble("Harshit", 600);
  const role = useTypewriter();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg-base)",
      }}
    >
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(232,131,74,0.07) 0%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(232,131,74,0.25), transparent)",
          zIndex: 2,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "clamp(1.5rem, 5vw, 6rem)",
          paddingTop: "clamp(5rem, 10vw, 8rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          flexWrap: "wrap-reverse",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ flex: "1 1 300px", minWidth: 0 }}
        >
          <motion.span variants={itemVariants} className="section-label">
            Portfolio {timeStr && `• ${timeStr}`}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              margin: "0.15em 0 0.25em",
              wordBreak: "break-word",
            }}
          >
            {name}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              letterSpacing: "0.01em",
              minHeight: "1.8em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px var(--accent)",
                flexShrink: 0,
              }}
            />
            {role}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.1em",
                background: "var(--accent)",
                animation: prefersReducedMotion ? "none" : "blink 1s step-end infinite",
                flexShrink: 0,
              }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.875rem, 1.6vw, 1.05rem)",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              maxWidth: "520px",
              marginBottom: "2rem",
            }}
          >
            Crafting immersive digital experiences that seamlessly integrate
            innovative technology with sophisticated design. Transforming
            visionary concepts into captivating web solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
          >
            <MagneticLink href="#contact">
              Let's Connect
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "2px" }}>
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticLink>
            <MagneticLink href="#projects" secondary>
              View Work
            </MagneticLink>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: "2rem" }}>
            <a
              href="mailto:harshitshuklaharsh8@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.825rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.05em",
                transition: "color 0.2s ease",
                display: "inline-block",
                minHeight: "44px",
                lineHeight: "44px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-tertiary)")}
            >
              harshitshuklaharsh8@gmail.com
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", width: "100%", maxWidth: "380px" }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(180px, 40vw, 360px)",
              height: "clamp(180px, 40vw, 360px)",
              margin: "0 auto",
            }}
          >
            <motion.div
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.04, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "50%",
                background: "transparent",
                border: "1px solid rgba(232,131,74,0.35)",
                boxShadow: "0 0 30px rgba(232,131,74,0.12), inset 0 0 40px rgba(232,131,74,0.04)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-14px",
                borderRadius: "50%",
                border: "1px solid rgba(232,131,74,0.10)",
              }}
            />

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(232,131,74,0.2)",
                background: "var(--bg-surface)",
              }}
            >
              {!imageLoaded && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
              )}
              <img
                src={profile}
                alt="Harshit Shukla — Software Developer"
                onLoad={() => setImageLoaded(true)}
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 3,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "30px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </section>
  );
};

export default Hero;
