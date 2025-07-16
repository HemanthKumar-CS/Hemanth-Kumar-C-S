"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Achievements from "@/components/achievements"
import TechStack from "@/components/tech-stack"
import Resume from "@/components/resume"
import HackathonMap from "@/components/hackathon-map"
import Contact from "@/components/contact"
import LoadingScreen from "@/components/loading-screen"
import BackgroundEffects from "@/components/background-effects"
import CustomCursor from "@/components/custom-cursor"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-black relative overflow-x-hidden">
            <BackgroundEffects />
            <Navbar />

            <main className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Achievements />
              <TechStack />
              <Resume />
              <HackathonMap />
              <Contact />
            </main>

            {/* Background Pattern */}
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
