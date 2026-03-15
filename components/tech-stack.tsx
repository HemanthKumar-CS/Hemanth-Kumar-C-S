"use client"

import { motion } from "framer-motion"
import {
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiJupyter,
  SiDocker,
  SiPytorch,
  SiRaspberrypi,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FiDatabase, FiCode, FiCpu, FiZap } from "react-icons/fi"

const techCategories = [
  {
    title: "ML & Deep Learning",
    icon: FiCpu,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "PyTorch", icon: SiPytorch },
      { name: "scikit-learn", icon: FiCode },
      { name: "Flower (FL)", icon: FiCode },
      { name: "ONNX Runtime", icon: FiCpu },
      { name: "R", icon: FiCode },
    ],
  },
  {
    title: "Computer Vision",
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "OpenCV", icon: SiOpencv },
      { name: "YOLOv8/v11", icon: FiCode },
      { name: "MediaPipe", icon: FiCode },
      { name: "ByteTrack", icon: FiCode },
    ],
  },
  {
    title: "Web & Databases",
    icon: FiDatabase,
    color: "from-green-500 to-teal-500",
    technologies: [
      { name: "Flask", icon: SiFlask },
      { name: "Streamlit", icon: FiCode },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: FiDatabase },
    ],
  },
  {
    title: "Tools & Others",
    icon: FiZap,
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Power BI", icon: FiCode },
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

        {/* Edge Computing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500">
              <SiRaspberrypi className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Edge Computing</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["TensorFlow Lite", "Raspberry Pi", "Modbus/RS485"].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all"
              >
                <SiRaspberrypi className="text-emerald-400 text-2xl mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
