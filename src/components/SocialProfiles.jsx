import { useState, useEffect } from "react";
import profileImage from "../assets/resumelogo2.png";
import { socialLinks } from "../data/data";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDev } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

function SocialProfiles() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Add blur effect to the rest of the application when expanded
  useEffect(() => {
    const mainContent = document.getElementById("root") || document.body;

    if (isExpanded) {
      mainContent.classList.add("blur-effect");
    } else {
      mainContent.classList.remove("blur-effect");
    }

    return () => {
      mainContent.classList.remove("blur-effect");
    };
  }, [isExpanded]);

  // Map component for social icons
  const SocialIcon = ({ iconName }) => {
    const icons = {
      FaGithub: <FaGithub className="text-xl" />,
      FaTwitter: <FaTwitter className="text-xl" />,
      FaLinkedin: <FaLinkedin className="text-xl" />,
      FaCode: <FaCode className="text-xl" />,
      FaDev: <FaDev className="text-xl" />,
    };

    return icons[iconName] || null;
  };

  SocialIcon.propTypes = {
    iconName: PropTypes.string.isRequired, // Add prop validation for iconName
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-md z-30 transition-opacity duration-300"
          onClick={toggleExpand}
          aria-hidden="true"
        />
      )}

      <div
        id="Socials"
        className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 flex flex-col items-end"
      >
        <button
          onClick={toggleExpand}
          className={`
            bg-gradient-to-br from-blue-500 to-purple-600 
            text-white h-14 w-14 rounded-full 
            shadow-lg flex items-center justify-center 
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:scale-105
            active:scale-95
            ${isExpanded ? "mb-4 rotate-45" : ""}
            relative overflow-hidden
            group z-50
          `}
          aria-expanded={isExpanded}
          aria-label="Toggle social links"
        >
          <div className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300"></div>

          <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>

        <div
          className={`
            flex flex-col space-y-3 
            transition-all duration-300 ease-in-out 
            ${
              isExpanded
                ? "opacity-100 max-h-96 mt-2"
                : "opacity-0 max-h-0 pointer-events-none"
            }
          `}
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${link.bgColor || "bg-gray-800"} 
                ${link.textColor || "text-white"} 
                h-10 w-10 rounded-full shadow-md 
                flex items-center justify-center 
                transition-all duration-200
                transform hover:scale-110 hover:shadow-lg
                border-2 ${link.borderColor || "border-transparent"}
                ${link.hoverBgColor || "hover:bg-gray-700"}
              `}
              title={link.label}
              aria-label={link.label}
            >
              <SocialIcon iconName={link.iconName} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default SocialProfiles;
