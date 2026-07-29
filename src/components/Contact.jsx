import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const SOCIALS = [
  {
    id: "email",
    label: "Email",
    link: "mailto:harshitshuklaharsh8@gmail.com",
    displayText: "harshitshuklaharsh8@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    link: "https://github.com/harsshhit",
    displayText: "harsshhit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/harshit-shukla-8b706417a",
    displayText: "harshit-shukla",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=6394887052",
    displayText: "+91 6394887052",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
];

function SocialLink({ id, label, link, displayText, icon, index }) {
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={link}
      target={id !== "email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      data-magnetic
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.85rem 1.15rem",
        minHeight: "52px",
        background: hovered ? "rgba(232,131,74,0.06)" : "var(--bg-elevated)",
        border: `1px solid ${hovered ? "rgba(232,131,74,0.3)" : "var(--border)"}`,
        borderRadius: "10px",
        textDecoration: "none",
        transition: "all 0.25s ease",
        touchAction: "manipulation",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          background: hovered ? "rgba(232,131,74,0.15)" : "var(--bg-surface)",
          border: `1px solid ${hovered ? "rgba(232,131,74,0.4)" : "var(--border)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "var(--accent)" : "var(--text-secondary)",
          flexShrink: 0,
          transition: "all 0.25s ease",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
            transition: "color 0.2s ease",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: hovered ? "var(--accent)" : "var(--text-tertiary)",
            transition: "color 0.2s ease",
            wordBreak: "break-all",
          }}
        >
          {displayText}
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          color: hovered ? "var(--accent)" : "var(--text-tertiary)",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </motion.a>
  );
}

function FormField({ id, label, type = "text", required = false }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "1rem",
          top: focused || hasValue ? "-0.5rem" : "0.95rem",
          fontSize: focused || hasValue ? "0.7rem" : "0.875rem",
          color: focused ? "var(--accent)" : "var(--text-tertiary)",
          background: "var(--bg-elevated)",
          padding: "0 0.25rem",
          transition: "all 0.2s ease",
          pointerEvents: "none",
          zIndex: 1,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="input-field"
        style={{
          minHeight: "48px",
          borderColor: focused ? "var(--accent)" : "var(--border)",
          boxShadow: focused ? "0 0 0 3px var(--accent-glow)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
      />
    </div>
  );
}

function Contact() {
  const [formState, setFormState] = useState("idle");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => setFormState("success"),
        () => setFormState("error")
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--bg-surface)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,131,74,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-label">Get In Touch</span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0.3em 0 0.5em",
            }}
          >
            Let's Build
            <br />
            <span style={{ color: "var(--accent)" }}>Something</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Open to new opportunities, collaborations, or just a good conversation about tech.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="card-glass"
            style={{ padding: "clamp(1.25rem, 4vw, 2.25rem)" }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0 0 1.5rem",
              }}
            >
              Send a Message
            </h3>

            <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <FormField id="name" label="Your Name" required />
              <FormField id="email" label="Email Address" type="email" />
              <FormField id="phone" label="Phone (optional)" type="tel" />

              <div style={{ position: "relative" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-field"
                  placeholder="Tell me about your project..."
                  style={{ resize: "vertical", minHeight: "120px" }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === "sending"}
                data-magnetic
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                style={{
                  padding: "0.85rem 1.75rem",
                  minHeight: "48px",
                  background: formState === "success" ? "rgba(72,199,142,0.1)" : "rgba(232,131,74,0.1)",
                  border: `1px solid ${formState === "success" ? "rgba(72,199,142,0.4)" : "rgba(232,131,74,0.4)"}`,
                  borderRadius: "6px",
                  color: formState === "success" ? "#48c78e" : "var(--accent)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: formState === "sending" ? "not-allowed" : "pointer",
                  opacity: formState === "sending" ? 0.65 : 1,
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  letterSpacing: "0.04em",
                  touchAction: "manipulation",
                }}
              >
                {formState === "idle" && (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
                {formState === "sending" && "Sending…"}
                {formState === "success" && (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message sent!
                  </>
                )}
                {formState === "error" && "Try again"}
              </motion.button>

              <AnimatePresence>
                {formState === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "#ff6b6b",
                      margin: 0,
                    }}
                  >
                    There was an error sending your message. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0 0 1rem",
              }}
            >
              Find Me On
            </h3>
            {SOCIALS.map((social, i) => (
              <SocialLink key={social.id} {...social} index={i} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginTop: "4rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "var(--text-tertiary)",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Harshit Shukla. Crafted with intention.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
            Available for work
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
