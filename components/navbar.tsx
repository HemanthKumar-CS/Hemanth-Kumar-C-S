"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass-strong shadow-xl shadow-cyan-500/10 border border-slate-700/50"
          : "glass-card border border-slate-800/30"
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled 
          ? '0 0 40px rgba(6, 182, 212, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          : '0 0 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-2xl font-bold font-orbitron"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
            }}
          >
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">
              HK
            </span>
            <span className="text-white">.CS</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 lg:px-5 py-2 lg:py-2.5 rounded-full transition-all duration-300 font-medium text-sm lg:text-base ${
                  activeSection === item.href.substring(1)
                    ? "glass-strong text-white shadow-lg border border-cyan-500/30"
                    : "text-gray-300 hover:text-white hover:glass-card border border-transparent hover:border-slate-600/30"
                }`}
                style={{
                  backdropFilter: 'blur(10px)',
                  boxShadow: activeSection === item.href.substring(1)
                    ? '0 0 25px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : 'none'
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:glass-card rounded-lg transition-all"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden glass rounded-2xl mt-2 p-4 mx-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
