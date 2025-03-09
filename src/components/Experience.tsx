import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences, aboutMe } from '../data';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles I've taken on throughout my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:-mr-4' : 'left-0 md:-ml-4'
              } w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md`}>
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              } bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.role}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Volunteering</h3>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {aboutMe.volunteering.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;