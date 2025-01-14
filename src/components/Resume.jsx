import { useState, useEffect } from "react";
import { Download, FileText } from "lucide-react";
import resume from '../assets/Harshit_Shukla_CV_E1.pdf';
import resumelogo from "../assets/resumelogo.png";
import "../index.css";

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-2 h-10 w-10 text-xl font-bold transform hover:scale-110 transition-all duration-200 shadow-lg"
      >
        ✕
      </button>
      <div className="w-full max-w-3xl bg-black/80 backdrop-blur-lg rounded-lg shadow-lg relative">
        {children}
      </div>
    </div>
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
      className="relative bg-black text-white py-16 md:py-44 lg:px-48 flex justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-80">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-6">
        <div className="flex-1 text-center md:text-left md:pr-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white">
            My Resume
          </h1>

          <p className="text-lg text-white leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Welcome! I'm a passionate full-stack Developer skilled in the MERN
            stack, and I enjoy crafting smooth, user-friendly experiences on the
            web. Check out my resume below to see my journey and skills in
            detail.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-full bg-blue-500 text-white font-bold 
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                hover:bg-blue-600 flex items-center gap-2"
            >
              <Download className="group-hover:animate-pulse" />
              Download Resume
            </a>

            <button
              onClick={toggleModal}
              className="text-white hover:text-gray-300 underline decoration-blue-500 
                transition-colors duration-300 flex items-center gap-2"
            >
              <FileText />
              {isModalOpen ? "Close Resume" : "View Resume"}
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-2 bg-purple-500/50 rounded-lg blur-xl" />
            <div className="relative w-56 h-56 md:w-auto md:h-auto rounded-lg p-1.5 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                <img
                  src={resumelogo}
                  alt="Resume Logo"
                  className="w-auto h-auto rounded-lg object-cover shadow-inner"
                />
              </div>
            </div>
            <p className="absolute bottom-4 right-4 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-md">
              AI generated image
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <span className="text-white text-xl">Loading Resume...</span>
            </div>
          )}
          <iframe
            src={resume}
            title="Resume PDF"
            width="100%"
            height="600"
            className="border-2 border-gray-300 rounded-lg shadow-lg"
            onLoad={handleLoad}
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default Resume;
