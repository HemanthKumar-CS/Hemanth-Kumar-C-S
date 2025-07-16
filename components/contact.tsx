"use client"

import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Contact() {
  const handleEmailClick = () => {
    // Open Gmail compose window with email pre-filled
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hemanthreads@gmail.com&su=Project%20Collaboration", "_blank")
  }
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative AI/ML projects? Let&apos;s connect and build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Let&apos;s Connect</h3>
            
            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-4 p-6 glass rounded-xl hover:glass-strong transition-all cursor-pointer group"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-slate-600 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all">
                  <FiMail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Email Me</h4>
                  <p className="text-gray-400">hemanthreads@gmail.com</p>
                  <p className="text-blue-400 text-sm mt-2">Click to open Gmail</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-4 p-6 glass rounded-xl"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600">
                  <FiPhone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Call Me</h4>
                  <p className="text-gray-400">+91 8884862170</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-4 p-6 glass rounded-xl"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-slate-500 to-gray-600">
                  <FiMapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Location</h4>
                  <p className="text-gray-400">Mysuru, Karnataka, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/HemanthKumar-CS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 transition-all hover:shadow-lg"
              >
                <FiGithub size={28} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/hemanth-kumar-c-s-954792283"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/25"
              >
                <FiLinkedin size={28} />
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEmailClick}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/25 cursor-pointer"
              >
                <FiMail size={28} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-slate-600/10 rounded-xl border border-slate-500/20"
            >
              <p className="text-gray-300 text-lg">
                🚀 Looking for a passionate AI/ML developer for your next project?
              </p>
              <p className="text-gray-400 mt-2">
                Let&apos;s discuss how we can build innovative solutions together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
