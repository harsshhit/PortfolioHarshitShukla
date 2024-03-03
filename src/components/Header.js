import React, { useState } from "react";
import { BiSolidUser, BiSolidDetail, BiLogoReact } from "react-icons/bi";
import { BsCodeSlash, BsFillFileEarmarkPdfFill, BsFillChatRightDotsFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItems = [
    { id: "#", icon: <BiSolidUser /> },
    { id: "#introduction", icon: <RiContactsFill /> },
    { id: "#skills", icon: <BiLogoReact /> },
    { id: "#projects", icon: <BsCodeSlash /> },
    { id: "#resume", icon: <BsFillFileEarmarkPdfFill /> },
    { id: "#contact", icon: <BsFillChatRightDotsFill /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 shadow-sm shadow-black">
      <ul className="flex gap-2 justify-center bg-opacity-30 bg-black rounded-full p-2 backdrop-blur-md shadow-sm shadow-gray-400">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`p-3 rounded-full text-white ${
                activeNav === item.id
                  ? "bg-primary bg-gray-800"
                  : "hover:bg-opacity-40"
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
