import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-28 md:py-36 px-4 md:px-6 relative z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-12">

        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-center md:text-left space-y-4"
        >
          <h2 className="text-xs font-semibold text-pink-500 tracking-wider uppercase">
            Contact
          </h2>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let’s Work Together
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Have a project in mind or just want to say hello?  
            Reach out anytime — I’d love to hear from you.
          </p>

          {/* Contact Info */}
          <div className="pt-4 space-y-2 text-sm">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <FaPhoneAlt className="text-pink-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              <span>hello@example.com</span>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Kochi, Kerala, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-4 flex justify-center md:justify-start gap-4">
            <a
              href="#"
              target="_blank"
              className="p-2 rounded-full border border-pink-500 text-pink-500 
                         hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              target="_blank"
              className="p-2 rounded-full border border-pink-500 text-pink-500 
                         hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="#"
              target="_blank"
              className="p-2 rounded-full border border-pink-500 text-pink-500 
                         hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full bg-white/80 backdrop-blur-md 
                     border border-white/40 shadow-md rounded-xl 
                     p-5 md:p-6 space-y-3"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 
                       text-sm placeholder-gray-500 
                       focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 
                       text-sm placeholder-gray-500
                       focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none"
          />

          <textarea
            placeholder="Write your message here..."
            rows="3"
            className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 
                       text-sm placeholder-gray-500 
                       focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2 rounded-md bg-gradient-to-r 
                       from-pink-500 to-purple-600 
                       text-white text-sm font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}
