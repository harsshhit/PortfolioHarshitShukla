import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Star, Briefcase } from "lucide-react";
import { useRef } from "react";
import PropTypes from "prop-types";

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "House of Marktech",
    duration: "Sept 2024 - Dec 2024",
    description: [
      "Developed and maintained responsive web applications using React.js",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized application performance and improved user experience",
      "Participated in code reviews and team meetings",
    ],
    tags: [
      "React.js",
      "UI/UX",
      "Performance Optimization",
      "Team Collaboration",
    ],
  },
];

function ExperienceCard({ title, company, duration, description, tags }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Split duration into start and end dates
  const [startDate, endDate] = duration.split(" - ");

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-12 ml-8 relative pl-12 md:pl-24 "
      whileHover={{ scale: 1.02 }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Timeline Element */}
      <div className="absolute left-0 top-0 h-full w-8 md:w-16 flex items-center justify-center">
        <div className="h-full w-1 bg-gradient-to-t from-blue-500/30 to-blue-500 relative">
          {/* End Date Marker */}
          <motion.div
            className="absolute -left-16 md:-left-20 top-0 bg-blue-500/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-blue-400 text-xs md:text-sm whitespace-nowrap"
            whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
          >
            {endDate}
          </motion.div>
          <motion.div
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full -left-1.5 top-0"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Start Date Marker */}
          <motion.div
            className="absolute -left-16 md:-left-20 bottom-0 bg-blue-500/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-blue-400 text-xs md:text-sm whitespace-nowrap"
            whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
          >
            {startDate}
          </motion.div>
          <motion.div
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full -left-1.5 bottom-0"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-0 bottom-0 w-1 bg-blue-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        </div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-2 border-blue-500/30 rounded-2xl overflow-hidden relative shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
        whileHover={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
          borderColor: "rgba(59, 130, 246, 0.8)",
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="p-4 md:p-8 relative z-10">
          <motion.div
            className="flex flex-col space-y-4 md:space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <motion.div
                className="p-3 md:p-4 bg-blue-500/30 rounded-2xl self-start"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="text-blue-400 w-6 h-6 md:w-7 md:h-7" />
              </motion.div>

              <div className="flex-grow">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  {title}
                </motion.h3>
                <motion.p
                  className="text-blue-400 text-base md:text-lg"
                  whileHover={{ x: 10 }}
                >
                  {company}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-3 md:space-y-4 pl-2 md:pl-4"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {description.map((item, index) => (
                <motion.p
                  key={index}
                  className="text-gray-300 text-sm md:text-base flex items-center space-x-2"
                  whileHover={{ x: 10, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full inline-block" />
                  <span>{item}</span>
                </motion.p>
              ))}
            </motion.div>

            {tags?.length > 0 && (
              <motion.ul
                className="flex flex-wrap gap-2 md:gap-3 pl-2 md:pl-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {tags.map((tag, index) => (
                  <motion.li
                    key={index}
                    className="bg-blue-500/10 backdrop-blur-sm text-blue-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                      color: "#ffffff",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tag}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative bg-gray-900 text-white py-12 md:py-16 lg:py-44 px-4 md:px-8 lg:px-48 flex justify-center items-center overflow-hidden"
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

      <div className="container mx-auto flex flex-col items-center relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white flex items-center justify-center gap-2 md:gap-4">
            <Code className="text-white w-8 h-8 md:w-10 md:h-10" />
            Experience
            <Star className="text-yellow-400 animate-pulse w-8 h-8 md:w-10 md:h-10" />
          </h2>
          <p className="text-gray-300 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            My professional journey and contributions in the tech industry
          </p>
        </motion.div>

        {/* Experience Container */}
        <motion.div
          className="w-full max-w-6xl space-y-8 md:space-y-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {experienceData.map((experience) => (
            <motion.div
              key={experience.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                  },
                },
              }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
