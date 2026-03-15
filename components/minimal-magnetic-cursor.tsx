"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const TRAIL = 10

export default function NeuralCursor() {
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const rippleCount = useRef(0)

  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)

  // Ring follows the cursor with a spring lag — gives it that "intelligence" feel
  const rx = useSpring(mx, { stiffness: 150, damping: 18 })
  const ry = useSpring(my, { stiffness: 150, damping: 18 })

  useEffect(() => {
    const trail: { x: number; y: number }[] = Array.from({ length: TRAIL }, () => ({
      x: -300,
      y: -300,
    }))
    let curX = -300
    let curY = -300
    let rafId: number

    // Direct DOM manipulation for trail — avoids React re-renders every animation frame
    const dots = Array.from({ length: TRAIL }, (_, i) => {
      const el = document.createElement("div")
      const size = Math.max(1.5, 5.5 - i * 0.4)
      el.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9986;
        width: ${size}px;
        height: ${size}px;
        background: rgba(6, 182, 212, ${(1 - i / TRAIL) * 0.65});
        box-shadow: 0 0 ${4 - i * 0.3}px rgba(6, 182, 212, 0.5);
        will-change: transform;
        transform: translate(-300px, -300px);
      `
      document.body.appendChild(el)
      return el
    })

    const onMove = (e: MouseEvent) => {
      curX = e.clientX
      curY = e.clientY
      mx.set(curX)
      my.set(curY)
    }

    const tick = () => {
      for (let i = trail.length - 1; i > 0; i--) trail[i] = trail[i - 1]
      trail[0] = { x: curX, y: curY }
      dots.forEach((el, i) => {
        const { x, y } = trail[i] ?? trail[0]
        const s = Math.max(1.5, 5.5 - i * 0.4)
        el.style.transform = `translate(${x - s / 2}px, ${y - s / 2}px)`
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const onDown = (e: MouseEvent) => {
      setClicking(true)
      rippleCount.current += 1
      const id = rippleCount.current
      setRipples(p => [...p.slice(-4), { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 700)
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
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      obs.disconnect()
      dots.forEach(el => el.remove())
    }
  }, [mx, my])

  return (
    <>
      {/* Outer ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: rx, y: ry }}
      >
        <div style={{ transform: "translate(-50%, -50%)", position: "relative" }}>
          <motion.div
            className="rounded-full"
            animate={{
              width: hovered ? 46 : clicking ? 16 : 30,
              height: hovered ? 46 : clicking ? 16 : 30,
              borderColor: hovered
                ? "rgba(6, 182, 212, 0.95)"
                : clicking
                ? "rgba(6, 182, 212, 0.8)"
                : "rgba(6, 182, 212, 0.45)",
              backgroundColor: hovered ? "rgba(6, 182, 212, 0.07)" : "transparent",
              boxShadow: hovered
                ? "0 0 22px rgba(6, 182, 212, 0.55), inset 0 0 14px rgba(6, 182, 212, 0.08)"
                : clicking
                ? "0 0 14px rgba(6, 182, 212, 0.45)"
                : "0 0 8px rgba(6, 182, 212, 0.22)",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
          />

          {/* AI recognition corner brackets — appear on hover to show "scanning" */}
          {hovered && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: -7,
                  left: -7,
                  width: 11,
                  height: 11,
                  borderTop: "2px solid rgb(6, 182, 212)",
                  borderLeft: "2px solid rgb(6, 182, 212)",
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: -7,
                  right: -7,
                  width: 11,
                  height: 11,
                  borderTop: "2px solid rgb(6, 182, 212)",
                  borderRight: "2px solid rgb(6, 182, 212)",
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  bottom: -7,
                  left: -7,
                  width: 11,
                  height: 11,
                  borderBottom: "2px solid rgb(6, 182, 212)",
                  borderLeft: "2px solid rgb(6, 182, 212)",
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  bottom: -7,
                  right: -7,
                  width: 11,
                  height: 11,
                  borderBottom: "2px solid rgb(6, 182, 212)",
                  borderRight: "2px solid rgb(6, 182, 212)",
                }}
              />
            </>
          )}
        </div>
      </motion.div>

      {/* Inner dot — snaps instantly to cursor position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: mx, y: my }}
      >
        <motion.div
          className="rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{
            width: hovered ? 0 : clicking ? 3 : 5,
            height: hovered ? 0 : clicking ? 3 : 5,
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)",
            opacity: hovered ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 800, damping: 35 }}
        />
      </motion.div>

      {/* Click ripple waves */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="fixed pointer-events-none z-[9994] rounded-full"
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            left: r.x - 10,
            top: r.y - 10,
            width: 20,
            height: 20,
            border: "1.5px solid rgba(6, 182, 212, 0.85)",
          }}
        />
      ))}
    </>
  )
}
