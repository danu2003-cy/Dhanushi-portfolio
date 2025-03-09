import React from "react";
import { motion } from "framer-motion";
import { aboutMe } from "../data";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {aboutMe.bio}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a full stack developer passionate about creating elegant
              solutions to complex problems and continuously learning new
              technologies to stay at the forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {aboutMe.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-4 py-2"
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Interests
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {aboutMe.interests.map((interest, index) => (
                <li key={index} className="leading-relaxed">
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {aboutMe.certifications.map((certification, index) => (
                <li key={index} className="leading-relaxed">
                  {certification}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12"
        >
           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {aboutMe.languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {lang.language}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {lang.proficiency}
                </p>
              </div> 
            ))}
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
};

export default About;
