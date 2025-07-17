"use client"

import { motion } from "framer-motion"

// Gradient with Particles Background
export default function GradientParticleBackground() {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(6,182,212,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(6,182,212,0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
          className="w-full h-full"
        />
      </div>
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
