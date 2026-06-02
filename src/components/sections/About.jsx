import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'

export default function About() {
  const skills = [
    'SEO Optimization',
    'Content Strategy',
    'Social Media Marketing',
    'Website Layout Design',
    'HTML, CSS & JavaScript',
    'Responsive Frontend',
    'AI Data Operations',
    'Brand Presentation'
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who I am and what I do" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I help brands strengthen their online presence through SEO planning, content optimization, social media execution, and responsive website design. My work combines marketing thinking with practical front-end skills, so campaigns and websites feel aligned from message to layout.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My background also includes AI data operations, structured quality review, and content workflow support. That mix helps me build cleaner digital systems, organize information clearly, and turn brand ideas into recruiter-ready, client-ready web experiences.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am focused on practical digital work: better visibility, better content, cleaner layouts, and a stronger first impression for brands and projects.
            </p>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
