import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCode, FaDev } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderContext } from "../context/HeaderContext";
import { socialLinks } from "../data/data";
import resumelogo from "../assets/resumelogo2svg.png";

const Header = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { toggleHeaderActive, setSocialsVisible } = useHeaderContext();

  // Check if viewport is mobile sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Apply blur effect when component mounts and sync with context
  useEffect(() => {
    // Sync the showSocials state with the context when component mounts
    setSocialsVisible(showSocials);

    return () => {
      // Clean up by removing blur effect when component unmounts
      toggleHeaderActive(false);
      setSocialsVisible(false);
    };
  }, [toggleHeaderActive, setSocialsVisible, showSocials]);

  // Toggle social media visibility
  const toggleSocials = () => {
    const newSocialsState = !showSocials;
    setShowSocials(newSocialsState);
    // Update context with social visibility state
    setSocialsVisible(newSocialsState);
    // Always set isHeaderActive to true when resumelogo button is clicked
    // This ensures the background is always blurred when social icons are toggled
    toggleHeaderActive(newSocialsState);
  };

  // Social media icon component
  const SocialIcon = ({ iconName }) => {
    const icons = {
      FaGithub: <FaGithub />,
      FaTwitter: <FaTwitter />,
      FaLinkedin: <FaLinkedin />,
      FaCode: <FaCode />,
      FaDev: <FaDev />,
    };

    return icons[iconName] || null;
  };

  return (
    <>
      {/* Full-page social media overlay */}
      <AnimatePresence>
        {showSocials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-[#111111]/95 via-[#0a0a0a]/98 to-[#111111]/95 backdrop-blur-xl z-[100] flex items-center justify-center"
            onClick={() => setShowSocials(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={() => setShowSocials(false)}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#D4AF37] hover:text-[#FFD700] text-3xl font-bold transition-colors duration-300 z-[110]"
              aria-label="Close social links"
            >
              ✕
            </motion.button>

            {/* Social icons container */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center justify-center space-y-8 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4 text-center"
              >
                Connect With Me
              </motion.h2>

              {/* Social icons grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.4 + (index * 0.1), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      ${link.bgColor || "bg-[#1a1a1a]"}
                      ${link.textColor || "text-white"}
                      w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-3xl shadow-2xl
                      flex flex-col items-center justify-center
                      transition-all duration-300
                      border-2 ${link.borderColor || "border-[#D4AF37]/30"}
                      ${link.hoverBgColor || "hover:bg-[#2a2a2a]"}
                      hover:border-[#D4AF37]/60
                      group overflow-hidden relative
                      backdrop-blur-sm
                    `}
                    title={link.label}
                    aria-label={link.label}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#D4AF37]/20 via-[#FFD700]/20 to-[#D4AF37]/20 transition-opacity duration-300"></div>

                    {/* Icon */}
                    <span className="relative z-10 text-2xl md:text-3xl lg:text-4xl mb-1">
                      <SocialIcon iconName={link.iconName} />
                    </span>
                    
                    {/* Label */}
                    <span className="relative z-10 text-xs md:text-sm font-medium text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>

            
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-[60] w-fit"
        onMouseLeave={() => setHoveredItem(null)}
        onBlur={() => setHoveredItem(null)}
      >
      {/* Social media toggle button container */}
      <motion.div
        className="relative flex items-center justify-center w-full"
        layout
        style={{
          filter: showSocials ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' : 'none',
          transition: 'filter 0.3s ease-in-out'
        }}
      >
        <motion.div
          className={`flex items-center justify-center bg-gradient-to-r from-[#111111]/95 via-[#111111]/98 to-[#111111]/95 rounded-full p-2.5 xs:p-3 sm:p-3.5 md:p-2 backdrop-blur-xl
                    border ${showSocials ? 'border-[#D4AF37]/60' : 'border-[#D4AF37]/20'} shadow-2xl ${showSocials ? 'shadow-[#D4AF37]/30' : 'shadow-black/40'} transition-all duration-500 overflow-visible
                    ${showSocials ? 'ring-4 ring-[#D4AF37]/20' : ''}`}
          layout
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/10 to-[#D4AF37]/10 opacity-0"
            animate={{ opacity: showSocials ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Social media toggle button */}
          <motion.div layout className="relative">
            <motion.button
              onClick={() => {
                toggleSocials();
                // For mobile, toggle tooltip visibility on click
                if (isMobile) {
                  setHoveredItem(hoveredItem === "socials" ? null : "socials");
                }
              }}
              onMouseEnter={() => setHoveredItem("socials")}
              onMouseLeave={() => !isMobile && setHoveredItem(null)}
              onFocus={() => setHoveredItem("socials")}
              onBlur={() => !isMobile && setHoveredItem(null)}
              className={`p-2.5 xs:p-3 sm:p-3.5 md:p-2 lg:p-2 rounded-full flex items-center justify-center transition-all duration-500
                        hover:text-white hover:scale-110 transform-gpu text-sm xs:text-base sm:text-lg md:text-lg group relative overflow-hidden
                        ${showSocials
                  ? "text-[#D4AF37] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#D4AF37]/60 scale-105 rotate-12 shadow-2xl shadow-[#D4AF37]/40"
                  : "text-[#D4AF37] hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#2a2a2a] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37]/60"}`}
              aria-label="Toggle social links"
              aria-expanded={showSocials}
              whileHover={{ 
                scale: 1.1,
                rotate: showSocials ? 12 : 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Button background glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/20 to-[#D4AF37]/20 opacity-0"
                animate={{ opacity: showSocials ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40"
                animate={{ 
                  scale: showSocials ? [1, 1.2, 1] : 1,
                  opacity: showSocials ? [0.5, 0, 0.5] : 0
                }}
                transition={{ 
                  duration: 2,
                  repeat: showSocials ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
              
              <motion.img
                src={resumelogo}
                alt="Resume Logo"
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-6 md:w-6 relative z-10
                  object-contain filter
                  transition-all duration-500 ease-in-out
                  group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]
                  rounded-full p-0.5 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/20 to-[#D4AF37]/20
                  hover:scale-110 transform-gpu"
                animate={{ 
                  rotate: showSocials ? 360 : 0,
                  scale: showSocials ? 1.1 : 1
                }}
                transition={{ 
                  rotate: { duration: 0.5 },
                  scale: { duration: 0.3 }
                }}
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full opacity-0"
                animate={{ 
                  opacity: showSocials ? [0, 1, 0] : 0,
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: showSocials ? Infinity : 0,
                  delay: 0.5
                }}
              />
            </motion.button>

            {/* Enhanced tooltip */}
            <AnimatePresence>
              {hoveredItem === "socials" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -5, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-12 xs:-top-14 sm:-top-16 whitespace-nowrap z-20"
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-[#D4AF37] text-xs xs:text-sm px-3 xs:px-4 py-2 xs:py-2.5 rounded-xl shadow-2xl border border-[#D4AF37]/40 backdrop-blur-sm"
                    animate={{ 
                      boxShadow: [
                        "0 0 0px rgba(212,175,55,0.3)",
                        "0 0 20px rgba(212,175,55,0.4)",
                        "0 0 0px rgba(212,175,55,0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="font-semibold">Connect With Me</span>
                  </motion.div>
                  <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 bg-[#111111] rotate-45 absolute left-1/2 transform -translate-x-1/2 -bottom-1.5 xs:-bottom-2 border-r border-b border-[#D4AF37]/40"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.nav>
    </>
  );
};

export default Header;