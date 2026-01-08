// import React from "react";
import prof1 from "../assets/prof14.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col md:flex-row justify-between items-center 
                 px-8 md:px-16 text-gray-200 overflow-hidden 
                 bg-gradient-to-br from-[#0b0610] via-[#120818] to-[#1a0b2e] "
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* ===== Floating Mixed Shapes ===== */}

      {/* Floating Circle */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-purple-500/40 blur-md"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Floating Square */}
      <motion.div
        className="absolute top-20 right-10 w-14 h-14 bg-violet-400/40 rotate-45 blur-md z-0"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Floating Triangle */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-0 h-0 
                   border-l-[30px] border-r-[30px] border-b-[50px] 
                   border-l-transparent border-r-transparent border-b-pink-500/60"
        animate={{ y: [0, 35, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/5 left-1/2 w-0 h-0 
                   border-l-[30px] border-r-[30px] border-b-[50px] 
                   border-l-transparent border-r-transparent border-b-violet-300/60"
        animate={{ y: [0, 35, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Soft Glow Background Blobs */}
      <motion.div
        className="absolute top-[-40px] left-[-30px] w-72 h-72 
             bg-purple-600/60 rounded-full blur-3xl z-0"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-80 h-80 
                   bg-cyan-500/50 rounded-full blur-3xl z-0"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating Glow Ring */}
      <motion.div
        className="absolute bottom-24 left-1/4 w-8 h-8 
             rounded-full
             shadow-[0_0_40px_rgba(160,85,247,0.25)] z-0 bg-cyan-500/50"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
     

      {/* Glow behind center */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 
                   bg-fuchsia-600/30 rounded-full blur-[100px] z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ================= Left Content ================= */}
      <div className="flex-1 text-center md:text-left space-y-6 z-10">
        {/* ==== NAME (No Typewriter Effect) ==== */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Hi, I’m{" "}
          <span className="text-pink-500 text-4xl md:text-5xl font-extrabold">
            Shakkira
          </span>
        </motion.h1>

        {/* ==== TYPEWRITER ANIMATION ONLY FOR TITLES ==== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-4 text-xl md:text-3xl font-semibold text-gray-300 h-10"
        >
          <Typewriter
            words={["Frontend Developer", "React Designer"]}
            loop={true}
            cursor={true}
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={1200}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-md text-gray-400 text-base md:text-lg mx-auto md:mx-0"
        >
          I love turning creative ideas into beautiful, responsive websites.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 15px rgba(236,72,153,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-6 bg-pink-500 text-white px-6 py-2.5 rounded-full font-medium"
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          View My Work
        </motion.button>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/shakkira-v-115b9136b/"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* ================= Right Profile ================= */}
      {/* ================= Right Profile ================= */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={prof1}
          className="w-[18rem] md:w-[24rem] lg:w-[30rem] 
               object-cover rounded-lg"
          alt="Profile"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
