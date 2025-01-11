import { useRef, useState, useEffect } from "react";
import {
  FaFire,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { Code, Star, ExternalLink } from "lucide-react";
import PropTypes from 'prop-types';

import ct1 from "../assets/img/image.png";
import ct2 from "../assets/img/image2.png";
import ct3 from "../assets/img/image3.png";
import ct4 from "../assets/img/image4.png";
import ct5 from "../assets/img/image5.png";
import ct6 from "../assets/img/image6.png";

const projectsData = [
  {
    id: 2,
    title: "Chathere",
    description:
      "A real-time chat app with an intuitive interface, powered by React.js, Firebase, and Node.js.",
    tags: ["React", "Firebase", "Node.js"],
    imageUrl: [ct1, ct2, ct3, ct4, ct5, ct6],
    github: "https://github.com/harsshhit/Chathere",
    liveLink: "https://chathere-khaki.vercel.app/",
  },
];

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  github: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

function Project({ title, description, tags, imageUrl, github, liveLink }) {
  const ref = useRef(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (showGallery && Array.isArray(imageUrl)) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageUrl.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [showGallery, imageUrl]);

  return (
    <div ref={ref} className="group mb-8 last:mb-0">
      {liveLink ? (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-2 border-blue-500/30 rounded-2xl overflow-hidden relative shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Project Details */}
              <div className="flex flex-col justify-between space-y-4 z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-200 mb-4">{description}</p>
                </div>

                {/* Technology Tags */}
                {tags?.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider flex items-center transform transition-transform duration-300 hover:scale-110"
                      >
                        <span className="mr-1 flex items-center">
                          {tag === "React" && <FaReact className="text-blue-400 inline-block" alt="React" />}
                          {tag === "Firebase" && <FaFire className="text-orange-500 inline-block" alt="Firebase" />}
                          {tag === "Node.js" && <FaNodeJs className="text-green-500 inline-block" alt="Node.js" />}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Project Links */}
                <div className="flex space-x-4 items-center">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition flex items-center"
                  >
                    <ExternalLink className="text-xl mr-2" />
                    Live Project
                  </a>
                </div>
              </div>

              {/* Project Image */}
              {imageUrl && (
                <div
                  className="hidden md:block relative overflow-hidden rounded-xl cursor-pointer"
                  onMouseEnter={() => setShowGallery(true)}
                  onMouseLeave={() => {
                    setShowGallery(false);
                    setCurrentIndex(0);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-blue-500/30 mix-blend-overlay z-10" />
                  
                  {/* Main Image */}
                  <img
                    src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                    alt={`${title} project`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  {/* Gallery Overlay */}
                  {Array.isArray(imageUrl) && showGallery && (
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg">
                      <img
                        src={imageUrl[currentIndex]}
                        alt={`${title} preview ${currentIndex + 1}`}
                        className="w-full h-full object-contain p-4 rounded-lg shadow-md"
                      />
                      
                      {/* Gallery Progress Indicators */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {imageUrl.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 rounded-full ${
                              index === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative bg-gray-900 text-white py-16 md:py-44 lg:px-48 flex justify-center items-center overflow-hidden"
    >
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-black opacity-80">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center relative z-10 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white flex items-center justify-center gap-4">
            <Code className="text-white" />
            My Projects
            <Star className="text-yellow-400" />
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of innovative web applications that demonstrate my skills
            in full-stack development
          </p>
        </div>

        {/* Projects Container */}
        <div className="w-full max-w-6xl space-y-12">
          {projectsData.map((project) => (
            <div key={project.id}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}