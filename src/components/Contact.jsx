import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send Email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

  
      emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-28 px-4 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 className="text-xs font-semibold text-pink-500 uppercase">
            Contact
          </h2>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let’s Connect
          </h1>

          <p className="text-gray-600 text-sm max-w-md">
            I’m actively looking for learning opportunities and entry-level
            roles. Feel free to connect with me.
          </p>

          <div className="pt-4 space-y-2 text-sm">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaPhoneAlt className="text-pink-500" />
              <span>Available on request</span>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaEnvelope className="text-pink-500" />
              <span>shakkira111@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Malappuram, Kerala</span>
            </div>
          </div>

          <div className="pt-4 flex gap-4 justify-center md:justify-start">
            <FaFacebookF className="text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="text-pink-500 cursor-pointer" />
            <FaInstagram className="text-pink-500 cursor-pointer" />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-white/80 backdrop-blur-md rounded-xl p-6 space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-900 placeholder-gray-500
     focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-900 placeholder-gray-500
     focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none`}
          />

          <textarea
            name="message"
            rows="3"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } bg-white text-gray-900 placeholder-gray-500
     focus:border-pink-500 focus:ring-1 focus:ring-pink-400 outline-none resize-none`}
          />

          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 
                       text-white text-sm font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Failed to send message.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
