import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const hasProjectLink = project.link && project.link !== '#'
  const hasCodeLink = project.code && project.code !== '#'
  const hasActions = hasProjectLink || hasCodeLink

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white dark:bg-dark-700 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100 dark:bg-dark-600">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {hasActions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300"
          >
            {hasProjectLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                aria-label="View project"
              >
                <ExternalLink size={24} />
              </a>
            )}
            {hasCodeLink && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                aria-label="View source code"
              >
                <Github size={24} />
              </a>
            )}
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
