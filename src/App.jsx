import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillPage from "./components/SkillPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20 scroll-smooth bg-black text-gray-200">

        {/* Home */}
        <motion.section
          id="home"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SkillPage />
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contacts"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>

      </div>

      <Footer />
    </>
  );
}

export default App;
