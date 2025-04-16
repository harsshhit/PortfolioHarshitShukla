import { motion } from "framer-motion";
import { Code } from "lucide-react";
import profile from "../assets/profile.png";

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
    <div
      id="home"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-6 gap-12">
        {/* Right section with profile image */}
        <motion.div
          className="relative flex-1 flex items-center justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-3xl opacity-10"
              {...floatingAnimation}
            />
            <motion.img
              src={profile}
              alt="Harshit - Software Developer"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#262626] shadow-2xl shadow-black/20"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Crafting immersive digital experiences that seamlessly integrate
            innovative technology with sophisticated design. Transforming
            visionary concepts into captivating web solutions that not only
            inspire but also engage users on multiple levels.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-lg bg-neutral-900 text-white font-medium 
                border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                flex items-center gap-2 w-full md:w-auto justify-center"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-lg bg-neutral-900 text-white font-medium 
                border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                flex items-center gap-2 w-full md:w-auto justify-center"
            >
              View Projects
            </motion.a>
          </div>

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
    </div>
  );
};

export default Hero;
