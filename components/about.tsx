"use client"

import { motion } from "framer-motion"
import { FiBook, FiCode, FiShield, FiBriefcase, FiAward, FiUsers, FiTarget } from "react-icons/fi"

const journeyData = [
  {
    year: "2022",
    title: "Started AI & ML Engineering",
    description: "Began Bachelor of Engineering at ATME College of Engineering",
    icon: FiBook,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2023",
    title: "Cybersecurity Intern",
    description: "Completed cybersecurity training program at Academor (Remote)",
    icon: FiShield,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "2023",
    title: "Hackathon Winner",
    description: 'Winner at "Invaders" Hackathon, MIT Mysuru',
    icon: FiCode,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Media Head at IET",
    description: "Led content strategy and social media management for technical society",
    icon: FiUsers,
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2025",
    title: "TechAvishkar Organizer",
    description: "Co-organizing major hackathon event at ATMECE",
    icon: FiTarget,
    color: "from-cyan-500 to-blue-500"
  },
]

const expertise = [
  { 
    title: "Machine Learning", 
    description: "Developing intelligent algorithms and predictive models", 
    icon: FiBriefcase,
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
  },
  {
    title: "Computer Vision",
    description: "Building visual recognition and image processing systems",
    icon: FiCode,
    skills: ["OpenCV", "YOLO", "Image Processing", "Deep Learning"]
  },
  { 
    title: "Cybersecurity", 
    description: "Network security, ethical hacking, and vulnerability assessment", 
    icon: FiShield,
    skills: ["Kali Linux", "Penetration Testing", "Network Security", "Wireshark"]
  },
  { 
    title: "Web Development", 
    description: "Creating responsive and interactive web applications", 
    icon: FiAward,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
]

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          {/* About Me Content with Photo on Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-orbitron">
                  AI & ML Engineering Student
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Final-year AI & ML Engineering student with a passion for building intelligent solutions. 
                  Active in hackathons since 2023 with proven track record in competitive programming and real-world projects.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I specialize in machine learning, computer vision, and cybersecurity. Currently leading technical 
                  initiatives at IET onCampus ATMECE and organizing hackathons to foster innovation in the tech community.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 glass-card rounded-lg">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">CGPA: 8.38/10</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-card rounded-lg">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">7+ Hackathons</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-card rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">5+ Projects</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-card rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Media Head</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Photo Card - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 20
                }}
                className="relative group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* Main Glass Card */}
                <div className="relative p-6 rounded-3xl border border-slate-500/30 overflow-hidden backdrop-blur-xl"
                     style={{
                       background: 'rgba(15, 23, 42, 0.4)',
                       backdropFilter: 'blur(25px)',
                       boxShadow: '0 25px 45px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                     }}
                >
                  {/* Photo with Epic Effects */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.08,
                      rotateZ: 2
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative"
                  >
                    {/* Outer Glow Ring */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700"
                    />

                    {/* Photo Container */}
                    <div className="relative rounded-full p-2 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-emerald-500/40 backdrop-blur-sm">
                      <img
                        src="/profile-picrure.png"
                        alt="Hemanth Kumar"
                        className="w-64 h-64 rounded-full object-cover border-4 border-white/20 transition-all duration-500 group-hover:border-white/40"
                        style={{
                          boxShadow: '0 0 40px rgba(6, 182, 212, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Shadow */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10 group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
