import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Bot, Code2, Megaphone, Search } from 'lucide-react'
import SectionTitle from '../SectionTitle'

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Campaign planning, brand messaging, social content direction, and growth-focused digital execution.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Search-friendly content structure, on-page improvements, keyword mapping, and performance review.'
  },
  {
    icon: Code2,
    title: 'Website Design',
    description: 'Modern responsive websites with refined spacing, strong visual hierarchy, and clear user journeys.'
  },
  {
    icon: BarChart3,
    title: 'Content Strategy',
    description: 'Content calendars, audience-focused messaging, social captions, campaign concepts, and brand stories.'
  },
  {
    icon: Bot,
    title: 'AI Data Operations',
    description: 'Structured data review, quality checks, annotation support, and AI-assisted workflow improvement.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Services"
          subtitle="Focused support for brands that need stronger visibility, better content, and cleaner web presentation"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-gray-700 p-5 min-h-[240px] hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
