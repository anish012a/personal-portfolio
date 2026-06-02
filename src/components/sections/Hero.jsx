import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-[720px] flex items-center pt-24 pb-20 px-4 relative overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/b56cee19-2be4-4109-aaaa-26a5781f9364.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/45"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl"
        >
          Digital Marketing Specialist & Creative Web Professional
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/85 mb-8 max-w-2xl"
        >
          Amol Shrestha helps brands grow through SEO, content strategy, social media marketing, website design, and AI-powered digital operations.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed"
        >
          I combine marketing thinking with practical front-end skills so campaigns, content, and websites feel aligned from message to layout.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <a
            href="Amol-Shrestha-CV.html"
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            Contact
          </a>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 group"
          >
            View Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3"
        >
          <a
            href="https://www.linkedin.com/in/amol-shrestha-3942ab2b9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-white/25 text-white/85 font-semibold hover:bg-white hover:text-gray-950 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anish012a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-white/25 text-white/85 font-semibold hover:bg-white hover:text-gray-950 transition-all"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600">
          <p className="text-sm text-white/55">Scroll to explore</p>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
