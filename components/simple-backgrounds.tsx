"use client"

import { motion } from "framer-motion"

// Pre-computed star positions — avoids hydration mismatch from Math.random() in render
const STARS = Array.from({ length: 80 }, (_, i) => ({
  x: +((i * 13.7 + 11.3) % 100).toFixed(2),
  y: +((i * 17.3 + 23.7) % 100).toFixed(2),
  size: i % 6 === 0 ? 2 : 1,
  opacity: +((i * 0.07) % 0.35 + 0.08).toFixed(2),
  duration: +((i * 1.3) % 4 + 2).toFixed(1),
  delay: +((i * 0.91) % 3).toFixed(1),
}))

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0" style={{ background: "#020817" }} />

      {/* Aurora blob 1 — Cyan (top-left) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "70vw",
          height: "70vw",
          top: "-18vw",
          left: "-18vw",
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.22), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: ["0%", "4%", "-3%", "2%", "0%"],
          y: ["0%", "3%", "-4%", "2%", "0%"],
          scale: [1, 1.04, 0.97, 1.02, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora blob 2 — Indigo/Violet (bottom-right) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "75vw",
          height: "75vw",
          bottom: "-22vw",
          right: "-22vw",
          background:
            "radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.18), transparent 70%)",
          filter: "blur(110px)",
        }}
        animate={{
          x: ["0%", "-5%", "3%", "-2%", "0%"],
          y: ["0%", "-4%", "5%", "-2%", "0%"],
          scale: [1, 0.95, 1.07, 0.98, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Aurora blob 3 — Emerald (center-right) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "50vw",
          height: "50vw",
          top: "28%",
          right: "-8%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.13), transparent 70%)",
          filter: "blur(130px)",
        }}
        animate={{
          x: ["0%", "-7%", "5%", "-3%", "0%"],
          y: ["0%", "7%", "-5%", "3%", "0%"],
          scale: [1, 1.09, 0.94, 1.04, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* Aurora blob 4 — Bright cyan accent (upper-right) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "32vw",
          height: "32vw",
          top: "8%",
          right: "8%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.11), transparent 70%)",
          filter: "blur(65px)",
        }}
        animate={{
          x: ["0%", "9%", "-7%", "4%", "0%"],
          y: ["0%", "-9%", "10%", "-4%", "0%"],
          scale: [1, 1.13, 0.91, 1.07, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle dot grid — gives the technical neuron-net feel */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6, 182, 212, 0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.05,
        }}
      />

      {/* Twinkling stars */}
      {STARS.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2.8, star.opacity * 0.4, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Edge vignette — darkens toward the corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2, 8, 23, 0.55) 100%)",
        }}
      />
    </div>
  )
}
