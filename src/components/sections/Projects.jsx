import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AR Clothing Zone',
      description: 'Fashion e-commerce website focused on product clarity, brand energy, and responsive shopping presentation.',
      category: 'website',
      tools: ['UI Design', 'Frontend', 'Responsive'],
      image: '/images/691949554_122183064116743567_82088808901871838_n.jpg',
      link: 'https://anish012a.github.io/ar-clothing-zone-site/'
    },
    {
      id: 2,
      title: 'Education Campaign Creative',
      description: 'Campaign visual designed with clear hierarchy, urgency, and call-to-action structure for lead generation.',
      category: 'marketing',
      tools: ['Campaign Design', 'Copy Layout', 'CTA Focus'],
      image: '/images/index.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'YouTube Channel Management',
      description: 'Content workflow support including video presentation, title optimization, thumbnail direction, and channel organization.',
      category: 'content',
      tools: ['Video SEO', 'Thumbnails', 'Content Ops'],
      image: '/images/ChatGPT Image May 17, 2026, 01_19_26 PM.png',
      link: '#'
    },
    {
      id: 4,
      title: 'Responsive Website Presentation',
      description: 'Website layout concept with improved hierarchy, image framing, section rhythm, and mobile-friendly composition.',
      category: 'website',
      tools: ['HTML', 'CSS', 'UX Layout'],
      image: '/images/e97fb72d-c8a3-47f3-b24c-cf94cf7dbda6.png',
      link: '#'
    },
    {
      id: 5,
      title: 'Festive Social Campaign',
      description: 'Seasonal brand creative designed for social engagement, message clarity, and polished visual presentation.',
      category: 'marketing',
      tools: ['Social Media', 'Branding', 'Design'],
      image: '/images/festive-campaign-art.png',
      link: '#'
    },
    {
      id: 6,
      title: 'AI Data & Analytics Workflow',
      description: 'Structured workflow support for data quality, reporting clarity, and AI-assisted digital operations.',
      category: 'operations',
      tools: ['AI Ops', 'Analytics', 'QA'],
      image: '/images/ChatGPT Image May 12, 2026, 10_41_55 AM.png',
      link: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Website Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'content', label: 'Content' },
    { id: 'operations', label: 'Operations' }
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
