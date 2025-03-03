import { useRef } from "react";
import { FaFire, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { Code, Star, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 sm:pb-3 last:mb-0"
    >
      <section className="bg-gradient-to-b from-blue-900/30 to-black max-w-[64rem] border-2 border-blue-400/50 rounded-lg overflow-hidden sm:pr-8 relative sm:h-96  transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 sm:mt-6 gap-2">
            {tags?.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70 flex items-center"
              >
                <span className="mr-1">
                  {tag === "React" && <FaReact className="text-blue-400" />}
                  {tag === "Firebase" && <FaFire className="text-orange-500" />}
                  {tag === "Node.js" && <FaNodeJs className="text-green-500" />}
                </span>
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              <FaGithub className="text-xl" />
              Github
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              <ExternalLink className="text-xl" />
              Live
            </a>
          </div>
        </div>

        <img
          src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
          alt={`${title} preview`}
          className="w-full h-64 object-cover mt-6 rounded-lg shadow-xl sm:absolute sm:top-16 sm:-right-40 sm:w-[28.25rem] sm:rounded-t-lg sm:shadow-2xl transition 
            sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 
            sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 
            sm:group-even:right-auto sm:group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative  text-white py-16 md:py-44 lg:px-48 flex justify-center items-center overflow-hidden"
    >
     
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
