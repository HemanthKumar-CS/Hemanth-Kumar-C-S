"use client"

import { motion } from "framer-motion"
import { FaTrophy } from "react-icons/fa"
import { FiAward, FiStar, FiTarget } from "react-icons/fi"

const achievements = [
  {
    id: 1,
    title: "Winner - Invaders Hackathon",
    organization: "MIT Mysuru",
    year: "2023",
    type: "Competition",
    icon: FaTrophy,
    color: "from-yellow-400 to-orange-500",
    description: "First place in hackathon competition",
    details: "Won for innovative AI/ML solution implementation",
  },
  {
    id: 2,
    title: "Runner-Up - Code Battle 2K25",
    organization: "KLSVDIT Haliyal",
    year: "2025",
    type: "Competition",
    icon: FiAward,
    color: "from-gray-400 to-gray-600",
    description: "Second place in programming contest",
    details: "Secured runner-up position in competitive programming",
  },
  {
    id: 3,
    title: "Finalist - RVCExIITB CTF 24",
    organization: "RV College of Engineering",
    year: "2024",
    type: "Cybersecurity",
    icon: FiStar,
    color: "from-green-400 to-teal-500",
    description: "Finalist in cybersecurity CTF",
    details: "Reached finals in cybersecurity competition",
  },
  {
    id: 4,
    title: "Active Hackathon Participant",
    organization: "Various Institutions",
    year: "2024-2025",
    type: "Participation",
    icon: FiTarget,
    color: "from-purple-400 to-pink-500",
    description: "Regular participant in hackathons",
    details: "Participated in Symbiot (VVCE), Hack Kshetra (VVCE), Fusion Techackathon (AIET)",
  },
]

const certifications = [
  "Machine Learning with TensorFlow - Infosys Springboard",
  "Cybersecurity Fundamentals - Infosys Springboard",
  "Introduction to SQL - Oracle",
  "Analytics and Data Visualization - Tableau",
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and accomplishments in competitions and professional development
          </p>
        </motion.div>

        {/* Trophy Shelf */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Competition Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${achievement.color} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-lg p-6 h-full">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                      >
                        <achievement.icon className="text-white" size={32} />
                      </motion.div>

                      <h4 className="text-white font-bold mb-2 text-sm">{achievement.title}</h4>
                      <p className="text-gray-400 text-xs mb-1">{achievement.organization}</p>
                      <p className="text-purple-400 text-xs mb-3">{achievement.year}</p>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-gray-300 text-xs">{achievement.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
