import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import animate.css
import pdfres from "../assets/ResumeHarshitShukla7.pdf";

function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  const resumeLink =
    "https://drive.google.com/file/d/1-v9Jj-gVfN5JLPHYFwt2GQfd1m0SgBC_/view?usp=drive_link";

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  return (
    <section
      id="resume"
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900
    text-white min-h-screen py-16"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 animate-pulse">
          Resume
        </h1>
        <div class="loader-gray-black"></div>{" "}
        <div className="text-center mt-4">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-block animate__animated animate__fadeIn animate__delay-300 transition duration-300 border-2 border-gray-700  hover:bg-blue-950  hover:border-white"
          >
            Download My Resume
          </a>
        </div>
        {/* Embed PDF */}
        {showPdf && (
          <div className="mt-8 flex justify-center items-center">
            <iframe
              src={pdfres}
              title="Resume PDF"
              width="80%"
              height="500"
            ></iframe>
          </div>
        )}
        {/* Button to toggle PDF */}
        <div className="text-center mt-4">
          <button
            onClick={togglePdf}
            className="bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg inline-block animate__animated animate__fadeIn animate__delay-300 transition duration-300 border-2 border-gray-700  hover:bg-blue-950  hover:border-white"
          >
            {showPdf ? "Hide PDF" : "Show PDF"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
