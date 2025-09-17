import { Briefcase } from "lucide-react";
import { Code, Star } from "lucide-react";
import { experienceData } from "../data/data";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

function ExperienceCard({ title, company, duration, description, tags }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        
        <div className="p-8 md:p-12 relative z-10">
          <div className="flex items-center space-x-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30">
              <Briefcase className="text-blue-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-blue-400 text-lg md:text-xl font-medium">{company}</p>
              <p className="text-gray-400 text-sm md:text-base mt-1">{duration}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {description.map((item, index) => (
              <p
                key={index}
                className="text-gray-300 text-base md:text-lg flex items-start space-x-4"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block mt-3 flex-shrink-0" />
                <span>{item}</span>
              </p>
            ))}
          </div>

          {tags?.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-blue-500/10 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
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
      id="experience"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex items-center justify-center gap-2 md:gap-4">
        Experience
           </h2>
          <p className="text-gray-300 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            My professional journey and contributions in the tech industry
          </p>
        </div>

        {/* Timeline Bar */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500/20 transform -translate-y-1/2"></div>
            
            {/* Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-blue-500 transform -translate-y-1/2 transition-all duration-500 ease-out"
              style={{ width: `${(currentIndex / (experienceData.length - 1)) * 100}%` }}
            ></div>
            
            {/* Timeline Nodes */}
            {experienceData.map((experience, index) => {
              const isActive = index === currentIndex;
              const isCompleted = index <= currentIndex;
              
              return (
                <div key={experience.id} className="relative flex flex-col items-center">
                  {/* Timeline Node */}
                  <div 
                    className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer z-10 ${
                      isActive 
                        ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50' 
                        : isCompleted 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'bg-black border-blue-500/30 hover:border-blue-500/60'
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  {/* Date Label */}
                  <div className={`mt-2 text-xs font-medium text-center transition-colors duration-300 ${
                    isActive ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {experience.duration.split(" - ")[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Slider */}
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
              {experienceData.map((experience, index) => (
                <div key={experience.id} className="w-full flex-shrink-0">
                  <ExperienceCard {...experience} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
