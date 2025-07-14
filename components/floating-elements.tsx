"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/20 rounded-full"
      />

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/3 w-1 h-1 bg-violet-400/30 rounded-full"
      />

      {/* Floating lines */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/3 right-1/2 w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
      />
    </div>
  )
}
