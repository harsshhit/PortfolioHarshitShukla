import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email with the following data:", e.target);

    // Use the form element directly instead of FormData
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target, // e.target is the form element
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative bg-black text-white min-h-screen flex items-center justify-center py-16 px-4 lg:px-48"
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-20 blur-3xl" />

      {/* Starry Background Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: "twinkle 3s infinite alternate",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: <FaWhatsapp className="text-6xl text-green-400" />,
                title: "WhatsApp",
                link: "https://api.whatsapp.com/send?phone=6394887052",
                label: "+91 6394887052",
              },
              {
                icon: <FaEnvelope className="text-6xl text-blue-400" />,
                title: "Email",
                link: "mailto:harshitshuklaharsh8@gmail.com",
                label: "harshitshuklaharsh8@gmail.com",
              },
              {
                icon: <FaLinkedin className="text-6xl text-blue-600" />,
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/harshit-shukla-dev",
                label: "Harshit Shukla",
              },
              {
                icon: <FaGithub className="text-6xl text-gray-300" />,
                title: "GitHub",
                link: "https://github.com/harshitshukla",
                label: "harshitshukla",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl flex items-center space-x-6 hover:bg-white/20 transition-all duration-300"
              >
                {contact.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition duration-300"
                  >
                    {contact.label}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-xl"
          >
            <form className="space-y-6" onSubmit={sendEmail}>
              {[
                {
                  id: "name",
                  type: "text",
                  placeholder: "Your Name",
                  required: true,
                },
                { id: "email", type: "email", placeholder: "Your Email" },
                { id: "phone", type: "tel", placeholder: "Your Phone Number" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    {field.placeholder}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 h-40 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Harshit Shukla. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for Twinkle Animation */}
      <style>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
