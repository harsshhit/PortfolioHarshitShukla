import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900
      text-white min-h-screen pt-24"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 animate-pulse">
          Skills
        </h1>
        <div class="loader-gray-black"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900 border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Frontend</h2>
            <ul className="text-gray-300 list-disc ml-6">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900 border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Backend</h2>
            <ul className="text-gray-300 list-disc ml-6">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>Authentication & Authorization</li>
              <li>Database Design</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900 border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Databases
            </h2>
            <ul className="text-gray-300 list-disc ml-6">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Database Modeling</li>
              <li>SQL Queries</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-black via-gray-800 to-blue-900 border-2 border-gray-700  hover:bg-blue-950  hover:border-white mx-8 my-2 p-6 rounded-xl shadow-lg text-white font-semibold py-4 px-6 transform hover:scale-105 hover:shadow-xl transition duration-300 animate__animated animate__fadeIn animate__delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Tools</h2>
            <ul className="text-gray-300 list-disc ml-6">
              <li>Git & Version Control</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
