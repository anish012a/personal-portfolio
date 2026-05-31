import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Building2 } from 'lucide-react'

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {experience.role}
          </h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Building2 size={16} />
              {experience.company}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {experience.duration}
            </div>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
              {experience.type}
            </span>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mt-4">
        {experience.responsibilities.map((responsibility, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="flex gap-3 text-gray-700 dark:text-gray-300"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
            <span>{responsibility}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
