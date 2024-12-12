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
import { motion } from "framer-motion";
import { Code, Star, Server } from "lucide-react";

function Skills() {
  return (
    <div
      id="skills"
      className="relative bg-gray-900 text-white py-16 md:py-44 lg:px-48 flex justify-center items-center overflow-hidden"
    >
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-black opacity-80">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-white/40 mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-black text-center mb-16 bg-clip-text text-white b flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Code className="text-purple-400" />
          Skills
          <Star className="text-yellow-400 animate-pulse" />
        </motion.h1>

        {/* Icons Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
        >
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
            { icon: <FaDatabase color="#4DB33D" />, name: "Database" },
            { icon: <SiMysql color="#00758F" />, name: "MySQL" },
            { icon: <DiDocker color="#2496ED" />, name: "Docker" },
          ].map((tech, index) => (
            <SkillIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </motion.div>

        {/* Skills Details Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <SkillSection
            title="Programming Languages"
            skills={["C++", "JavaScript", "TypeScript"]}
            icon={<Server className="text-white" />}
          />

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

          <SkillSection
            title="Development Tools"
            skills={[
              "Git & GitHub",
              "CI/CD pipelines",
              "Docker",
              "Agile/Scrum methodologies",
            ]}
            icon={<Star className="text-yellow-400" />}
          />

          <SkillSection
            title="Testing & Quality"
            skills={[
              "Unit Testing (Jest, Mocha)",
              "Integration Testing",
              "Quality Assurance",
            ]}
            icon={<Code className="text-red-400" />}
          />

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
    </div>
  );
}

function SkillIcon({ icon, name }) {
  return (
    <motion.div
      className="relative group"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-4 bg-gradient-to-br from-gray-900 via-black to-gray-600 rounded-full shadow-lg flex justify-center items-center text-4xl sm:text-5xl">
        {icon}
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </div>
    </motion.div>
  );
}

function SkillSection({ title, skills, icon }) {
  return (
    <motion.div
      className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glowing Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-purple-700/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="flex items-center mb-4 space-x-4">
        <div className="p-3 bg-gradient-to-br from-white/20 to-purple-700/20 rounded-full">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-gray-100 tracking-wide">
          {title}
        </h2>
      </div>

      <ul className="list-none space-y-2 text-gray-300 pl-4 border-l-2 border-white">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-white inline-block" />
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Skills;
