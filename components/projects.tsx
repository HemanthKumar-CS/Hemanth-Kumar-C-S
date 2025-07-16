"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiX, FiFilter } from "react-icons/fi"

const projects = [
  {
    id: 1,
    title: "StreeRaksha",
    role: "Computer Vision Engineer",
    impact: "Real-time threat detection",
    description:
      "AI-powered women's safety platform with real-time threat detection, interactive dashboard, and mobile app integration.",
    longDescription:
      "Developed a comprehensive women's safety platform using advanced computer vision techniques. The system integrates multiple CV models including YOLO, MediaPipe, and MobileNetV2 for gesture recognition and threat detection. Built an interactive dashboard with live monitoring capabilities and created a React Native mobile app with safety maps and SOS alerts.",
    tags: ["AI/ML", "Computer Vision"],
    tech: ["Python", "FastAPI", "React Native", "Supabase", "OpenCV", "YOLO", "MediaPipe"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/StreeRaksha",
  },
  {
    id: 2,
    title: "Skin Disease Detection",
    role: "Deep Learning Developer",
    impact: "Medical diagnosis automation",
    description:
      "Deep learning system for skin disease classification using ResNet50 architecture with comprehensive evaluation metrics.",
    longDescription:
      "Built a robust skin disease detection system achieving 89% accuracy using ResNet50 architecture. Preprocessed and augmented over 10,000 medical images to improve model generalization. Implemented advanced techniques including class weighting to handle dataset imbalance and deployed comprehensive evaluation metrics.",
    tags: ["AI/ML", "Computer Vision"],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "Seaborn"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/Melanocytic_Nevi_Classification_using_Transfer_Learning",
  },
  {
    id: 3,
    title: "Move Mentor",
    role: "Team Lead & Full-Stack Developer",
    impact: "Reduced wait times by 40%",
    description:
      "College bus transportation system with real-time tracking, route optimization, and role-based access control.",
    longDescription:
      "Real-time tracking system for students with 99.9% uptime, reducing wait times by 40%. Led the development of a comprehensive college bus transportation system that streamlined campus transportation for students. Implemented real-time tracking using Google Maps API, developed role-based access system for admins, drivers, and students, and created route optimization algorithms.",
    tags: ["Web Dev"],
    tech: ["Python", "Flask", "MongoDB", "Google Maps API", "HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/move_mentor",
  },
  {
    id: 4,
    title: "Disease Prediction System",
    role: "Machine Learning Engineer",
    impact: "Early disease detection",
    description:
      "ML-powered system for early disease detection based on health parameters with real-time processing capabilities.",
    longDescription:
      "Built ML model with 85% accuracy for early disease detection from health parameters. Developed a machine learning model for early disease detection based on various health parameters. Created a user-friendly web interface that processes health parameters in real-time and provides instant predictions. The system helps in preventive healthcare by identifying potential health risks early.",
    tags: ["AI/ML"],
    tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Streamlit", "Jupyter Notebook"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/Disease-Analysis-System",
  },
]

const filterTags = ["All", "AI/ML", "Web Dev", "Computer Vision", "Cybersecurity"]

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.tags.includes(selectedFilter))

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge AI/ML technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <FiFilter className="text-gray-400 mt-2" />
          {filterTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === tag
                  ? "bg-gradient-to-r from-cyan-500 to-slate-600 text-white"
                  : "glass-card text-gray-400 hover:text-white"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{project.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-cyan-400 mb-4">{selectedProject.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 glass-strong text-white rounded-lg hover:glass transition-all"
                    >
                      <FiGithub size={20} />
                      View Code
                    </motion.a>
                    {(selectedProject as any).demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={(selectedProject as any).demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-slate-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                      >
                        <FiExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
