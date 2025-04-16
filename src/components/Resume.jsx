import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import resumelogo from "../assets/resumeimage.png";
import "../index.css";
import { resumeCVData } from "../data/data";

function Resume() {
  const resumeLink = resumeCVData.resumeLink;
  const handleViewResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <div
      id="resume"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left md:pr-16"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
            My Resume
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Welcome! I&apos;m a passionate full-stack Developer skilled in the
            MERN stack, and I enjoy crafting smooth, user-friendly experiences
            on the web. Check out my resume below to see my journey and skills
            in detail.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.button
              onClick={handleViewResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-lg bg-neutral-900 text-white font-medium 
                border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <FileText className="group-hover:animate-pulse" />
              View Resume
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <div className="relative w-48 h-48 md:w-48 md:h-48 rounded-lg p-2">
              <div className="bg-neutral-900 rounded-lg p-2 h-full backdrop-blur-sm border border-neutral-800 overflow-hidden group-hover:border-neutral-700 transition duration-300">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={resumelogo}
                  alt="Resume Logo"
                  className="w-full h-full rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-neutral-400 text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-neutral-800">
              AI generated image
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
