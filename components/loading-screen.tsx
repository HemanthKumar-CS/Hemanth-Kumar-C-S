"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BOOT_LINES = [
  { text: "> NEURAL_PORTFOLIO_OS", tag: "v2.0.0", delay: 180 },
  { text: "> Loading deep_learning_modules", ok: true, delay: 620 },
  { text: "> Initializing computer_vision", ok: true, delay: 1000 },
  { text: "> Connecting HAL.internship_sys", ok: true, delay: 1360 },
  { text: "> Verifying IEEE.publications", ok: true, delay: 1680 },
]

export default function LoadingScreen() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)
  const [showReady, setShowReady] = useState(false)
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay))
    })

    // Animate progress bar after last line
    timers.push(
      setTimeout(() => {
        let p = 0
        const interval = setInterval(() => {
          p += 1.8
          setProgress(Math.min(Math.round(p), 100))
          if (p >= 100) clearInterval(interval)
        }, 14)
      }, 1820)
    )

    // Name reveal with glitch
    timers.push(setTimeout(() => setShowName(true), 2180))
    timers.push(setTimeout(() => setGlitch(true), 2380))
    timers.push(setTimeout(() => setGlitch(false), 2520))
    timers.push(setTimeout(() => setGlitch(true), 2620))
    timers.push(setTimeout(() => setGlitch(false), 2720))

    // System ready
    timers.push(setTimeout(() => setShowReady(true), 2780))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#020817" }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
          zIndex: 2,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.25,
          zIndex: 1,
        }}
      />

      <div className="relative z-10 w-full max-w-xl mx-auto px-6">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(2, 12, 32, 0.96)",
            border: "1px solid rgba(6, 182, 212, 0.28)",
            boxShadow:
              "0 0 50px rgba(6, 182, 212, 0.12), 0 0 100px rgba(6, 182, 212, 0.05), 0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b"
            style={{
              borderColor: "rgba(6, 182, 212, 0.18)",
              background: "rgba(6, 182, 212, 0.04)",
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <span
              className="ml-3 text-xs font-mono"
              style={{ color: "rgba(6, 182, 212, 0.5)" }}
            >
              ~/neural-portfolio — bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-sm min-h-[200px]">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-1.5 flex items-center gap-1.5"
              >
                <span style={{ color: "rgba(6, 182, 212, 0.85)" }}>{line.text}</span>
                {"tag" in line && line.tag && (
                  <span className="text-white/50">{line.tag}</span>
                )}
                {"ok" in line && line.ok && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.22 }}
                    className="ml-auto"
                    style={{ color: "rgba(16, 185, 129, 0.9)" }}
                  >
                    ····· OK
                  </motion.span>
                )}
              </motion.div>
            ))}

            {/* Progress bar */}
            {visibleLines >= BOOT_LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span style={{ color: "rgba(6, 182, 212, 0.5)", fontSize: "11px" }}>
                    INITIALIZING
                  </span>
                  <span
                    style={{ color: "rgba(6, 182, 212, 0.8)", fontSize: "11px" }}
                  >
                    {progress}%
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(6, 182, 212, 0.12)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background:
                        "linear-gradient(90deg, rgba(6,182,212,0.85), rgba(16,185,129,0.85))",
                      boxShadow: "0 0 12px rgba(6, 182, 212, 0.6)",
                      transition: "width 0.05s linear",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Blinking cursor */}
            {visibleLines < BOOT_LINES.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity }}
                style={{ color: "rgba(6, 182, 212, 0.85)" }}
              >
                █
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Name reveal */}
        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <h1
                className="text-4xl md:text-5xl font-bold font-orbitron tracking-wider"
                style={{
                  color: "white",
                  textShadow: glitch
                    ? "3px 0 rgba(6,182,212,0.9), -3px 0 rgba(239,68,68,0.7), 0 0 20px rgba(6,182,212,0.5)"
                    : "0 0 25px rgba(6,182,212,0.45), 0 0 50px rgba(6,182,212,0.2)",
                  letterSpacing: "0.06em",
                  transition: glitch ? "none" : "text-shadow 0.15s ease",
                  transform: glitch ? "translateX(2px)" : "none",
                }}
              >
                HEMANTH KUMAR C S
              </h1>

              <AnimatePresence>
                {showReady && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.7, 1] }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 font-mono text-sm tracking-widest"
                    style={{ color: "rgba(16, 185, 129, 0.9)" }}
                  >
                    {"> SYSTEM READY_"}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
