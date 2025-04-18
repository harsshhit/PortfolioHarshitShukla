import { useState, useEffect } from "react";
import { BiSolidUser, BiSolidBook } from "react-icons/bi";
import { RiToolsFill, RiFileHistoryFill } from "react-icons/ri";
import {  BsFillFileEarmarkPdfFill, BsFillChatRightDotsFill } from "react-icons/bs";
import { FaGithub, FaTwitter, FaLinkedin, FaCode, FaDev } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderContext } from "../context/HeaderContext";
import { socialLinks } from "../data/data";
import resumelogo from "../assets/resumelogo2svg.png";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
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

  const navItems = [
    { id: "#", icon: <BiSolidUser />, label: "About" },
    // { id: "#skills", icon: <BiSolidBook />, label: "Skills" },
    { id: "#experience", icon: <RiFileHistoryFill />, label: "Experience" },
    { id: "#projects", icon: <RiToolsFill />, label: "Projects" },
    { id: "#resume", icon: <BsFillFileEarmarkPdfFill />, label: "Resume" },
    { id: "#contact", icon: <BsFillChatRightDotsFill />, label: "Contact" },
  ];

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
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-0 right-0 mx-auto z-[60] w-fit max-w-[90vw] flex justify-center"
      onMouseEnter={() => {
        // Don't change blur state on mouse enter
        // Let the toggleSocials function handle the blur effect
      }}
      onMouseLeave={() => {
        // Don't change blur state on mouse leave
        // Let the toggleSocials function handle the blur effect
        setHoveredItem(null);
      }}
      onFocus={() => {
        // Don't change blur state on focus
        // Let the toggleSocials function handle the blur effect
      }}
      onBlur={() => {
        // Don't change blur state on blur
        // Let the toggleSocials function handle the blur effect
        setHoveredItem(null);
      }}
    >
      {/* Main navigation bar */}
      <motion.div
        className="relative flex items-center justify-center w-full"
        layout
        style={{
          filter: showSocials ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' : 'none',
          transition: 'filter 0.3s ease-in-out'
        }}
      >
        <motion.ul
          className={`flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 justify-center bg-gradient-to-r from-[#111111]/95 via-[#111111]/98 to-[#111111]/95 rounded-full p-2 xs:p-2.5 sm:p-3 md:p-3.5 backdrop-blur-xl
                    border ${showSocials ? 'border-blue-500/40' : 'border-[#262626]'} shadow-lg ${showSocials ? 'shadow-blue-500/20' : 'shadow-black/20'} transition-all duration-300 overflow-visible`}
          layout
        >
          {navItems.map((item) => (
            <motion.li key={item.id} layout className="relative">
              <a
                href={item.id}
                onClick={(e) => {
                  // Prevent event propagation to avoid toggling blur effect
                  e.stopPropagation();

                  setActiveNav(item.id);
                  // For mobile, toggle tooltip visibility on click
                  if (isMobile) {
                    setHoveredItem(hoveredItem === item.id ? null : item.id);
                  }
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
                onFocus={() => setHoveredItem(item.id)}
                onBlur={() => !isMobile && setHoveredItem(null)}
                className={`p-2.5 xs:p-3 sm:p-3.5 md:p-4 lg:p-4.5 rounded-full text-gray-300 flex transition-all duration-300
                          hover:text-white hover:scale-110 transform-gpu text-lg xs:text-xl sm:text-xl md:text-2xl
                          ${activeNav === item.id
                      ? "text-blue-400 bg-[#1a1a1a] border border-blue-500/50 scale-105"
                      : "hover:bg-[#1a1a1a]"
                  }`}
                aria-label={`Navigate to ${item.label || item.id.replace('#', '') || 'home'} section`}
              >
                {item.icon}
              </a>

              {/* Tooltip showing the name */}
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -5, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 -top-9 xs:-top-10 sm:-top-11 whitespace-nowrap"
                  >
                    <div className="bg-gray-900 text-white text-xs xs:text-sm px-2 xs:px-2.5 py-1 xs:py-1.5 rounded shadow-lg border border-gray-700">
                      {item.label}
                    </div>
                    <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-gray-900 rotate-45 absolute left-1/2 transform -translate-x-1/2 -bottom-1 xs:-bottom-1.5 border-r border-b border-gray-700"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}

          {/* Social media toggle button */}
          <motion.li layout className="relative">
            <button
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
              className={`p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full flex items-center justify-center transition-all duration-300
                        hover:text-white hover:scale-110 transform-gpu text-lg xs:text-xl sm:text-xl md:text-2xl group
                        ${showSocials
                  ? "text-purple-400 bg-[#1a1a1a] border border-purple-500/50 scale-105 rotate-45"
                  : "text-gray-300 hover:bg-[#1a1a1a]"}`}
              aria-label="Toggle social links"
              aria-expanded={showSocials}
            >
              <img
                src={resumelogo}
                alt="Resume Logo"
                className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9
                  object-contain filter animate-pulse-glow
                  transition-all duration-300 ease-in-out
                  group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.9)]
                  rounded-full p-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30
                  hover:scale-110 transform-gpu"
              />
            </button>

            {/* Tooltip showing the name */}
            <AnimatePresence>
              {hoveredItem === "socials" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -5, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 -top-9 xs:-top-10 sm:-top-11 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xs xs:text-sm px-2 xs:px-2.5 py-1 xs:py-1.5 rounded shadow-lg border border-purple-500/30">
                    Social Links
                  </div>
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-gray-900 rotate-45 absolute left-1/2 transform -translate-x-1/2 -bottom-1 xs:-bottom-1.5 border-r border-b border-purple-500/30"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        </motion.ul>

        {/* Social media icons */}
        <AnimatePresence>
          {showSocials && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-16 xs:-top-18 sm:-top-20 md:-top-22 left-0 right-0 mx-auto w-fit"
              onClick={(e) => {
                // Prevent event propagation to avoid toggling blur effect
                e.stopPropagation();
              }}
            >
              <div
                className="flex items-center justify-center flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-xl p-2.5 xs:p-3 sm:p-3.5 md:p-4 rounded-full border border-white/20 shadow-lg shadow-black/30"
                onClick={(e) => {
                  // Prevent event propagation to avoid toggling blur effect
                  e.stopPropagation();
                }}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      // Prevent event propagation to avoid toggling blur effect
                      e.stopPropagation();
                    }}
                    className={`
                      ${link.bgColor || "bg-gray-800"}
                      ${link.textColor || "text-white"}
                      h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-13 lg:w-13 rounded-full shadow-md
                      flex items-center justify-center
                      transition-all duration-200
                      transform hover:scale-110 hover:shadow-lg
                      border-2 ${link.borderColor || "border-transparent"}
                      ${link.hoverBgColor || "hover:bg-gray-700"}
                      group overflow-hidden relative social-icon-hover
                    `}
                    title={link.label}
                    aria-label={link.label}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 transition-opacity duration-300"></div>

                    {/* Icon */}
                    <span className="relative z-10 text-lg xs:text-xl sm:text-xl md:text-2xl">
                      <SocialIcon iconName={link.iconName} />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Header;