import { useState } from "react";
import { BiSolidUser, BiLogoReact } from "react-icons/bi";
import { BsCodeSlash, BsFillFileEarmarkPdfFill, BsFillChatRightDotsFill } from "react-icons/bs";
// import { RiContactsFill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { id: "#", icon: <BiSolidUser /> },
    // { id: "#introduction", icon: <RiContactsFill /> },
    { id: "#skills", icon: <BiLogoReact /> },
    { id: "#projects", icon: <BsCodeSlash /> },
    { id: "#resume", icon: <BsFillFileEarmarkPdfFill /> },
    { id: "#contact", icon: <BsFillChatRightDotsFill /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex gap-3 justify-center bg-[#111111]/80 rounded-full p-2 backdrop-blur-md 
                    border border-[#262626] shadow-lg shadow-black/20">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`p-4 rounded-full text-gray-300 flex transition-all duration-300
                         hover:text-white hover:scale-110 transform-gpu
                         ${activeNav === item.id
                    ? "text-blue-400 bg-[#1a1a1a] border border-blue-500/50"
                    : "hover:bg-[#1a1a1a]"
                }`}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
