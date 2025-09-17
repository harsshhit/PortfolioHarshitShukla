import { useState, useEffect } from "react";
import { FaFire, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { Code, Star, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";
import { projectsData } from "../data/data";

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  github: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

function Project({ title, description, tags, imageUrl, github, liveLink }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent mb-4">
                {title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {tags?.map((tag, index) => (
                <li
                  key={index}
                  className="bg-blue-500/10 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 flex items-center gap-2"
                >
                  <span>
                    {tag === "React" && <FaReact className="text-blue-400" />}
                    {tag === "Firebase" && <FaFire className="text-blue-400" />}
                    {tag === "Node.js" && <FaNodeJs className="text-blue-400" />}
                  </span>
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
              >
                <ExternalLink className="text-xl" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="group">
              <img
                src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                alt={`${title} preview`}
                className="w-full h-80 object-cover rounded-xl shadow-2xl border border-blue-500/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      id="projects"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex items-center justify-center gap-2 md:gap-4">
          My Projects
          </h2>
          <p className="text-gray-300 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            A showcase of innovative web applications that demonstrate my skills in full-stack development
          </p>
        </div>

        {/* Project Slider */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Project {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


