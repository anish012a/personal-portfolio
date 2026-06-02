import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Marketing',
      skills: [
        { name: 'SEO Optimization', level: 92 },
        { name: 'Social Media Marketing', level: 88 },
        { name: 'Campaign Planning', level: 86 }
      ]
    },
    {
      category: 'Design',
      skills: [
        { name: 'Website Layout Design', level: 90 },
        { name: 'Brand Presentation', level: 84 },
        { name: 'Visual Content Design', level: 82 }
      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML & CSS', level: 89 },
        { name: 'JavaScript', level: 84 },
        { name: 'Responsive Frontend', level: 80 }
      ]
    },
    {
      category: 'Analytics',
      skills: [
        { name: 'Data Review', level: 87 },
        { name: 'Google Analytics', level: 85 },
        { name: 'AI Data Operations', level: 88 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technologies and expertise" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </p>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
