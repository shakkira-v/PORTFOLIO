import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Github } from "lucide-react";
// import project1 from "../assets/bgpro13.png";
// // import project2 from "../assets/portMe.png"
// // import project3 from "../assets/shope.png"

const projects = [
  {
    title: "E-Commerce Website",
    image: "public/images/shope.png",
    description:
      "Full-stack ecommerce app with authentication, cart, payments and admin panel.",
    github: "https://github.com/shakkira-v/FakeAPI_Products",
  },
  {
    title: "Portfolio Website",
    image: "public/images/PortMe.png",
    description:
      "A modern animated portfolio made with React, Tailwind & Framer Motion.",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "AI MindTracking App",
    image: "public/images/MindMate.png",
    description:
      "Real-time weather updates using OpenWeather API with animated UI.",
    github: "https://github.com/yourname/weather",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full flex flex-col items-center bg-[#0d0d0d] text-gray-100 px-4 py-20 md:py-28"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        My <span className="text-pink-500">Projects</span>
      </h1>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            image={p.image}
            description={p.description}
            github={p.github}
            onOpen={() => setOpenProject(p)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {openProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-[#181818] p-6 md:p-8 rounded-2xl max-w-lg w-full shadow-xl relative">

            {/* Close */}
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-pink-400 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={openProject.image}
              alt={openProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              {openProject.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-4">{openProject.description}</p>

            {/* GitHub Button */}
            <a
              href={openProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-lg text-white hover:bg-pink-500 transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
