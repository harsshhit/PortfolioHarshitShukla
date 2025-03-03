import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { motion, useAnimation } from "framer-motion";
import { Code, Star, Server } from "lucide-react";

function Skills() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && top > -window.innerHeight;
        if (isVisible) {
          controls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      id="skills"
      ref={containerRef}
      className="relative min-h-screen text-white py-16 md:py-32 lg:px-48 flex justify-center items-center "
    >
     

      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Code className="text-purple-400" />
          Skills & Expertise
          <Star className="text-yellow-400 animate-pulse" />
        </motion.h1>

        {/* Skills Orbit */}
<div className="mb-24 py-12">
  <div className="max-w-5xl mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
        { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
        { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
        { icon: <FaReact color="#61DAFB" />, name: "React" },
        { icon: <SiRedux color="#764ABC" />, name: "Redux" },
        { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
        { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
        { icon: <SiExpress color="#FFFFFF" />, name: "Express" },
        { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
        { icon: <FaGithub color="#181717" />, name: "GitHub" },
        { icon: <SiMysql color="#00758F" />, name: "MySQL" },
        { icon: <DiDocker color="#2496ED" />, name: "Docker" },
      ].map((tech, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600">
            <div className="text-4xl transform hover:rotate-12 transition-transform duration-300">
              {tech.icon}
            </div>
          </div>
          <span className="text-sm font-medium text-gray-300 tracking-wide">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</div>

        {/* Skills Details Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {/* <SkillSection
            title="Programming Languages"
            skills={["C++", "JavaScript", "TypeScript"]}
            icon={<Server className="text-white" />}
          /> */}

          <SkillSection
            title="Frontend Technologies"
            skills={[
              "React.js",
              "Next.js",
              "Redux",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
              "SASS",
            ]}
            icon={<Code className="text-green-400" />}
          />

          <SkillSection
            title="Backend & Database"
            skills={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "GraphQL",
              "RESTful APIs",
              "WebSocket",
              "Database Modeling",
            ]}
            icon={<Server className="text-purple-400" />}
          />

          {/* <SkillSection
            title="Development Tools"
            skills={[
              "Git & GitHub",
              "CI/CD pipelines",
              "Docker",
              "Agile/Scrum methodologies",
            ]}
            icon={<Star className="text-yellow-400" />}
          /> */}

          {/* <SkillSection
            title="Testing & Quality"
            skills={[
              "Unit Testing (Jest, Mocha)",
              "Integration Testing",
              "Quality Assurance",
            ]}
            icon={<Code className="text-red-400" />}
          /> */}

          <SkillSection
            title="Core Strengths"
            skills={[
              "MERN Stack Development",
              "Object-Oriented Programming (OOP)",
              "Data Structures and Algorithms",
            ]}
            icon={<Star className="text-indigo-400" />}
          />
        </motion.div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style> */}
    </div>
  );
}

function SkillIcon({ icon, name }) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 flex justify-center items-center text-3xl sm:text-4xl border border-gray-800 backdrop-blur-sm">
        {icon}
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  );
}

function SkillSection({ title, skills, icon }) {
  return (
    <motion.div
      className="group bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
          {icon}
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Skills;
