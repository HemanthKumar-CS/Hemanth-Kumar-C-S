"use client"

import { motion } from "framer-motion"
import {
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiFlask,
  SiReact,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiJupyter,
  SiTableau,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FiDatabase, FiShield, FiCode, FiCpu } from "react-icons/fi"

const techCategories = [
  {
    title: "ML & Deep Learning",
    icon: FiCpu,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: FiCode },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "OpenCV", icon: SiOpencv },
      { name: "scikit-learn", icon: FiCode },
    ],
  },
  {
    title: "Web Development",
    icon: FiCode,
    color: "from-green-500 to-teal-500",
    technologies: [
      { name: "Flask", icon: SiFlask },
      { name: "React Native", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    color: "from-slate-500 to-cyan-500",
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: FiDatabase },
    ],
  },
  {
    title: "Tools & Others",
    icon: FiShield,
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Tableau", icon: SiTableau },
      { name: "PowerBI", icon: FiCode },
      { name: "Java", icon: FaJava },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all"
                  >
                    <tech.icon className="text-2xl text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cybersecurity Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500">
              <FiShield className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Cybersecurity Tools</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Kali Linux", "Wireshark", "Nmap", "Aircrack-ng"].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all"
              >
                <FiShield className="text-emerald-400 text-2xl mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
