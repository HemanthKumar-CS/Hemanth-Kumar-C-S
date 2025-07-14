"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add mouse move listener
    window.addEventListener("mousemove", updateMousePosition)

    // Force no cursor on document
    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"

    // Function to add hover listeners to all interactive elements
    const addHoverListeners = () => {
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
        "[onclick]",
        "[onmouseenter]",
        "[tabindex]"
      ];
      
      const interactiveElements = document.querySelectorAll(interactiveSelectors.join(", "))
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
        // Force cursor none on these elements
        ;(el as HTMLElement).style.cursor = "none !important"
        el.setAttribute("style", (el.getAttribute("style") || "") + "; cursor: none !important;")
      })

      return interactiveElements
    }

    // Initial setup
    let interactiveElements = addHoverListeners()

    // Re-run when DOM changes (for dynamically added elements)
    const observer = new MutationObserver(() => {
      interactiveElements = addHoverListeners()
      // Re-apply no cursor to document
      document.documentElement.style.cursor = "none"
      document.body.style.cursor = "none"
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Additional safety - check every 100ms for any cursor changes
    const cursorCheck = setInterval(() => {
      if (document.documentElement.style.cursor !== "none") {
        document.documentElement.style.cursor = "none"
      }
      if (document.body.style.cursor !== "none") {
        document.body.style.cursor = "none"
      }
    }, 100)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      observer.disconnect()
      clearInterval(cursorCheck)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ pointerEvents: "none" }}
      />
      
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-emerald-400/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{ pointerEvents: "none" }}
      />
      
      {/* Hover effect ring */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 border border-emerald-400/20 rounded-full pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ pointerEvents: "none" }}
        />
      )}
    </>
  )
}
