import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import SectionTitle from '../SectionTitle'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shresthaanish012@gmail.com',
    href: 'mailto:shresthaanish012@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '9807066877',
    href: 'tel:+9779807066877'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amol-shrestha-3942ab2b9',
    href: 'https://www.linkedin.com/in/amol-shrestha-3942ab2b9'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/anish012a',
    href: 'https://github.com/anish012a'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Digital Marketing',
    message: ''
  })
  const [formMessage, setFormMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormMessage(`Thanks, ${formData.name}. Your note is ready for follow-up. Please use the direct email or social links while this static form is connected.`)
    setFormData({ name: '', email: '', service: 'Digital Marketing', message: '' })
    setTimeout(() => setFormMessage(''), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Open to recruiter conversations, agency collaborations, and brand website projects"
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Connect Directly
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all group"
                  >
                    <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-700 rounded-lg p-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Type
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option>Digital Marketing</option>
                <option>SEO Optimization</option>
                <option>Website Design</option>
                <option>Content Strategy</option>
                <option>AI Data Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me what you want to build, improve, or promote."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              Send Message
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            {formMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 dark:text-green-400 text-center font-medium"
              >
                {formMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
