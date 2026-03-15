"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function NeuralCursor() {
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const rippleCount = useRef(0)

  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)

  // Tight spring — feels responsive, not laggy. Just enough lag to feel smooth.
  const rx = useSpring(mx, { stiffness: 500, damping: 32, mass: 0.5 })
  const ry = useSpring(my, { stiffness: 500, damping: 32, mass: 0.5 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }

    const onDown = (e: MouseEvent) => {
      setClicking(true)
      rippleCount.current += 1
      const id = rippleCount.current
      setRipples(p => [...p.slice(-3), { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 600)
    }
    const onUp = () => setClicking(false)

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select, [data-hover]")
        .forEach(el => {
          el.addEventListener("mouseenter", () => setHovered(true))
          el.addEventListener("mouseleave", () => setHovered(false))
        })
    }
    attachHover()
    const obs = new MutationObserver(attachHover)
    obs.observe(document.body, { childList: true, subtree: true })

    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      obs.disconnect()
    }
  }, [mx, my])

  return (
    <>
      {/* Outer ring — follows with a tight spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: rx, y: ry }}
      >
        <motion.div
          style={{ transform: "translate(-50%, -50%)" }}
          className="rounded-full"
          animate={{
            width:  hovered ? 44 : clicking ? 18 : 28,
            height: hovered ? 44 : clicking ? 18 : 28,
            borderColor: hovered
              ? "rgba(139, 92, 246, 0.9)"
              : clicking
              ? "rgba(139, 92, 246, 0.7)"
              : "rgba(139, 92, 246, 0.5)",
            backgroundColor: hovered ? "rgba(139, 92, 246, 0.06)" : "transparent",
            boxShadow: hovered
              ? "0 0 16px rgba(139, 92, 246, 0.35)"
              : clicking
              ? "0 0 10px rgba(139, 92, 246, 0.3)"
              : "none",
            borderWidth: 1,
            borderStyle: "solid",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      </motion.div>

      {/* Inner dot — snaps instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: mx, y: my }}
      >
        <motion.div
          className="rounded-full bg-white"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{
            width:   hovered ? 0 : clicking ? 3 : 4,
            height:  hovered ? 0 : clicking ? 3 : 4,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 800, damping: 40 }}
        />
      </motion.div>

      {/* Click ripple — subtle, quick */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="fixed pointer-events-none z-[9994] rounded-full"
          initial={{ scale: 0.2, opacity: 0.7 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            left: r.x - 10,
            top:  r.y - 10,
            width: 20,
            height: 20,
            border: "1px solid rgba(139, 92, 246, 0.75)",
          }}
        />
      ))}
    </>
  )
}
