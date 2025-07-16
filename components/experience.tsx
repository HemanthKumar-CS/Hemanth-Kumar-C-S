"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiUsers, FiShield, FiTrendingUp } from "react-icons/fi"

const experiences = [
  {
    id: 1,
    role: "Media Head",
    company: "IET onCampus ATMECE",
    period: "2024 - Present",
    type: "Leadership",
    icon: FiUsers,
    highlights: [
      "Led content strategy and social media management for 60+ member technical society",
      "Organized 7+ technical events and workshops, increasing student engagement by 60%",
      "Member of Organisation commitment for hackathon TechAvishkar 2.0 (ATMECE | 2025)",
      "Managed event promotion and coordination, achieving 90% attendance rate",
    ],
    technologies: ["Event Management", "Social Media", "Content Strategy", "Team Leadership"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role: "Cybersecurity Intern",
    company: "Academor",
    period: "2023",
    type: "Remote",
    icon: FiShield,
    highlights: [
      "Completed comprehensive cybersecurity training covering network security and ethical hacking",
      "Gained hands-on experience with penetration testing tools and vulnerability assessment",
      "Earned certification in cybersecurity fundamentals and best practices",
      "Worked with industry-standard security tools and frameworks",
    ],
    technologies: ["Kali Linux", "Wireshark", "Nmap", "Aircrack-ng", "Penetration Testing"],
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    role: "Hackathon Organizer",
    company: "TechAvishkar 2.0",
    period: "2025",
    type: "Event",
    icon: FiTrendingUp,
    highlights: [
      "Co-organized major hackathon event at ATMECE",
      "Managed participant registration and event logistics",
      "Coordinated with sponsors and technical mentors",
      "Facilitated innovation and collaboration among participants",
    ],
    technologies: ["Event Planning", "Project Management", "Coordination", "Innovation"],
    color: "from-slate-500 to-cyan-500",
  },
]

export default function Experience() {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leadership roles and professional experiences that shaped my journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-slate-500 to-teal-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                onMouseEnter={() => setHoveredExperience(exp.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-500 z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  } ml-16 md:ml-0`}
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6 hover:border-slate-400/40 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color}`}>
                        <exp.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height: hoveredExperience === exp.id ? "auto" : "60px",
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
