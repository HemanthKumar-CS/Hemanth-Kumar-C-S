"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiX, FiFilter } from "react-icons/fi"

const projects = [
  {
    id: 1,
    title: "D-TECS – Dynamic Traffic Emergency Control System",
    role: "Computer Vision Engineer",
    impact: "Real-time AI traffic management",
    description:
      "End-to-end AI traffic management system with emergency vehicle priority routing and adaptive signal timing.",
    longDescription:
      "Built a computer vision pipeline using YOLOv11 + ONNX Runtime for real-time vehicle detection and density analysis at traffic intersections. Implemented an Emergency Priority System (EPS) that detects ambulances via visual identifiers and dynamically creates 'Green Corridors' by overriding signal cycles to reduce emergency response time. Adaptive signal timing algorithms use live lane-wise vehicle counts with realistic Indian traffic logic (clockwise N→E→S→W phase control). Full-stack: Python AI engine with OpenCV/ByteTrack, WebSocket backend, and React dashboard with real-time video analytics and manual override controls.",
    tags: ["AI/ML", "Computer Vision"],
    tech: ["Python", "YOLOv11", "ONNX Runtime", "OpenCV", "ByteTrack", "React", "WebSocket"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS",
  },
  {
    id: 2,
    title: "Privacy-Preserving Federated Learning for DDoS Detection",
    role: "ML Research Engineer",
    impact: "IEEE ICAFT 2025 – Published",
    description:
      "IEEE-published federated learning system for DDoS intrusion detection that trains on distributed data without centralization.",
    longDescription:
      "Engineered a 1D-CNN-based intrusion detection system using the Flower framework for federated learning, training on distributed network data without centralization. Implemented Multi-Krum + FedAvg aggregation to defend against Byzantine attacks from malicious clients. Achieved 80% detection accuracy on the CIC-DDoS2019 dataset with a 30-feature network traffic schema. Built an async federated simulation with 4 clients and a monitoring dashboard, containerized with Docker Compose. Research accepted for presentation at IEEE ICAFT 2025.",
    tags: ["AI/ML", "Cybersecurity", "Federated Learning"],
    tech: ["Python", "PyTorch", "Flower", "1D-CNN", "Docker Compose", "CIC-DDoS2019"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS",
  },
  {
    id: 3,
    title: "StreeRaksha",
    role: "Computer Vision Engineer",
    impact: "Real-time threat detection on edge",
    description:
      "AI-powered women's safety platform with real-time threat detection on edge devices, live dashboard, and mobile app integration.",
    longDescription:
      "Built a real-time threat detection pipeline on edge devices (Raspberry Pi/Jetson) using YOLOv11s + RTMPose-m + PromptPAR with a 6-factor risk scoring system (pose, gender, proximity, time, grouping, motion). Architected a Go backend with WebSocket broker (Gin) handling AI stream ingestion, Firebase persistence, and live dashboard broadcast, deployed via Docker multi-stage builds (10MB binary). Implemented state machine alerting with 4 risk levels, evidence capture on ALERT (80+ score), and configurable thresholds for production deployment.",
    tags: ["AI/ML", "Computer Vision"],
    tech: ["Python", "Go", "YOLOv11s", "RTMPose", "Raspberry Pi", "FastAPI", "Firebase", "Docker"],
    image: "/StreeRaksha.png?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/StreeRaksha",
  },
  {
    id: 4,
    title: "Melanocytic Nevi Classification using Transfer Learning",
    role: "Deep Learning Developer",
    impact: "Medical diagnosis automation – Journal Published",
    description:
      "IgMin Research journal-published deep learning system for skin disease classification achieving 89% accuracy with ResNet50.",
    longDescription:
      "Built a ResNet50 classifier on 10,000+ dermoscopic images from the ISIC dataset, achieving 89% accuracy (vs. 82% baseline) through class weighting and heavy augmentation to handle dataset imbalance. Preprocessed and augmented medical images to improve model generalization, with comprehensive evaluation metrics. Published in IgMin Research journal.",
    tags: ["AI/ML", "Computer Vision"],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50", "Matplotlib", "Seaborn"],
    image: "/Melanocytic_nevi.jpg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/Melanocytic_Nevi_Classification_using_Transfer_Learning",
  },
  {
    id: 5,
    title: "AgroBalance – Smart Soil Monitoring",
    role: "ML & Embedded Systems Engineer",
    impact: "Precision agriculture optimization",
    description:
      "IoT-integrated smart soil monitoring system with ML-powered crop and fertilizer recommendations via NPK sensor and Raspberry Pi.",
    longDescription:
      "Integrated NPK sensor with Raspberry Pi via Modbus RTU protocol to read real-time soil nutrient data. Built an ML recommendation engine that analyzes NPK levels and environmental parameters to suggest optimal crops and fertilizer amounts. The system bridges embedded hardware with machine learning inference to provide actionable insights for precision agriculture.",
    tags: ["AI/ML"],
    tech: ["Python", "Raspberry Pi", "Modbus RTU", "scikit-learn", "TensorFlow Lite", "Flask"],
    image: "/placeholder.svg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS",
  },
  {
    id: 6,
    title: "Move Mentor",
    role: "Team Lead & Full-Stack Developer",
    impact: "Reduced wait times by 40%",
    description:
      "College bus transportation system with real-time tracking, route optimization, and role-based access control.",
    longDescription:
      "Real-time tracking system for students with 99.9% uptime, reducing wait times by 40%. Led the development of a comprehensive college bus transportation system that streamlined campus transportation for students. Implemented real-time tracking using Google Maps API, developed role-based access system for admins, drivers, and students, and created route optimization algorithms.",
    tags: ["Web Dev"],
    tech: ["Python", "Flask", "MongoDB", "Google Maps API", "HTML", "CSS", "JavaScript"],
    image: "/Move_Mentor.jpg?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/move_mentor",
  },
  {
    id: 7,
    title: "Disease Prediction System",
    role: "Machine Learning Engineer",
    impact: "Early disease detection",
    description:
      "ML-powered system for early disease detection based on health parameters with real-time processing capabilities.",
    longDescription:
      "Built ML model with 85% accuracy for early disease detection from health parameters. Developed a machine learning model for early disease detection based on various health parameters. Created a user-friendly web interface that processes health parameters in real-time and provides instant predictions. The system helps in preventive healthcare by identifying potential health risks early.",
    tags: ["AI/ML"],
    tech: ["Python", "scikit-learn", "NumPy", "Pandas", "Streamlit", "Jupyter Notebook"],
    image: "/Disease_Prediction.png?height=300&width=500",
    github: "https://github.com/HemanthKumar-CS/Disease-Analysis-System",
  },
]

const filterTags = ["All", "AI/ML", "Web Dev", "Computer Vision", "Cybersecurity", "Federated Learning"]

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
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-violet-400 to-slate-400 bg-clip-text text-transparent">
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
                  ? "bg-gradient-to-r from-violet-500 to-slate-600 text-white"
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
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.3)"
                }}
                className="glass rounded-2xl overflow-hidden cursor-pointer group border border-slate-700/30 hover:border-violet-500/40 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
                style={{
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
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
                  <p className="text-violet-400 text-sm mb-2">{project.role}</p>
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
                  <p className="text-violet-400 mb-4">{selectedProject.role}</p>
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
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-slate-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all"
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
