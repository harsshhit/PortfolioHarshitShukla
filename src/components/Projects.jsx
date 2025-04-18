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
      <section className="card bg-[#111111] max-w-[64rem] sm:pr-8 relative sm:h-[28rem] md:h-96 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-4 sm:px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>

          <p className="mt-2 leading-relaxed text-gray-300">{description}</p>

          <ul className="flex flex-wrap mt-4 sm:mt-6 gap-2">
            {tags?.map((tag, index) => (
              <li
                key={index}
                className="bg-[#1a1a1a] px-3 py-1 text-xs uppercase tracking-wider text-gray-300 rounded-full flex items-center border border-[#262626]"
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

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="button flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center py-2 sm:py-3 px-4 sm:px-6"
            >
              <FaGithub className="text-lg sm:text-xl" />
              Github
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center py-2 sm:py-3 px-4 sm:px-6"
            >
              <ExternalLink className="text-lg sm:text-xl" />
              Live
            </a>
          </div>
        </div>

        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img
            src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
            alt={`${title} preview`}
            className="w-full h-56 sm:h-64 object-cover mt-4 sm:mt-6 rounded-lg shadow-xl sm:absolute sm:top-16 sm:-right-40 sm:w-[28.25rem] sm:rounded-t-lg sm:shadow-2xl transition
              sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2
              sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2
              sm:group-even:right-auto sm:group-even:-left-40 border border-[#262626]"
          />
        </a>
      </section>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative min-h-screen bg-black text-white py-12 sm:py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10 px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title flex items-center justify-center gap-4">
            <Code className="text-blue-400" />
            My Projects
            <Star className="text-blue-400" />
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


