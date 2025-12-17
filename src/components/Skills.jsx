import React from "react";
import { motion } from "framer-motion";
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

export default function Skills() {
  return (
    <section className="text-center w-full">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-white"
      >
        My <span className="text-pink-500">Skills</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#121212]/70 hover:bg-[#1e1e1e] backdrop-blur-lg rounded-2xl shadow-md 
                       p-6 flex flex-col items-center justify-center transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-3 p-3 rounded-full bg-[#1a1a1a] shadow-lg">
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>

            {/* Animated Dots */}
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
    </section>
  );
}
