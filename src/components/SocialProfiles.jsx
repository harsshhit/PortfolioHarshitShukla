import { useState } from "react";
import profileImage from "../assets/resumelogo2.png";
import { socialLinks } from "../data/data";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDev } from "react-icons/fa";

function SocialProfiles() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id="Socials"
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col items-end"
      style={{ zIndex: 50 }}
    >
      {/* Enhanced Main Button with Profile Image */}
      <button
        onClick={toggleExpand}
        className={`
          bg-gradient-to-br from-blue-500 to-purple-600 
          text-white h-14 w-14 rounded-full 
          shadow-xl flex items-center justify-center 
          transition-all duration-300 ease-in-out
          hover:shadow-2xl hover:scale-110
          active:scale-95
          ${isExpanded ? "mb-4 rotate-45" : ""}
          relative overflow-hidden
          group
        `}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-1 border-4 border-transparent bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Profile Image with Hover Effect */}
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className={`
              w-full h-full object-cover 
              transition-transform duration-300
              group-hover:scale-110 
              group-hover:rotate-6
            `}
          />
        </div>

        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-blue-500 animate-ping opacity-25 rounded-full z-[-1]"></div>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full z-10"></div>
      </button>

      {/* Social Links */}
      <div
        className={`
          flex flex-col space-y-4 
          transition-all duration-300 ease-in-out 
          overflow-hidden
          ${isExpanded ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}
        `}
      >
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${link.bgColor} ${link.textColor} 
              h-10 w-10 font-semibold p-2 
              rounded-full shadow-md 
              inline-flex items-center justify-center 
              transition duration-300 border-2 
              ${link.borderColor} 
              ${link.hoverBgColor} 
              ${link.hoverBorderColor}
              transform hover:scale-110
            `}
            title={link.label}
          >
            {link.iconName === "FaGithub" && <FaGithub className="text-xl" />}
            {link.iconName === "FaTwitter" && <FaTwitter className="text-xl" />}
            {link.iconName === "FaLinkedin" && (
              <FaLinkedin className="text-xl" />
            )}
            {link.iconName === "FaCode" && <FaCode className="text-xl" />}
            {link.iconName === "FaDev" && <FaDev className="text-xl" />}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialProfiles;
