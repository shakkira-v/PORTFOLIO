import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/prof1.jpeg"; // replace with your image

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen 
                 bg-[#0a0a0a] text-gray-200 pt-[80px] px-6 md:px-16 overflow-hidden"
    >
      {/* Left Image Section */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0 relative"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={aboutImg}
          alt="About"
          className="w-full max-w-[380px] h-auto object-contain rounded-3xl 
             shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-105 
             transition-transform duration-800 brightness-70 contrast-110"
        />
        {/* Soft Glow Animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-pink-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated "ABOUT ME" heading */}
        <motion.h2
          className="text-pink-500 text-sm font-semibold tracking-[0.25em] mb-3 uppercase 
                     overflow-hidden whitespace-nowrap inline-block"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          {"ABOUT ME".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Typing-style Main Heading */}
        {/* Typing-style Main Heading (split into two lines) */}
<motion.h1
  className="relative text-3xl md:text-4xl font-bold text-white mb-6 leading-tight 
             inline-block border-b-2 border-pink-500 pb-2 overflow-hidden whitespace-nowrap"
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  transition={{ duration: 3, ease: "easeInOut" }}
>
  I’m Shakkira — <br className="hidden md:block" />
  Passionate Developer & Creative Thinker..
  <span className="ml-1 inline-block w-1 h-6 bg-pink-500 animate-blink"></span>
</motion.h1>


        {/* Paragraph */}
        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          I began my career as a school teacher and discovered my love for technology —
          leading me into the IT field. I’m passionate about crafting interactive,
          meaningful web experiences using modern technologies like React and Tailwind CSS.
          I enjoy learning new tools, exploring design trends, and turning creative ideas
          into functional, elegant interfaces. Every project I build helps me grow as a
          developer and creative problem-solver.
        </motion.p>
      </motion.div>
    </section>
  );
}
