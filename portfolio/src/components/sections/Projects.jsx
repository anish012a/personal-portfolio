import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website Redesign',
      description: 'Redesigned and developed a modern e-commerce platform with improved UX and conversion optimization.',
      category: 'websites',
      tools: ['React', 'Tailwind CSS', 'Node.js'],
      image: 'https://via.placeholder.com/400x300?text=E-Commerce+Website',
      link: '#'
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign',
      description: 'Executed multi-channel marketing campaign including SEO, paid ads, and social media content.',
      category: 'marketing',
      tools: ['Google Ads', 'Analytics', 'Canva'],
      image: 'https://via.placeholder.com/400x300?text=Marketing+Campaign',
      link: '#'
    },
    {
      id: 3,
      title: 'Data Dashboard Analytics',
      description: 'Built interactive data visualization dashboard tracking key marketing metrics and KPIs.',
      category: 'data',
      tools: ['Excel', 'Google Analytics', 'Data Visualization'],
      image: 'https://via.placeholder.com/400x300?text=Data+Dashboard',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Content Series',
      description: 'Created engaging social media content including graphics, videos, and captions for multiple platforms.',
      category: 'marketing',
      tools: ['Photoshop', 'Premier Pro', 'After Effects'],
      image: 'https://via.placeholder.com/400x300?text=Social+Content',
      link: '#'
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'Developed a modern, responsive portfolio website showcasing work and professional experience.',
      category: 'websites',
      tools: ['React', 'Framer Motion', 'Tailwind'],
      image: 'https://via.placeholder.com/400x300?text=Portfolio',
      link: '#'
    },
    {
      id: 6,
      title: 'YouTube Channel Management',
      description: 'Managed YouTube channel including video editing, SEO optimization, and audience growth strategies.',
      category: 'content',
      tools: ['Adobe Premiere', 'TubeBuddy', 'Analytics'],
      image: 'https://via.placeholder.com/400x300?text=YouTube+Channel',
      link: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'data', label: 'Data' },
    { id: 'content', label: 'Content' }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Work I'm proud of" />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
