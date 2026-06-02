import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionTitle from '../SectionTitle'

const responsibilities = [
  'UI Design',
  'Frontend Development',
  'Layout Design',
  'Brand Presentation',
  'Responsive Design'
]

const caseStudy = [
  {
    label: 'Goal',
    text: 'Create a polished fashion brand experience that presents products clearly and builds trust across desktop and mobile.'
  },
  {
    label: 'Approach',
    text: 'Balanced strong visuals with simple navigation, clean spacing, responsive sections, and brand-led product presentation.'
  },
  {
    label: 'Result',
    text: 'A modern e-commerce landing experience suitable for campaign traffic, social promotion, and brand discovery.'
  }
]

export default function FeaturedProject() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="featured-project" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Featured Project"
          subtitle="A recruiter-focused look at a brand website built for visual presentation and responsive shopping intent"
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-700 shadow-xl"
          >
            <img
              src="/images/b56cee19-2be4-4109-aaaa-26a5781f9364.png"
              alt="AR Clothing Zone brand artwork"
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wide text-sm mb-3">
              Fashion E-Commerce Website
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
              AR Clothing Zone
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Designed and developed a modern fashion brand website focused on product presentation, clean user experience, responsive design, and visual branding.
            </p>

            <div className="flex flex-wrap gap-2 my-7">
              {responsibilities.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://anish012a.github.io/ar-clothing-zone-site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Live Demo
                <ExternalLink size={18} className="ml-2" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Case Study
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577519197483"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/arclothingzone/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Instagram
              </a>
            </div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-4 mt-7 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                {caseStudy.map((item) => (
                  <div key={item.label}>
                    <strong className="block text-gray-900 dark:text-white mb-1">
                      {item.label}
                    </strong>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
