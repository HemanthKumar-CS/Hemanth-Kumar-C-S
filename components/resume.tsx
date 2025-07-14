"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiDownload, FiUser, FiBook, FiBriefcase, FiAward, FiCode, FiChevronDown, FiChevronUp } from "react-icons/fi"

interface PersonalInfo {
  name: string
  email: string
  phone: string
  objective: string
}

interface Education {
  degree: string
  specialization: string
  institution: string
  university: string
  graduation: string
  cgpa: string
  coursework: string[]
}

interface Experience {
  role: string
  company: string
  period: string
  highlights: string[]
}

interface Skills {
  programming: string[]
  frameworks: string[]
  databases: string[]
  tools: string[]
  concepts: string[]
}

interface ResumeSection {
  id: string
  title: string
  icon: any
  content: PersonalInfo | Education | Experience[] | Skills | string[]
}

const resumeSections: ResumeSection[] = [
  {
    id: "personal",
    title: "Personal Information",
    icon: FiUser,
    content: {
      name: "Hemanth Kumar C S",
      email: "hemanthreads@gmail.com",
      phone: "+91 8884862170",
      objective:
        "Final-year AI & ML Engineering student seeking internship opportunities to apply expertise in machine learning, computer vision, and software development. Passionate about solving real-world problems through technology and innovation.",
    } as PersonalInfo,
  },
  {
    id: "education",
    title: "Education",
    icon: FiBook,
    content: {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "ATME College of Engineering",
      university: "Visvesvaraya Technological University (VTU)",
      graduation: "Expected 2026",
      cgpa: "8.28/10",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Operating Systems",
        "Network Security",
      ],
    } as Education,
  },
  {
    id: "experience",
    title: "Experience",
    icon: FiBriefcase,
    content: [
      {
        role: "Media Head",
        company: "IET onCampus ATMECE",
        period: "2024 - Present",
        highlights: [
          "Led content strategy and social media management for technical society",
          "Organized technical events and workshops for student community",
          "Coordinated team activities and increased member engagement",
          "Participated in organizing TechAvishkar 2.0 hackathon event",
        ],
      },
      {
        role: "Cybersecurity Intern (Remote)",
        company: "Academor",
        period: "2023",
        highlights: [
          "Completed cybersecurity fundamentals training program",
          "Gained practical experience with security tools and frameworks",
          "Learned network security concepts and vulnerability assessment",
          "Worked with penetration testing tools and methodologies",
        ],
      },
    ] as Experience[],
  },
  {
    id: "skills",
    title: "Technical Skills",
    icon: FiCode,
    content: {
      programming: ["Python", "Java", "C", "R", "HTML", "CSS", "JavaScript"],
      frameworks: ["TensorFlow", "Keras", "scikit-learn", "OpenCV", "Flask", "React Native", "YOLO", "MediaPipe"],
      databases: ["MongoDB", "MySQL", "Firebase", "Supabase"],
      tools: ["Git", "Jupyter Notebook", "Google Maps API", "Tableau", "PowerBI", "Kali Linux", "Wireshark", "Nmap"],
      concepts: ["Machine Learning", "Computer Vision", "Web Development", "Database Design"],
    } as Skills,
  },
  {
    id: "achievements",
    title: "Achievements & Certifications",
    icon: FiAward,
    content: [
      'Winner - "Invaders" Hackathon, MIT Mysuru (2023)',
      'Runner-up - "Code Battle 2K25", KLSVDIT Haliyal (2025)',
      'Finalist - "RVCExIITB CTF 24", RV College of Engineering (2024)',
      "Machine Learning with TensorFlow - Infosys Springboard",
      "Cybersecurity Fundamentals - Infosys Springboard",
      "Introduction to SQL - Oracle",
      "Analytics and Data Visualization - Tableau",
    ] as string[],
  },
]

export default function Resume() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Interactive Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my professional journey through an interactive resume experience
          </p>

          <motion.a
            href="/HEMANTH_KUMAR_CS_Resume.pdf"
            download="HEMANTH_KUMAR_CS_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <FiDownload size={20} />
            Download Resume PDF
          </motion.a>
        </motion.div>

        <div className="space-y-4">
          {resumeSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <section.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                {expandedSection === section.id ? (
                  <FiChevronUp className="text-gray-400" size={24} />
                ) : (
                  <FiChevronDown className="text-gray-400" size={24} />
                )}
              </motion.button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-700/50">
                      {section.id === "personal" && (
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-blue-400 font-semibold mb-2">Contact Information</h4>
                              <p className="text-gray-300">Email: {(section.content as PersonalInfo).email}</p>
                              <p className="text-gray-300">Phone: {(section.content as PersonalInfo).phone}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">Objective</h4>
                            <p className="text-gray-300 leading-relaxed">{(section.content as PersonalInfo).objective}</p>
                          </div>
                        </div>
                      )}

                      {section.id === "education" && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">{(section.content as Education).degree}</h4>
                            <p className="text-purple-400">{(section.content as Education).specialization}</p>
                            <p className="text-gray-300">{(section.content as Education).institution}</p>
                            <p className="text-gray-300">{(section.content as Education).university}</p>
                            <div className="flex gap-4 mt-2">
                              <span className="text-gray-400">Expected Graduation: {(section.content as Education).graduation}</span>
                              <span className="text-green-400">CGPA: {(section.content as Education).cgpa}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">Relevant Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {(section.content as Education).coursework.map((course: string) => (
                                <span
                                  key={course}
                                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === "experience" && (
                        <div className="space-y-6">
                          {(section.content as Experience[]).map((exp: Experience, idx: number) => (
                            <div key={idx} className="border-l-2 border-blue-500 pl-4">
                              <h4 className="text-white font-semibold">{exp.role}</h4>
                              <p className="text-purple-400">{exp.company}</p>
                              <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                              <ul className="space-y-1">
                                {exp.highlights.map((highlight: string, hidx: number) => (
                                  <li key={hidx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.id === "skills" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">Programming Languages</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(section.content as Skills).programming.map((lang: string) => (
                                <span
                                  key={lang}
                                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                >
                                  {lang}
                                </span>
                              ))}
                            </div>

                            <h4 className="text-blue-400 font-semibold mb-2">ML/AI Frameworks</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(section.content as Skills).frameworks.map((framework: string) => (
                                <span
                                  key={framework}
                                  className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                                >
                                  {framework}
                                </span>
                              ))}
                            </div>

                            <h4 className="text-blue-400 font-semibold mb-2">Key Concepts</h4>
                            <div className="flex flex-wrap gap-2">
                              {(section.content as Skills).concepts.map((concept: string) => (
                                <span
                                  key={concept}
                                  className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                                >
                                  {concept}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">Databases</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(section.content as Skills).databases.map((db: string) => (
                                <span
                                  key={db}
                                  className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                                >
                                  {db}
                                </span>
                              ))}
                            </div>

                            <h4 className="text-blue-400 font-semibold mb-2">Tools & Platforms</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {(section.content as Skills).tools.map((tool: string) => (
                                <span
                                  key={tool}
                                  className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === "achievements" && (
                        <div className="space-y-3">
                          {(section.content as string[]).map((achievement: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
