import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from 'react';

function Contact() {
  // Initialize with a state value
  const [formState, setFormState] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState('sending'); // Update form state

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormState('success'); // Update form state
        },
        (error) => {
          console.log(error.text);
          setFormState('error'); // Update form state
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-black text-white py-16 md:py-32 flex justify-center items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-center"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="card p-10"
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
                    className="input w-full"
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
                  className="input w-full h-40"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formState === 'sending'}
                className={`group relative px-8 py-3 rounded-lg bg-neutral-900 text-white font-medium
                  border border-neutral-800 hover:border-neutral-700 transition-all duration-300
                  flex items-center gap-2 w-full md:w-auto justify-center
                  ${formState === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formState === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formState === 'success' && (
                <div className="mt-4 p-3 bg-green-900/30 text-green-400 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {formState === 'error' && (
                <div className="mt-4 p-3 bg-red-900/30 text-red-400 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>

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
                className="card flex items-center space-x-6"
              >
                {contact.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition duration-300"
                  >
                    {contact.label}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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



