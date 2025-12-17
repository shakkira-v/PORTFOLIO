import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
    
  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-300 py-10 px-6 md:px-16 mt-20 relative">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                      w-[80%] h-32 bg-purple-800/20 blur-3xl opacity-40 rounded-full">
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

        {/* Left */}
        <div className="text-center md:text-left space-y-1">
          <h1 className="text-xl font-semibold text-white">Shakkira</h1>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <a href="#" className="hover:text-pink-500 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Right */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Shakkira • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
