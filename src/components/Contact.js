import React from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-black via-gray-800 to-gray-900
    text-white py-16 px-8"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 animate-pulse">
          Contact
        </h1>
        <div class="loader-gray-black"></div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* Email Box */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-5xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email:</h2>
            <a
              href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZWxkljTkCPkMrNwzbzqzLwDWTfTMCNPVhcHpNwMrFCTkbHZXWqgcNLMpKlsCzxnXlLcCg"
              className="text-blue-500 hover:underline"
            >
              harshitshuklaharsh8@gmail.com
            </a>
          </div>

          {/* LinkedIn Box */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <FaLinkedin className="text-5xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">LinkedIn:</h2>
            <a
              href="https://www.linkedin.com/in/harsshht/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Harshit Shukla
            </a>
          </div>

          {/* WhatsApp Box */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <FaWhatsapp className="text-5xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">WhatsApp:</h2>
            <a
              href="https://api.whatsapp.com/send?phone=6394887052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              +91 6394887052
            </a>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-gray-500 text-sm">
            © 2023 Harshit Shukla. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
