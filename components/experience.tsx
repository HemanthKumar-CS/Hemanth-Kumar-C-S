"use client"

import { motion } from "framer-motion"
import { FiUsers, FiShield, FiBook, FiCode, FiTarget } from "react-icons/fi"

// Combined timeline data (journey + experience)
const timelineData = [
  {
    id: 1,
    year: "2022",
    title: "B.E. Computer Science & Engineering - AI & ML",
    company: "ATME College of Engineering | VTU",
    type: "Education",
    description: "Pursuing Bachelor of Engineering with AI & ML Specialization (Expected 2026)",
    highlights: [
      "Current CGPA: 8.28/10",
      "Coursework: Machine Learning, Deep Learning, Computer Vision, DSA, DBMS, Software Engineering",
      "Active in technical societies and competitive programming"
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "DSA"],
    icon: FiBook,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    year: "2023",
    title: "Cybersecurity Intern",
    company: "Academor (Remote)",
    type: "Internship",
    description: "Completed comprehensive training in network security and ethical hacking",
    highlights: [
      "Gained hands-on experience with penetration testing and vulnerability assessment",
      "Worked with industry-standard security tools and frameworks",
      "Completed cybersecurity certification through Infosys Springboard"
    ],
    technologies: ["Kali Linux", "Wireshark", "Nmap", "Aircrack-ng", "Penetration Testing"],
    icon: FiShield,
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    year: "2023",
    title: 'Winner - "Invaders" Hackathon',
    company: "MIT Mysuru",
    type: "Achievement",
    description: "Won hackathon competition showcasing innovative AI/ML solutions",
    highlights: [
      "Developed winning solution under time constraints",
      "Demonstrated exceptional problem-solving and teamwork skills",
      "First major hackathon victory launching competitive programming journey"
    ],
    technologies: ["AI/ML", "Problem Solving", "Team Collaboration", "Innovation"],
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    year: "2024",
    title: "Media Head",
    company: "IET onCampus ATMECE",
    type: "Leadership",
    description: "Leading content strategy for 60+ member technical society (2024 - Present)",
    highlights: [
      "Led content strategy increasing engagement by 60%",
      "Organized 7+ technical events and workshops with 90% attendance rate",
      "Organisation committee member for TechAvishkar 2.0 hackathon (2025)",
      "Managing social media and event promotion strategies"
    ],
    technologies: ["Event Management", "Content Strategy", "Leadership", "Social Media"],
    icon: FiUsers,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    year: "2024",
    title: 'Finalist - "RVCExIITB CTF 24"',
    company: "RV College of Engineering Bangalore",
    type: "Achievement",
    description: "Reached finals in prestigious Capture The Flag cybersecurity competition",
    highlights: [
      "Competed in cybersecurity challenges against top teams",
      "Applied penetration testing and vulnerability assessment skills",
      "Demonstrated expertise in ethical hacking techniques"
    ],
    technologies: ["Cybersecurity", "CTF", "Penetration Testing", "Problem Solving"],
    icon: FiShield,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    year: "2025",
    title: 'Runner-up - "Code Battle 2K25"',
    company: "KLSVDIT Haliyal",
    type: "Achievement",
    description: "Secured second place in competitive programming competition",
    highlights: [
      "Achieved runner-up position in coding competition",
      "Demonstrated advanced programming and algorithmic skills",
      "Part of ongoing competitive programming success streak"
    ],
    technologies: ["Competitive Programming", "Algorithms", "Problem Solving", "DSA"],
    icon: FiCode,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    year: "2025",
    title: "TechAvishkar 2.0 Organizer",
    company: "ATMECE",
    type: "Event Leadership",
    description: "Organisation committee member for major hackathon event",
    highlights: [
      "Managing participant registration and event logistics",
      "Coordinating with sponsors and technical mentors",
      "Facilitating innovation and collaboration among participants",
      "Leading event promotion and media strategy"
    ],
    technologies: ["Event Planning", "Project Management", "Coordination", "Leadership"],
    icon: FiTarget,
    color: "from-cyan-500 to-blue-500",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional timeline from education to leadership roles
          </p>
        </motion.div>

        {/* Clean Professional Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-slate-600"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6 group"
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg border-4 border-slate-900`}
                  >
                    <item.icon className="text-white" size={18} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex-1 pb-2"
                >
                  <div className="p-6 glass rounded-2xl border border-slate-600/30 hover:border-cyan-500/40 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                        {item.year}
                      </span>
                      <span className="px-2 py-1 rounded text-xs bg-slate-800/50 text-slate-300 border border-slate-700/50">
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 font-orbitron">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-3">
                      {item.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                              <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-slate-800/50 text-cyan-300 rounded border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
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
