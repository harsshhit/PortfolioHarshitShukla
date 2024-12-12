import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDev } from "react-icons/fa";
import profileImage from "../assets/resumelogo2.png";

// JSON object containing the social links and details
const socialLinks = [
  {
    id: "github",
    url: "https://github.com/harsshhit",
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    bgColor: "bg-gray-900",
    textColor: "text-white",
    borderColor: "border-gray-700",
    hoverBgColor: "hover:bg-gray-700",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "twitter",
    url: "https://twitter.com/theharryom?s=09",
    icon: <FaTwitter className="text-xl" />,
    label: "Twitter",
    bgColor: "bg-blue-400",
    textColor: "text-white",
    borderColor: "border-blue-300",
    hoverBgColor: "hover:bg-blue-300",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/harshit-shukla-8b706417a",
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    bgColor: "bg-blue-700",
    textColor: "text-white",
    borderColor: "border-blue-500",
    hoverBgColor: "hover:bg-blue-500",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "leetcode",
    url: "https://leetcode.com/harshh8/",
    icon: <FaCode className="text-xl" />,
    label: "LeetCode",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    borderColor: "border-yellow-300",
    hoverBgColor: "hover:bg-yellow-300",
    hoverBorderColor: "hover:border-white",
  },
  {
    id: "devto",
    url: "https://dev.to/your-devto-username",
    icon: <FaDev className="text-xl" />,
    label: "Dev.to",
    bgColor: "bg-black",
    textColor: "text-white",
    borderColor: "border-gray-700",
    hoverBgColor: "hover:bg-gray-700",
    hoverBorderColor: "hover:border-white",
  },
];

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
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialProfiles;
