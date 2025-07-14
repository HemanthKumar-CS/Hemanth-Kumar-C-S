"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiMessageCircle } from "react-icons/fi"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const chatbotQuestions = [
    {
      q: "Tell me about your top project",
      a: "My top project is StreeRaksha, an AI-powered women's safety platform with real-time threat detection achieving 95% accuracy.",
    },
    {
      q: "What tools do you love?",
      a: "I love working with Python, TensorFlow, OpenCV for AI/ML, and Flask for web development. I'm also passionate about cybersecurity tools like Kali Linux.",
    },
    {
      q: "What's your experience?",
      a: "I'm a Media Head at IET ATMECE, former Cybersecurity Intern at Academor, and have won multiple hackathons including MIT Mysuru's Invaders Hackathon.",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative AI/ML projects? Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <FiMail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">hemanthreads@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600">
                  <FiPhone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 8884862170</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                  <FiMapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Karnataka, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/HemanthKumar-CS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/hemanth-kumar-c-s-954792283"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:hemanthreads@gmail.com"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or collaboration idea..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating Chatbot */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-8 right-8 z-40">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowChatbot(!showChatbot)}
            className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <FiMessageCircle size={24} />
          </motion.button>

          {showChatbot && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-16 right-0 w-80 bg-gray-900 rounded-xl border border-purple-500/20 p-4 shadow-xl"
            >
              <h4 className="text-white font-semibold mb-4">Quick Questions</h4>
              <div className="space-y-2">
                {chatbotQuestions.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => alert(item.a)}
                    className="w-full text-left p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all text-sm"
                  >
                    {item.q}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
