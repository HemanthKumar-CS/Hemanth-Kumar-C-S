"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MinimalMagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [magneticTarget, setMagneticTarget] = useState<{ x: number; y: number } | null>(null)
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      
      // Check for magnetic elements
      const magneticElements = document.querySelectorAll('[data-magnetic]')
      let foundMagnetic = null
      
      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(newPosition.x - centerX, 2) + Math.pow(newPosition.y - centerY, 2)
        )
        
        if (distance < 80) { // Magnetic field radius
          const strength = Math.max(0, (80 - distance) / 80) * 0.5 // Gentle pull
          foundMagnetic = { 
            x: centerX + (newPosition.x - centerX) * (1 - strength), 
            y: centerY + (newPosition.y - centerY) * (1 - strength)
          }
        }
      })
      
      setMagneticTarget(foundMagnetic)
      setTargetPosition(foundMagnetic || newPosition)
      
      // Update trail with delay
      setTimeout(() => setTrailPosition(newPosition), 50)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add mouse listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Force no cursor
    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"

    // Add hover listeners and magnetic attributes
    const addInteractiveEffects = () => {
      const interactiveSelectors = [
        "button",
        "a",
        "input",
        "textarea",
        "select",
        "[role='button']",
        "[role='link']",
        "[role='tab']",
        ".cursor-pointer",
        "[onclick]"
      ];
      
      const elements = document.querySelectorAll(interactiveSelectors.join(", "))
      
      elements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
        el.setAttribute("data-magnetic", "true")
        ;(el as HTMLElement).style.cursor = "none !important"
      })

      return elements
    }

    let interactiveElements = addInteractiveEffects()

    const observer = new MutationObserver(() => {
      interactiveElements = addInteractiveEffects()
      document.documentElement.style.cursor = "none"
      document.body.style.cursor = "none"
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main cursor dot - minimal and clean */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: targetPosition.x - 3,
          y: targetPosition.y - 3,
        }}
        transition={{ 
          type: "spring", 
          stiffness: magneticTarget ? 300 : 600, 
          damping: magneticTarget ? 25 : 30 
        }}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 2.5 : 1,
            opacity: isClicking ? 0.7 : 1,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 20 
          }}
          style={{ 
            pointerEvents: "none",
            mixBlendMode: "difference"
          }}
        />
      </motion.div>
      
      {/* Subtle ring on hover - minimal */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          animate={{
            x: targetPosition.x - 12,
            y: targetPosition.y - 12,
            opacity: 1, 
            scale: 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <motion.div
            className="w-6 h-6 border border-white/20 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}

      {/* Magnetic field indicator - very subtle */}
      {magneticTarget && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          initial={{ opacity: 0 }}
          animate={{ 
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            opacity: 0.15
          }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="w-10 h-10 border border-white/30 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}

      {/* Click ripple effect - minimal */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          initial={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: 0,
            opacity: 0.6,
          }}
          animate={{
            scale: 3,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <div className="w-4 h-4 border border-white/40 rounded-full" />
        </motion.div>
      )}
    </>
  )
}
