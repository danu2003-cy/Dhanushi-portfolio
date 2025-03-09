import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutMe } from "../data";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm {aboutMe.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              {aboutMe.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              {aboutMe.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href={aboutMe.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={aboutMe.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${aboutMe.contactInfo.email}`}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <img
                src="./src/components/Dhanushi.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: 5 }}
      >
        <Link to="/about" className="flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-400 mb-2">
            Scroll Down
          </span>
          <ChevronDown
            className="text-gray-600 dark:text-gray-400 animate-bounce"
            size={24}
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
