"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">
        {/* Advanced loading animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 border-4 border-transparent border-t-emerald-400 border-r-blue-400 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-2 border-4 border-transparent border-b-violet-400 border-l-amber-400 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-6 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Hemanth Kumar C S
          </h1>
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mx-auto"
            style={{ maxWidth: "200px" }}
          />
          <p className="text-gray-400 font-medium">Crafting Intelligent Solutions</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
