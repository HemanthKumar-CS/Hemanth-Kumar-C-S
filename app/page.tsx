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
import MinimalMagneticCursor from "@/components/minimal-magnetic-cursor"
import GradientParticleBackground from "@/components/simple-backgrounds"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <MinimalMagneticCursor />
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
            <GradientParticleBackground />
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
