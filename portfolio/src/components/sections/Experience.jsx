import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle'
import ExperienceCard from '../cards/ExperienceCard'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Data Analyst',
      company: 'Tech Company',
      duration: 'Jan 2023 - Present',
      type: 'Full-time',
      responsibilities: [
        'Analyzed marketing campaigns and provided actionable insights',
        'Created dashboards and reports using Google Analytics and Excel',
        'Optimized ad spend resulting in 40% ROI improvement',
        'Collaborated with marketing team on data-driven strategies'
      ]
    },
    {
      id: 2,
      role: 'AI Data Trainer',
      company: 'AI Training Company',
      duration: 'Jun 2022 - Dec 2022',
      type: 'Contract',
      responsibilities: [
        'Trained AI models for natural language processing',
        'Quality assured and annotated training data',
        'Provided detailed feedback on AI model outputs',
        'Worked with diverse datasets and languages'
      ]
    },
    {
      id: 3,
      role: 'Front-End Development Intern',
      company: 'Digital Agency',
      duration: 'Mar 2022 - May 2022',
      type: 'Internship',
      responsibilities: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Collaborated with designers to implement UI/UX designs',
        'Fixed bugs and improved website performance',
        'Participated in code reviews and team meetings'
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
