import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const CHANNEL_CARDS = [
  {
    id: "email",
    label: "EMAIL",
    value: "harshitshuklaharsh8@gmail.com",
    link: "mailto:harshitshuklaharsh8@gmail.com",
    canCopy: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WHATSAPP",
    value: "+91 6394887052",
    link: "https://api.whatsapp.com/send?phone=916394887052",
    canCopy: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "in/harshit-shukla",
    link: "https://www.linkedin.com/in/harshit-shukla-8b706417a",
    canCopy: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GITHUB",
    value: "@harsshhit",
    link: "https://github.com/harsshhit",
    canCopy: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

function ChannelCard({ item, index }) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(item.id === "email" ? "harshitshuklaharsh8@gmail.com" : "6394887052");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={item.link}
      target={item.id !== "email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      data-magnetic
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.6rem 1.5rem",
        minHeight: "170px",
        background: hovered ? "rgba(18, 19, 26, 0.95)" : "rgba(13, 14, 18, 0.8)",
        border: hovered
          ? "1px solid rgba(232, 131, 74, 0.4)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "22px",
        textDecoration: "none",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered
          ? "0 15px 35px -10px rgba(0,0,0,0.7), 0 0 25px rgba(232,131,74,0.15)"
          : "0 10px 25px -5px rgba(0,0,0,0.4)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Bar: Circular Icon + Top Right Diagonal Arrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: hovered ? "rgba(232, 131, 74, 0.15)" : "rgba(255, 255, 255, 0.05)",
            border: hovered
              ? "1px solid rgba(232, 131, 74, 0.4)"
              : "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hovered ? "var(--accent)" : "var(--text-primary)",
            transition: "all 0.3s ease",
          }}
        >
          {item.icon}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {item.canCopy && (
            <button
              onClick={handleCopy}
              title="Copy to clipboard"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "999px",
                padding: "0.3rem 0.6rem",
                color: copied ? "#48c78e" : "var(--text-tertiary)",
                fontSize: "0.72rem",
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}

          <div
            style={{
              color: hovered ? "var(--accent)" : "var(--text-tertiary)",
              transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Information: Tag Label + Handle Value */}
      <div style={{ marginTop: "1.25rem" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
            marginBottom: "0.35rem",
          }}
        >
          {item.label}
        </div>

        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            fontWeight: 700,
            color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
            wordBreak: "break-all",
            lineHeight: 1.25,
            transition: "color 0.25s ease",
          }}
        >
          {item.value}
        </div>
      </div>
    </motion.a>
  );
}

function FormField({ id, label, type = "text", required = false, value, onChange }) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "1rem",
          top: focused || value ? "-0.55rem" : "0.95rem",
          fontSize: focused || value ? "0.7rem" : "0.875rem",
          fontWeight: focused || value ? 600 : 400,
          color: focused ? "var(--accent)" : "var(--text-tertiary)",
          background: "#0d0e12",
          padding: "0 0.35rem",
          transition: "all 0.2s ease",
          pointerEvents: "none",
          zIndex: 2,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.03em",
          borderRadius: "4px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className="input-field"
        style={{
          minHeight: "50px",
          background: "#0d0e12",
          borderColor: focused ? "var(--accent)" : "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          boxShadow: focused ? "0 0 0 3px var(--accent-glow)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedTopic, setSelectedTopic] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const handleTopicClick = (topicText) => {
    setSelectedTopic(topicText);
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message}\n\n[Inquiry Type: ${topicText}]` : `Hi Harshit,\n\nI am reaching out regarding ${topicText}. `,
    }));
  };

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
        () => {
          setFormState("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => setFormState("error")
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232, 131, 74, 0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span
            className="section-label"
            style={{
              letterSpacing: "0.22em",
              fontSize: "0.78rem",
            }}
          >
            PICK WHICHEVER CHANNEL SUITS YOU
          </span>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0.2em 0 0.5em",
            }}
          >
            Let's Build Something
            <br />
            <span style={{ color: "var(--accent)" }}>Remarkable</span>
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Select your preferred communication channel below or send a direct message right here.
          </p>
        </motion.div>

        {/* Channels Card Grid (4 Cards inspired by user image reference) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {CHANNEL_CARDS.map((item, index) => (
            <ChannelCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Direct Message Glass Form Container */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            background: "rgba(13, 14, 18, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "24px",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ marginBottom: "1.75rem", textAlign: "center" }}>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "0 0 0.5rem",
              }}
            >
              Or Send a Direct Message
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
              Select an optional topic tag to get started quickly:
            </p>

            {/* Quick Topic Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
              {["💼 Full-Time Role", "🚀 Web Development", "🤖 AI Solution", "☕ General Connect"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleTopicClick(t)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "999px",
                    background: selectedTopic === t ? "rgba(232, 131, 74, 0.2)" : "rgba(255, 255, 255, 0.04)",
                    border: selectedTopic === t ? "1px solid var(--accent)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: selectedTopic === t ? "var(--accent)" : "var(--text-secondary)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1.25rem" }}>
              <FormField
                id="name"
                label="Your Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <FormField
                id="email"
                label="Email Address *"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <FormField
              id="phone"
              label="Phone Number (Optional)"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <div style={{ position: "relative" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                  marginBottom: "0.4rem",
                  letterSpacing: "0.04em",
                }}
              >
                YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field"
                placeholder="Tell me about your project, idea, or role opportunity..."
                style={{
                  resize: "vertical",
                  minHeight: "120px",
                  background: "#0d0e12",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={formState === "sending"}
              data-magnetic
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{
                padding: "0.95rem 2rem",
                minHeight: "52px",
                background: formState === "success" ? "rgba(72,199,142,0.15)" : "var(--accent)",
                border: `1px solid ${formState === "success" ? "#48c78e" : "var(--accent)"}`,
                borderRadius: "12px",
                color: formState === "success" ? "#48c78e" : "#080808",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: formState === "sending" ? "not-allowed" : "pointer",
                opacity: formState === "sending" ? 0.65 : 1,
                transition: "all 0.25s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                letterSpacing: "0.04em",
                boxShadow: formState === "success" ? "none" : "0 0 24px var(--accent-glow)",
              }}
            >
              {formState === "idle" && (
                <>
                  SEND MESSAGE
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
              {formState === "sending" && "SENDING MESSAGE..."}
              {formState === "success" && (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  MESSAGE SENT SUCCESSFULLY!
                </>
              )}
              {formState === "error" && "ERROR SENDING — PLEASE TRY AGAIN"}
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
                    textAlign: "center",
                  }}
                >
                  There was an issue sending your message. Please reach out directly via Email or WhatsApp above.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Footer info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginTop: "4rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
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
              fontSize: "0.8rem",
              color: "var(--text-tertiary)",
              margin: 0,
              letterSpacing: "0.03em",
            }}
          >
            © {new Date().getFullYear()} Harshit Shukla. Crafted with precision & React.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "0.35rem 0.85rem",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#48c78e",
                boxShadow: "0 0 8px #48c78e",
              }}
            />
            Available for Q3/Q4 Projects & Full-time Roles
          </div>
        </motion.div>
      </div>
    </section>
  );
}
