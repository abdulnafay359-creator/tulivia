"use client"

import { motion } from "framer-motion"

export const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and empower children through beautifully designed, safe, and educational products that spark
              creativity and a love for learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where every child has access to magical, creative tools that unlock their full potential and bring
              joy to learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}