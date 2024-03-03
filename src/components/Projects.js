import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

import st0 from "../assets/st0.png";
import st1 from "../assets/st1.png";
import st2 from "../assets/st2.png";
import st3 from "../assets/st3.png";
import st4 from "../assets/st4.png";

import ct1 from "../assets/ct1.png";
import ct2 from "../assets/ct2.png";
import ct3 from "../assets/ct3.png";

import tk1 from "../assets/tk1.png";
import tk2 from "../assets/tk2.png";

const data = [
  {
    id: 1,
    images: [st0, st1, st2, st3, st4],
    title: "Streamhere",
    description:
      "A Fullstack Video streaming webapp with React, NextJS, TailwindCSS & Prisma",
    github: "https://github.com/harsshht/StreamHere",
    demo: "https://stream-here.vercel.app/",
  },
  {
    id: 2,
    images: [ct1, ct2, ct3],
    title: "Chathere",
    description:
      " A real-time chat app with an intuitive interface, powered by React.js, Firebase, and Node.js.",
    github: "https://github.com/harsshht/chatHere",
    demo: "https://chat-here-eta.vercel.app/",
  },
  {
    id: 3,
    images: [tk1, tk2],
    title: "Taskhere",
    description:
      "The ultimate React.js task app for effortless task management, organization, and enhanced productivity.",
    github: "https://github.com/harsshht/TaskHere",
    demo: "https://task-here.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900 to-blue-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 animate-pulse">
          Projects
        </h1>
        <div class="loader-gray-black"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {data.map(({ id, images, title, description, github, demo }) => {
            return (
              <div
                key={id}
                className="bg-gradient-to-r from-black via-gray-800 to-blue-900 p-4 rounded-lg shadow-lg overflow-hidden"
              >
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  swipeable={true}
                  autoPlay={true}
                  interval={5000}
                  dynamicHeight={true}
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        className="object-cover h-60 w-full"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 pb-6">{description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={github}
                      className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-semibold py-2 px-4 rounded-full border-2 border-purple-600 hover:border-purple-700 shadow-md mb-2 md:mb-0 md:mr-2 inline-block transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={demo}
                      className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-2 px-4 rounded-full border-2 border-green-600 hover:border-green-700 shadow-md inline-block transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
