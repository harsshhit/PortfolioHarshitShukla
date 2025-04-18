import { motion, useReducedMotion } from "framer-motion";
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

const Hero = () => {
  // State for image loading
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  // Handle image loading
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Animations with respect to user preferences
  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0.2 : 0.6 },
  };

  const floatingAnimation = prefersReducedMotion
    ? {}
    : {
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
    <div
      id="home"
      className="relative min-h-screen bg-black text-white py-12 sm:py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-4 sm:px-6 gap-8 sm:gap-12">
        {/* Right section with profile image */}
        <motion.div
          className="relative flex-1 flex items-center justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 0.95 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
        >
          <div className="relative w-[220px] h-[220px] xs:w-[280px] xs:h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-3xl opacity-10"
              {...floatingAnimation}
            />
            <div className="relative z-10 w-full h-full rounded-full border-4 border-[#262626] shadow-2xl shadow-black/20 overflow-hidden">
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
              )}
              <motion.img
                src={profile}
                alt="Harshit - Software Developer"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={handleImageLoad}
                loading="eager"
                fetchpriority="high"
                {...floatingAnimation}
              />
            </div>
          </div>
        </motion.div>

        {/* Left content section */}
        <motion.div
          className="relative w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: prefersReducedMotion ? -10 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
        >
          <motion.div {...fadeIn}>
            <h2 className="text-xl md:text-2xl text-blue-400 font-normal mb-2 flex items-center gap-3 justify-center md:justify-start">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">
              Harshit
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4 md:mb-6 flex items-center gap-3 justify-center md:justify-start">
              Software Developer <Code className="text-blue-400" />
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0, y: prefersReducedMotion ? 5 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0.1 : 0.3, duration: prefersReducedMotion ? 0.2 : 0.6 }}
          >
            Crafting immersive digital experiences that seamlessly integrate
            innovative technology with sophisticated design. Transforming
            visionary concepts into captivating web solutions that not only
            inspire but also engage users on multiple levels.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-neutral-900 text-white font-medium
                border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
              aria-label="Contact Me"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-neutral-900 text-white font-medium
                border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
              aria-label="View Projects"
            >
              View Projects
            </motion.a>
          </div>

          <motion.div
            className="text-gray-400 mt-6 md:mt-8 text-center md:text-left text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0.3 : 0.9, duration: prefersReducedMotion ? 0.3 : 0.6 }}
          >
            <a
              href="mailto:harshitshuklaharsh8@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Email me at harshitshuklaharsh8@gmail.com"
            >
              harshitshuklaharsh8@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
