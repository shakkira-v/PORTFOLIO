import React from "react";
import { Github } from "lucide-react";

const ProjectCard = ({ title, image, description, onOpen, github }) => {
  return (
    <div
      onClick={onOpen}
      className="relative w-80 h-60 rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Card Background */}
      <div className="absolute inset-0 rounded-xl bg-[#1a1a1a]">
        
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-125 group-hover:brightness-150 
             group-hover:scale-110 transition-all duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

        {/* Text */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>

        {/* GitHub Button (hover only) */}
        <a
          href={github}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 bg-pink-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
        >
          <Github className="text-white w-5 h-5" />
        </a>
      </div>

      {/* Snake Border Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          className="snake-border"
          fill="none"
          stroke="#ff4d8d"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProjectCard;
