"use client"

import { motion } from "framer-motion"

const team = [
  { name: "Emma Roberts", role: "Co‑Founder & Creative Director", emoji: "👩‍🎨" },
  { name: "James Chen", role: "Co‑Founder & Product Lead", emoji: "👨‍🔬" },
  { name: "Maria Gonzales", role: "Head of Customer Joy", emoji: "👩‍💼" },
]

export const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Meet the Heart Behind Tulivia
          </h2>
          <p className="text-gray-600 mt-2">Passionate parents, artists, and educators.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-7xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-purple-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}