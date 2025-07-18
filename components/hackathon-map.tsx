"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMapPin, FiCalendar, FiUsers } from "react-icons/fi"
import { FaTrophy } from "react-icons/fa"

const hackathons = [
  {
    id: 1,
    name: "Invaders Hackathon",
    location: "MIT Mysuru",
    year: "2023",
    achievement: "Winner",
    participants: "100+",
    coordinates: { x: 70, y: 20 },
    color: "from-yellow-400 to-orange-500",
    description: "Won hackathon competition showcasing innovative AI/ML solutions",
  },
  {
    id: 2,
    name: "RVCExIITB CTF 24",
    location: "RV College of Engineering, Bangalore",
    year: "2024",
    achievement: "Finalist",
    participants: "150+",
    coordinates: { x: 70, y: 50 },
    color: "from-green-400 to-teal-500",
    description: "Reached finals in prestigious Capture The Flag cybersecurity competition",
  },
  {
    id: 3,
    name: "Code Battle 2K25",
    location: "KLSVDIT Haliyal",
    year: "2025",
    achievement: "Runner-up",
    participants: "80+",
    coordinates: { x: 20, y: 50 },
    color: "from-gray-400 to-gray-600",
    description: "Secured second place in competitive programming competition",
  },
  {
    id: 4,
    name: "TechAvishkar 2.0",
    location: "ATMECE",
    year: "2025",
    achievement: "Organizer",
    participants: "200+",
    coordinates: { x: 45, y: 30 },
    color: "from-cyan-400 to-blue-500",
    description: "Organization committee member for major hackathon event",
  },
  {
    id: 5,
    name: "Symbiot",
    location: "VVCE",
    year: "2024",
    achievement: "Participant",
    participants: "60+",
    coordinates: { x: 45, y: 70 },
    color: "from-purple-400 to-indigo-500",
    description: "Participated in innovative technology hackathon",
  },
  {
    id: 6,
    name: "Hack Kshetra",
    location: "VVCE",
    year: "2024",
    achievement: "Participant",
    participants: "70+",
    coordinates: { x: 20, y: 20 },
    color: "from-slate-400 to-cyan-500",
    description: "Engaged in collaborative problem-solving event",
  },
  {
    id: 7,
    name: "Fusion Techackathon",
    location: "AIET",
    year: "2024",
    achievement: "Participant",
    participants: "50+",
    coordinates: { x: 80, y: 80 },
    color: "from-indigo-400 to-blue-500",
    description: "Participated in fusion technology innovation challenge",
  },
]

