"use client"

import { useState, useEffect, useRef } from "react"
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
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  // Advanced particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b"]

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.restore()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 120) * 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-emerald-400 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
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
              className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
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
                className="text-emerald-400 font-bold"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 transition-all duration-300"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
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
            className="flex gap-6 justify-center items-center mb-12 w-full"
          >
            {[
              { icon: FiGithub, href: "https://github.com/HemanthKumar-CS", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/hemanth-kumar-c-s-954792283", label: "LinkedIn" },
              { icon: FiMail, href: null, label: "Email", onClick: handleEmailClick },
            ].map((social, index) => (
              social.onClick ? (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={social.onClick}
                  className="p-4 bg-slate-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.button>
              ) : (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm font-medium text-center">Scroll to explore</span>
          <FiArrowDown size={24} className="text-emerald-400" />
        </motion.div>
      </div>
    </section>
  )
}
