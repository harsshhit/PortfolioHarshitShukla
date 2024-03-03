import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faDatabase,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css"; // Import animate.css




function Introduction() {
  return (
    <section
      id="introduction"
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white pt-24"
    >
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900border-2 border-gray-700 hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faDesktop} /> Frontend Development
            </h2>
            <p className="text-gray-300">
              Proficient in HTML, CSS, JavaScript, and modern front-end
              libraries and frameworks like React.
            </p>
          </div>

          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faServer} /> Backend Development
            </h2>
            <p className="text-gray-300">
              Experienced in building server-side applications using Node.js,
              Express, and MongoDB.
            </p>
          </div>
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faDatabase} /> Database Management
            </h2>
            <p className="text-gray-300">
              Skilled in designing and managing databases using MongoDB and
              MySQL.
            </p>
          </div>
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-2">
              <FontAwesomeIcon icon={faPalette} /> UI/UX Design
            </h2>
            <p className="text-gray-300">
              Proficient in creating user-friendly interfaces and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

