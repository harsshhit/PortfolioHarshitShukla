import { useState, useEffect } from "react";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/Harshit_Shukla_CV_E1.pdf";
import resumelogo from "../assets/resumelogo.png";
import "../index.css";

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-5 right-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-2 h-10 w-10 text-xl font-bold shadow-lg hover:shadow-purple-500/20"
      >
        ✕
      </motion.button>
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-3xl bg-black/90 backdrop-blur-lg rounded-lg shadow-2xl border border-white/10 relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const resumeLink =
    "https://drive.google.com/file/d/10nmhUINRuQPmKzaM_qBXYr49oDKi7QaU/view?usp=sharing";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      id="resume"
      className="relative min-h-screen text-white py-16 md:py-32 flex justify-center items-center overflow-hidden "
    >
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" /> */}
    
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left md:pr-16"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Resume
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Welcome! I'm a passionate full-stack Developer skilled in the MERN
            stack, and I enjoy crafting smooth, user-friendly experiences on the
            web. Check out my resume below to see my journey and skills in
            detail.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold 
                shadow-lg hover:shadow-purple-500/20 flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <Download className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.button
              onClick={toggleModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-purple-400 underline decoration-blue-500 
                transition-colors duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <FileText className="animate-pulse" />
              {isModalOpen ? "Close Resume" : "View Resume"}
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
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg p-2">
              <div className="bg-black rounded-lg p-2 h-full backdrop-blur-sm border border-white/10 overflow-hidden group-hover:border-purple-500/50 transition duration-300">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src={resumelogo}
                  alt="Resume Logo"
                  className="w-full h-full rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
              AI generated image
            </div>
          </div>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="relative p-1">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
              </div>
            </motion.div>
          )}
          <iframe
            src={resume}
            title="Resume PDF"
            width="100%"
            height="600"
            className="rounded-lg shadow-2xl border-2 border-purple-500/20"
            onLoad={handleLoad}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Resume;
