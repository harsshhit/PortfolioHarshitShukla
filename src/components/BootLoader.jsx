import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Session check: only play once per session
    const hasBooted = sessionStorage.getItem("portfolio_booted");
    if (!hasBooted) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("portfolio_booted", "true");
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#080808",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          {/* Logo draw line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #E8834A, transparent)",
              boxShadow: "0 0 16px #E8834A",
            }}
          />

          {/* Scramble text */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              color: "#F2F2F0",
              textTransform: "uppercase",
            }}
          >
            Harshit Shukla
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              color: "#8A8A85",
              textTransform: "uppercase",
            }}
          >
            Initializing Experience…
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
