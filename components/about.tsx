"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiBook, FiCode, FiShield, FiTrendingUp } from "react-icons/fi"

const timelineData = [
  {
    year: "2022",
    title: "Started AI & ML Engineering (as Student)",
    description: "Began Bachelor of Engineering at ATME College of Engineering",
    icon: FiBook,
  },
  {
    year: "2023",
    title: "Cybersecurity Intern",
    description: "Completed cybersecurity training program at Academor (Remote)",
    icon: FiShield,
  },
  {
    year: "2023",
    title: "Hackathon Success",
    description: 'Winner at "Invaders" Hackathon, MIT Mysuru',
    icon: FiCode,
  },
  {
    year: "2024",
    title: "Media Head at IET",
    description: "Led content strategy and social media management for technical society",
    icon: FiTrendingUp,
  },
]

const interests = [
  { title: "Machine Learning", description: "Developing intelligent algorithms", color: "from-blue-500 to-cyan-500" },
  {
    title: "Computer Vision",
    description: "Building visual recognition systems",
    color: "from-purple-500 to-pink-500",
  },
  { title: "Cybersecurity", description: "Network security and ethical hacking", color: "from-green-500 to-teal-500" },
  { title: "Web Development", description: "Creating responsive web applications", color: "from-orange-500 to-red-500" },
]

const stats = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Hackathons Participated", value: 7, suffix: "+" },
  { label: "Technical Skills", value: 15, suffix: "+" },
  { label: "CGPA", value: 8.28, suffix: "/10" },
]

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Final-year AI & ML Engineering student with a passion for building intelligent solutions. Active in hackathons since 2023 with proven track record in competitive programming and real-world projects.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
              >
                {stat.value}
                {stat.suffix}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">{item.year}</div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Flip Cards */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-8">Interests & Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="relative h-32 cursor-pointer"
                  onHoverStart={() => setFlippedCard(index)}
                  onHoverEnd={() => setFlippedCard(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${interest.color} p-4 flex items-center justify-center backface-hidden`}
                    >
                      <h4 className="text-white font-semibold text-center">{interest.title}</h4>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 rounded-xl bg-gray-800/80 backdrop-blur-sm p-4 flex items-center justify-center border border-purple-500/20"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <p className="text-gray-300 text-sm text-center">{interest.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
