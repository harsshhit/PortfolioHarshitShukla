import { memo } from "react";
import { motion } from "framer-motion";
import { Star, Code, Zap } from "lucide-react";
import profileImage from "../assets/profile.png";
import "../index.css";

// Separate StarryBackground component
const StarryBackground = memo(() => (
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
));

StarryBackground.displayName = 'StarryBackground';

// Memoized ProfileImage component
const ProfileImage = memo(() => (
  <motion.div
    className="flex-1 flex justify-center mb-10 md:mb-0"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-purple-500/50 rounded-full blur-xl animate-pulse" />
      <motion.div
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-1.5 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1,
        }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
          <img
            src={profileImage}
            alt="Harshit Shukla"
            className="w-full h-full rounded-full object-cover shadow-inner"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>
    </div>
  </motion.div>
));

ProfileImage.displayName = 'ProfileImage';

// Animation variants for consistent animations
const textAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <div
      id="hero"
      className="relative bg-gray-900 text-white py-20 md:py-32 lg:px-48 flex justify-center items-center overflow-hidden min-h-screen "
    >
      <StarryBackground />

      {/* Gradient Overlay - Softened the overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 mix-blend-overlay" />

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-6 gap-12">
        <ProfileImage />

        {/* Text Content with Dynamic Animations */}
        <motion.div
          className="flex-1 text-center md:text-left md:pl-16 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={textAnimationVariants}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Harshit Shukla
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 text-indigo-200 flex items-center justify-center md:justify-start gap-3"
            variants={textAnimationVariants}
            transition={{ delay: 0.3 }}
          >
            <Zap className="text-amber-300 animate-pulse" size={28} />
            Software Developer
            <Code className="text-teal-300" size={28} />
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
            variants={textAnimationVariants}
            transition={{ delay: 0.6 }}
          >
            Crafting immersive digital experiences that seamlessly integrate
            innovative technology with sophisticated design. Transforming
            visionary concepts into captivating web solutions that not only
            inspire but also engage users on multiple levels.
          </motion.p>

          {/* <motion.div
            className="flex flex-col md:flex-row items-center gap-6"
            variants={textAnimationVariants}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20
                hover:bg-indigo-500 flex items-center gap-3 w-full md:w-auto justify-center"
            >
              <Star className="group-hover:animate-spin" size={20} />
              Explore Projects
            </a>
            <a
              href="#socials"
              className="text-indigo-200 hover:text-white text-lg font-semibold underline decoration-indigo-500/50 
                transition-all duration-300 hover:decoration-indigo-400 w-full md:w-auto text-center"
            >
              Let&apos;s Connect
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default memo(Hero);


