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
        "Final-year AI & ML Engineering student with industry experience at HAL (Hindustan Aeronautics Limited) seeking ML Engineer / Deep Learning Engineer roles. Expertise in deep learning, computer vision, and federated learning. IEEE-published researcher and hackathon winner with production-grade ML systems deployed on edge devices.",
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
      cgpa: "8.4/10",
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
        role: "Student Intern – IT Department",
        company: "HAL (Hindustan Aeronautics Limited), Bangalore",
        period: "Jan 2026 - Present",
        highlights: [
          "Built an intranet-based solution for the Overhaul Division to streamline inter-department folder organization and file accessibility",
          "Resolved real-time inter-department communication and documentation challenges for the Customer Service department",
          "Developing production-grade internal tools in a government aerospace environment",
        ],
      },
      {
        role: "Media Head",
        company: "IET onCampus ATMECE",
        period: "Dec 2024 - Present",
        highlights: [
          "Led content strategy and social media management for technical society of 60+ members",
          "Increased event engagement by ~60%",
          "Organized 7+ technical events and a 24-hour state hackathon",
        ],
      },
      {
        role: "Cybersecurity Intern (Remote)",
        company: "Academor",
        period: "Aug 2023 - Nov 2023",
        highlights: [
          "Performed network security training and hands-on vulnerability assessments",
          "Gained practical experience with security tools and frameworks",
        ],
      },
    ] as Experience[],
  },
  {
    id: "skills",
    title: "Technical Skills",
    icon: FiCode,
    content: {
      programming: ["Python", "Java", "C", "R"],
      frameworks: ["TensorFlow", "Keras", "PyTorch", "Flower (FL)", "scikit-learn", "OpenCV", "ONNX Runtime", "YOLOv8/v11", "MediaPipe", "ByteTrack", "Flask", "Streamlit"],
      databases: ["MongoDB", "MySQL", "Firebase", "Supabase"],
      tools: ["Git", "Docker", "Jupyter Notebook", "Power BI", "TensorFlow Lite", "Raspberry Pi"],
      concepts: ["Machine Learning", "Deep Learning", "Computer Vision", "Federated Learning", "Edge Computing", "Web Development"],
    } as Skills,
  },
  {
    id: "achievements",
    title: "Achievements & Certifications",
    icon: FiAward,
    content: [
      "IEEE ICAFT 2025: Research paper selected for presentation – Federated Learning for DDoS Detection",
      'Winner – "Invaders" Hackathon, MIT Mysuru (2023)',
      'Runner-up – "Code Battle 2K25", KLSVDIT Haliyal (2025)',
      'Finalist – "RVCExIITB CTF 24", RV College of Engineering (2024)',
      "Machine Learning with TensorFlow - Infosys Springboard",
      "Building LLM Apps with Prompt Engineering - Nvidia",
      "Analytics and Data Visualization - Tableau",
      "Oracle SQL - Oracle",
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
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-violet-400 to-slate-500 bg-clip-text text-transparent">
            Interactive Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my professional journey through an interactive resume experience
          </p>

          <motion.a
            href="/Hemanth_Kumar_CS-Resume.pdf"
            download="Hemanth_Kumar_CS-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-slate-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
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
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-violet-500 to-slate-600">
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
                            <p className="text-violet-400">{(section.content as Education).specialization}</p>
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
                              <p className="text-violet-400">{exp.company}</p>
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
                                  className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm"
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
                                  className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
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
                              <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-slate-500 rounded-full mt-2 flex-shrink-0"></div>
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
