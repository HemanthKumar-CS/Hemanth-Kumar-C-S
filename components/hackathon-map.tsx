"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMapPin, FiCalendar, FiUsers } from "react-icons/fi"
import { FaTrophy } from "react-icons/fa"

const hackathons = [
  {
    id: 1,
    name: "TechAvishkar 1.0",
    location: "ATMECE",
    year: "2023",
    achievement: "Participant",
    participants: "50+",
    coordinates: { x: 42, y: 52 },
    color: "from-cyan-400 to-blue-500",
    description: "First hackathon participation, gained valuable experience",
  },
  {
    id: 2,
    name: "Invaders Hackathon",
    location: "MIT Mysuru",
    year: "2023",
    achievement: "Winner",
    participants: "100+",
    coordinates: { x: 45, y: 60 },
    color: "from-yellow-400 to-orange-500",
    description: "Won first place among 100+ teams with innovative AI solution",
  },
  {
    id: 3,
    name: "Code Battle 2K25",
    location: "KLSVDIT Haliyal",
    year: "2025",
    achievement: "Runner-up",
    participants: "80+",
    coordinates: { x: 35, y: 55 },
    color: "from-gray-400 to-gray-600",
    description: "Secured second place in competitive programming contest",
  },
  {
    id: 4,
    name: "RVCExIITB CTF 24",
    location: "RV College of Engineering, Bangalore",
    year: "2024",
    achievement: "Finalist",
    participants: "150+",
    coordinates: { x: 50, y: 65 },
    color: "from-green-400 to-teal-500",
    description: "Reached finals in prestigious cybersecurity competition",
  },
  {
    id: 5,
    name: "Symbiot",
    location: "VVCE",
    year: "2024",
    achievement: "Participant",
    participants: "60+",
    coordinates: { x: 40, y: 50 },
    color: "from-blue-400 to-purple-500",
    description: "Participated in innovative technology hackathon",
  },
  {
    id: 6,
    name: "Hack Kshetra",
    location: "VVCE",
    year: "2024",
    achievement: "Participant",
    participants: "70+",
    coordinates: { x: 55, y: 45 },
    color: "from-purple-400 to-pink-500",
    description: "Engaged in collaborative problem-solving event",
  },
  {
    id: 7,
    name: "Fusion Techackathon",
    location: "AIET",
    year: "2024",
    achievement: "Participant",
    participants: "50+",
    coordinates: { x: 30, y: 70 },
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
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
              className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 h-96 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

              {/* Map Background */}
              <div className="relative w-full h-full">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                  <path
                    d="M10,20 Q30,10 50,20 T90,25 L90,80 Q70,90 50,80 T10,75 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-400"
                  />
                  <path
                    d="M20,30 Q40,25 60,35 T85,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-gray-500"
                  />
                </svg>

                {/* Hackathon Pins */}
                {hackathons.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${hackathon.coordinates.x}%`,
                      top: `${hackathon.coordinates.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setSelectedHackathon(hackathon)}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div
                      className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${hackathon.color} flex items-center justify-center shadow-lg`}
                    >
                      <FiMapPin className="text-white" size={12} />

                      {/* Pulse Animation */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${hackathon.color}`}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      {hackathon.name}
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
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedHackathon.color} flex items-center justify-center mb-4`}
                >
                  <FaTrophy className="text-white" size={24} />
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{selectedHackathon.name}</h4>
                <p className="text-purple-400 mb-4">{selectedHackathon.location}</p>

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
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center">
                <FiMapPin className="text-gray-400 text-4xl mx-auto mb-4" />
                <p className="text-gray-400">Click on a pin to view hackathon details</p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">6+</div>
                <div className="text-gray-400 text-sm">Hackathons</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-gray-400 text-sm">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
