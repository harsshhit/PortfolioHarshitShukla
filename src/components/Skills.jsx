import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { Code, Star, Server } from "lucide-react";
import PropTypes from "prop-types";
import { skillsData } from "../data/data";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Create skill categories for slider
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      skills: skillsData.programmingLanguages,
      icon: <Code className="text-blue-400 w-8 h-8" />
    },
    {
      id: 2,
      title: "Frontend Technologies",
      skills: skillsData.frontendTechnologies,
      icon: <Code className="text-blue-400 w-8 h-8" />
    },
    {
      id: 3,
      title: "Backend & Database",
      skills: skillsData.backendAndDatabase,
      icon: <Server className="text-blue-400 w-8 h-8" />
    },
    {
      id: 4,
      title: "Development Tools",
      skills: skillsData.developmentTools,
      icon: <Star className="text-blue-400 w-8 h-8" />
    },
    {
      id: 5,
      title: "Testing & Quality",
      skills: skillsData.testingAndQuality,
      icon: <Star className="text-blue-400 w-8 h-8" />
    },
    {
      id: 6,
      title: "Core Strengths",
      skills: skillsData.coreStrengths,
      icon: <Star className="text-blue-400 w-8 h-8" />
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? skillCategories.length - 1 : prevIndex - 1
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
      id="skills"
      className="relative  bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex items-center justify-center gap-2 md:gap-4">
            Skills & Expertise
           </h2>
          <p className="text-gray-300 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            My technical skills and expertise across different domains
          </p>
        </div>

        {/* Skills Slider */}
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
              {skillCategories.map((category, index) => (
                <div key={category.id} className="w-full flex-shrink-0">
                  <SkillSection {...category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, icon }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        
        <div className="p-8 md:p-12 relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30">
              {icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              {title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/10"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300 text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node.isRequired,
};

export default Skills;
