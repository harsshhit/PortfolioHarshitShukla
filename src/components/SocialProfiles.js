import React from "react";
import "animate.css"; // Import animate.css
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDev } from "react-icons/fa";

function SocialProfiles() {
  return (
    <section
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900
    text-white min-h-screen py-16"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 animate-pulse">
          Social Profiles
        </h1>
        <div class="loader-gray-black mb-2"></div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          <a
            href="https://github.com/harsshht"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-flex items-center mb-4 sm:mb-0 sm:mr-4 transition duration-300 border-2 border-gray-700  hover:bg-gray-700  hover:border-white"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://leetcode.com/harshh8/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full shadow-lg inline-flex items-center mb-4 sm:mb-0 sm:mr-4 transition duration-300 border-2 border-yellow-300  hover:bg-yellow-300  hover:border-white"
          >
            <FaCode className="mr-2" />
            LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-shukla-8b706417a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-flex items-center mb-4 sm:mb-0 sm:mr-4 transition duration-300 border-2 border-blue-500  hover:bg-blue-500  hover:border-white"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://twitter.com/harryomm?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-flex items-center mb-4 sm:mb-0 sm:mr-4 transition duration-300 border-2 border-blue-300  hover:bg-blue-300  hover:border-white"
          >
            <FaTwitter className="mr-2" />
            Twitter
          </a>

          <a
            href="https://dev.to/your-devto-username"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-flex items-center transition duration-300 border-2 border-gray-700  hover:bg-gray-700  hover:border-white"
          >
            <FaDev className="mr-2" />
            Dev.to
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialProfiles;