export default function HackathonMap() {
  const [selectedHackathon, setSelectedHackathon] = useState<(typeof hackathons)[0] | null>(null)

  return (
    <section id="hackathon-map" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Hackathon Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my hackathon journey across different institutions and competitions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white/5 via-gray-100/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-8 h-96 overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                borderImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1)) 1',
              }}
            >
              {/* Circuit Board Pattern Background */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-15" viewBox="0 0 100 100">
                  {/* Circuit traces */}
                  <path d="M10,10 L30,10 L30,20 L50,20 L50,10 L70,10 L70,30 L90,30" 
                        stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" />
                  <path d="M10,40 L20,40 L20,60 L40,60 L40,50 L60,50 L60,70 L80,70" 
                        stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" />
                  <path d="M15,80 L35,80 L35,90 L55,90 L55,80 L75,80 L75,60 L90,60" 
                        stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" />
                  <path d="M90,10 L90,40 M10,70 L40,70 M60,20 L60,40 M80,50 L80,80" 
                        stroke="url(#circuitGradient)" strokeWidth="0.3" fill="none" />
                  
                  {/* Circuit nodes */}
                  <circle cx="30" cy="10" r="1" fill="#64748b" opacity="0.6" />
                  <circle cx="50" cy="20" r="1" fill="#64748b" opacity="0.6" />
                  <circle cx="70" cy="30" r="1" fill="#64748b" opacity="0.6" />
                  <circle cx="20" cy="60" r="1" fill="#64748b" opacity="0.6" />
                  <circle cx="60" cy="50" r="1" fill="#64748b" opacity="0.6" />
                  <circle cx="75" cy="80" r="1" fill="#64748b" opacity="0.6" />
                  
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#64748b" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#64748b" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Code Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute text-gray-400/20 font-mono text-xs"
                    initial={{ 
                      x: Math.random() * 100 + "%", 
                      y: "100%",
                      opacity: 0 
                    }}
                    animate={{
                      y: ["-10%", "-10%"],
                      opacity: [0, 0.4, 0],
                      x: [
                        Math.random() * 100 + "%",
                        (Math.random() * 100) + "%"
                      ]
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear"
                    }}
                  >
                    {["{ }", "[ ]", "</>", "&&", "||", "=>", "!=", "==", "++", "--"][i % 10]}
                  </motion.div>
                ))}
              </div>

              {/* Pulsing Data Nodes */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute w-2 h-2 bg-gray-400/30 rounded-full"
                    style={{
                      left: `${15 + (i * 12)}%`,
                      top: `${20 + Math.sin(i) * 30}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Binary Rain Effect */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={`binary-${i}`}
                    className="absolute text-gray-400/15 font-mono text-xs whitespace-pre-line"
                    style={{
                      left: `${10 + i * 15}%`,
                    }}
                    initial={{ y: "-10%", opacity: 0 }}
                    animate={{
                      y: "110%",
                      opacity: [0, 0.3, 0.3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "linear"
                    }}
                  >
                    {"1010\n0101\n1100\n0011\n1001\n0110"}
                  </motion.div>
                ))}
              </div>

              {/* Hackathon Map Container */}
              <div className="relative w-full h-full z-10">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-gray-400/20"
                        animate={{
                          borderColor: [
                            "rgba(156, 163, 175, 0.1)",
                            "rgba(156, 163, 175, 0.2)",
                            "rgba(156, 163, 175, 0.1)"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.02,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Central Tech Hub Visual */}
                <svg className="w-full h-full opacity-20 absolute inset-0" viewBox="0 0 100 100">
                  {/* Central hub */}
                  <circle cx="50" cy="50" r="8" fill="none" stroke="url(#hubGradient)" strokeWidth="0.5" opacity="0.6" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="url(#hubGradient)" strokeWidth="0.3" opacity="0.4" />
                  <circle cx="50" cy="50" r="16" fill="none" stroke="url(#hubGradient)" strokeWidth="0.2" opacity="0.3" />
                  
                  {/* Connecting lines to hackathon areas */}
                  <path d="M50,50 L20,20 M50,50 L70,20 M50,50 L20,50 M50,50 L70,50 M50,50 L45,30 M50,50 L45,70 M50,50 L80,80" 
                        stroke="url(#connectionGradient)" strokeWidth="0.3" opacity="0.3" strokeDasharray="2,2" />
                  
                  <defs>
                    <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#64748b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
                    </radialGradient>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#64748b" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Hackathon Pins */}
                {hackathons.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute cursor-pointer z-10"
                    style={{
                      left: `${hackathon.coordinates.x}%`,
                      top: `${hackathon.coordinates.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setSelectedHackathon(hackathon)}
                    whileHover={{ scale: 1.3, zIndex: 20 }}
                  >
                    <div
                      className={`relative w-8 h-8 rounded-full bg-gradient-to-r ${hackathon.color} flex items-center justify-center shadow-xl border-2 border-white/20`}
                    >
                      <FiMapPin className="text-white" size={16} />

                      {/* Pulse Animation */}
                      <motion.div
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${hackathon.color}`}
                      />
                    </div>

                    {/* Enhanced Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-all duration-200 shadow-lg border border-cyan-500/20 backdrop-blur-sm">
                      <div className="font-semibold">{hackathon.name}</div>
                      <div className="text-xs text-cyan-300">{hackathon.achievement}</div>
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hackathon Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Hackathon Details</h3>

            {selectedHackathon ? (
              <motion.div
                key={selectedHackathon.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedHackathon.color} flex items-center justify-center mb-4`}
                >
                  <FaTrophy className="text-white" size={24} />
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{selectedHackathon.name}</h4>
                <p className="text-cyan-400 mb-4">{selectedHackathon.location}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-blue-400" size={16} />
                    <span className="text-gray-300 text-sm">{selectedHackathon.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-yellow-400" size={16} />
                    <span className="text-gray-300 text-sm">{selectedHackathon.achievement}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">{selectedHackathon.participants} participants</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm">{selectedHackathon.description}</p>
              </motion.div>
            ) : (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-slate-500/20 p-6 text-center">
                <FiMapPin className="text-gray-400 text-4xl mx-auto mb-4" />
                <p className="text-gray-400">Click on a pin to view hackathon details</p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-slate-500/20 p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">7</div>
                <div className="text-gray-400 text-sm">Events</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-slate-500/20 p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">3</div>
                <div className="text-gray-400 text-sm">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
