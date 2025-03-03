import React from "react";
import { motion } from "framer-motion";
import { Code, Zap } from "lucide-react";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-x-hidden px-6 md:px-0">
      {/* Right section with profile image */}
      <motion.div
        className="relative flex-1 flex items-center justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
       
        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
            {...floatingAnimation}
          />
          <motion.img
            src="/src/assets/profile.png"
            alt="Harshit - Software Developer"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            {...floatingAnimation}
          />
        </div>
      </motion.div>

      {/* Left content section */}
      <motion.div
        className="relative w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div {...fadeIn}>
          <h2 className="text-xl md:text-2xl text-blue-400 font-normal mb-2 flex items-center gap-3 justify-center md:justify-start">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-center md:text-left">
            Harshit
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4 md:mb-6 flex items-center gap-3 justify-center md:justify-start">
            Software Developer <Code className="text-blue-400" />
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Crafting immersive digital experiences that seamlessly integrate
          innovative technology with sophisticated design. Transforming
          visionary concepts into captivating web solutions that not only
          inspire but also engage users on multiple levels.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25 text-sm md:text-base"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 md:px-8 py-2.5 md:py-3 border border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-colors duration-300 text-sm md:text-base"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="text-gray-400 mt-6 md:mt-8 text-center md:text-left text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          harshitshuklaharsh8@gmail.com
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
