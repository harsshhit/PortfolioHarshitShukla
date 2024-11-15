import React from "react";
import profileImage from "../assets/profile.png";
import "../index.css";

function Welcome() {
  return (
    <div
      id="Welcome"
      className="bg-gradient-to-r from-yellow-900 via-gray-800 to-red-900
 text-white py-12 md:py-40 pt-40"
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row px-6">
        <div className="flex-1">
          <div className="mx-auto w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Harshit Shukla"
              className="w-full h-full object-cover animate__animated animate__fadeIn animate__delay-300"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left px-6 md:ml-4">
          <h1 className="text-3xl pt-8 pb-4 md:text-5xl font-extrabold mb-4 md:mb-0 md:ml-3 transform scale-105 animate__animated animate__fadeIn animate__delay-500">
            Harshit Shukla
          </h1>
          <h1 className="text-2xl pt-2 text-gray-400 pb-4 md:text-3xl font-extrabold mb-4 md:mb-0 md:ml-3 transform scale-105 animate__animated animate__fadeIn animate__delay-500">
            I build things for the web.
          </h1>
          <p className="text-lg md:text-xl mb-4 md:mb-8 text-gray-300 animate__animated animate__fadeIn animate__delay-700">
            I'm a full-stack web developer specializing in the MERN stack.I'm
            passionate about creating modern and interactive web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
