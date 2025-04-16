import {  useRef } from "react";
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

function Skills() {
  const containerRef = useRef(null);

  return (
    <div
      id="skills"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
      ref={containerRef} // Attach ref to the container
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 px-6">
        <h1 className="section-title flex items-center justify-center gap-4">
          <Code className="text-blue-400" />
          Skills & Expertise
          <Star className="text-blue-400" />
        </h1>

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
                <div
                  key={index}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="card p-5 transform-gpu">
                    <div className="text-4xl transform hover:rotate-12 transition-transform duration-300">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300 tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            icon={<Code className="text-blue-400" />}
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
            icon={<Server className="text-blue-400" />}
          />

          <SkillSection
            title="Core Strengths"
            skills={[
              "MERN Stack Development",
              "Object-Oriented Programming (OOP)",
              "Data Structures and Algorithms",
            ]}
            icon={<Star className="text-blue-400" />}
          />
        </div>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, icon }) {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#262626]">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
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
    </div>
  );
}

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node.isRequired,
};

export default Skills;
