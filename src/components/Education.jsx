import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Calicut University",
    year: "2018 - 2021",
    details: "Focused on software engineering, data structures, and web technologies.",
  },
  {
    degree: "Frontend Development Training",
    institution: "Softroniics Technologies",
    year: "2024 - 2025",
    details: "Specialized in React, JavaScript, and UI/UX design principles.",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-white"
      >
        My <span className="text-pink-500">Education</span>
      </motion.h1>

      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto px-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a1a] to-[#2a002a] hover:from-[#2a002a] hover:to-[#3a003a]
                       rounded-2xl p-6 md:p-8 shadow-md text-left transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-pink-400">{edu.degree}</h3>
            <p className="text-gray-300 text-sm md:text-base mt-1">{edu.institution}</p>
            <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
            <p className="text-gray-400 text-sm md:text-base">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
