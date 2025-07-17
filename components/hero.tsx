"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi"

const roles = ["ML Engineer", "AI Innovator", "Hackathon Champion", "Tech Visionary"]

export default function Hero() {
  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hemanthreads@gmail.com&su=Project%20Collaboration", "_blank")
  }
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Advanced typing animation
  useEffect(() => {
    const currentWord = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-white text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available for Internships
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-orbitron mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              Hemanth Kumar
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block bg-gradient-to-r from-cyan-400 via-slate-300 to-white bg-clip-text text-transparent"
            >
              C S
            </motion.span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-4xl text-gray-300 mb-6 h-12 md:h-16 flex items-center justify-center w-full">
            <span className="font-sora font-light text-center">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-white font-bold"
              >
                |
              </motion.span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Passionate about building innovative web applications and exploring AI/ML technologies. 
            Always eager to learn new technologies and create meaningful software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-6 sm:px-8 py-3 sm:py-4 glass-strong rounded-2xl text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 border border-cyan-500/30 w-full sm:w-auto text-center"
              data-magnetic="true"
              style={{
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  →
                </motion.div>
              </span>
            </motion.button>

            <motion.a
              href="/HEMANTH_KUMAR_CS_Resume.pdf"
              download="HEMANTH_KUMAR_CS_Resume.pdf"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(71, 85, 105, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass-card rounded-2xl text-gray-300 font-semibold hover:text-white transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 w-full sm:w-auto justify-center text-base sm:text-lg"
              data-magnetic="true"
              style={{
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 w-full px-4"
          >
            {[
              { icon: FiGithub, href: "https://github.com/HemanthKumar-CS", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/hemanth-kumar-c-s-954792283", label: "LinkedIn" },
              { icon: FiMail, href: null, label: "Email", onClick: handleEmailClick },
            ].map((social, index) => (
              social.onClick ? (
                <motion.button
                  key={social.label}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={social.onClick}
                  className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:glass-strong transition-all duration-300 border border-slate-700/30 hover:border-cyan-500/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <social.icon size={24} />
                </motion.button>
              ) : (
                <motion.a
                  key={social.label}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:glass-strong transition-all duration-300 border border-slate-700/30 hover:border-cyan-500/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <social.icon size={24} />
                </motion.a>
              )
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
          <FiArrowDown size={24} className="text-white" />
        </motion.div>
      </div>
    </section>
  )
}
