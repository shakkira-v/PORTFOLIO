import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" />, level: 5 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, level: 5 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400 text-5xl" />, level: 4 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" />, level: 5 },
  { name: "React", icon: <SiReact className="text-blue-400 text-5xl" />, level: 5 },
];

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Calicut University",
    year: "2008 - 2011",
    details: "Focused on software engineering, data structures, and web technologies.",
  },
  {
    degree: "Frontend Development Training",
    institution: "Softroniics Technologies",
    year: "2024 - 2025",
    details: "Specialized in React, JavaScript, and UI/UX design principles.",
  },
];

export default function SkillPage() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-[#0a0a0a] via-[#0d001a] to-[#1a0033] text-white py-16 md:py-24 px-6 md:px-12"
    >
      {/* Sidebar */}
<div className="md:w-1/4 w-full flex md:flex-col flex-row justify-around md:justify-start md:items-start items-center mt-8 md:mt-16 space-y-4 md:space-y-6">
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-4 py-2 md:px-5 md:py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-300 ${
  activeTab === "skills"
    ? "bg-pink-600 text-white shadow-md"
    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
}`}

        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2 md:px-5 md:py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-300 ${
  activeTab === "education"
    ? "bg-pink-600 text-white shadow-md"
    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
}`}

        >
          Education
        </button>
      </div>

      {/* Content Area */}
      <div className="md:w-3/4 w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-10 text-center"
              >
                My <span className="text-pink-500">Skills</span>
              </motion.h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#121212]/70 hover:bg-[#1e1e1e] backdrop-blur-lg rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300"
                  >
                    <div className="mb-3 p-3 rounded-full bg-[#1a1a1a] shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>

                    <div className="flex gap-2">
                      {[...Array(5)].map((_, dotIndex) => (
                        <motion.span
                          key={dotIndex}
                          initial={{ scale: 0 }}
                          animate={{
                            scale: dotIndex < skill.level ? 1 : 0.7,
                            opacity: dotIndex < skill.level ? 1 : 0.3,
                          }}
                          transition={{
                            delay: index * 0.15 + dotIndex * 0.1,
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 1.5,
                          }}
                          className={`w-3 h-3 rounded-full ${
                            dotIndex < skill.level ? "bg-pink-500" : "bg-gray-600"
                          }`}
                        ></motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-10 text-center"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
