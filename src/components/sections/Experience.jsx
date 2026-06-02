import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import ExperienceCard from '../cards/ExperienceCard'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Data Specialist',
      company: 'CloudFactory Nepal',
      duration: 'Data operations',
      type: 'Professional',
      responsibilities: [
        'Supported AI data operations with structured review and accuracy checks',
        'Handled quality control tasks with process consistency and documentation',
        'Reviewed data outputs for clarity, correctness, and workflow alignment',
        'Worked with digital task systems that required focus, speed, and precision'
      ]
    },
    {
      id: 2,
      role: 'Front-End Development Intern',
      company: 'PI Innovations',
      duration: 'Frontend internship',
      type: 'Internship',
      responsibilities: [
        'Worked on responsive front-end layouts using HTML, CSS, and JavaScript',
        'Supported interface polish and implementation for web pages',
        'Collaborated with design and development teams on brand-facing experiences',
        'Improved layout consistency across desktop and mobile screens'
      ]
    },
    {
      id: 3,
      role: 'YouTube Channel Management',
      company: 'Content Operations',
      duration: 'Content workflow',
      type: 'Project',
      responsibilities: [
        'Managed content presentation, upload workflows, and channel organization',
        'Optimized titles, descriptions, and content structure for discoverability',
        'Supported thumbnail direction and audience-facing improvements',
        'Kept publishing workflows organized for cleaner content operations'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Experience" subtitle="My professional journey" />

        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
