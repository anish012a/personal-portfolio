import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Social',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amol-shrestha-3942ab2b9' },
      { name: 'GitHub', href: 'https://github.com/anish012a' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577519197483' },
      { name: 'Instagram', href: 'https://www.instagram.com/arclothingzone/' }
    ]
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'Services', href: '#services' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Featured', href: '#featured-project' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 gradient-text">Amol Shrestha</h3>
            <p className="text-gray-400 text-sm">
              Digital Marketing Specialist, SEO & Content Strategist, Creative Website Designer.
            </p>
          </motion.div>

          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith('http')

                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4"
          >
            <p>
              &copy; {currentYear} Amol Shrestha. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart size={16} className="text-red-500" /> and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
