"use client"

import { motion } from "framer-motion"

const values = [
  { emoji: "🧒", title: "Child‑First Design", desc: "Every product is tested by real kids." },
  { emoji: "🌱", title: "Eco‑Conscious", desc: "Sustainable materials and packaging." },
  { emoji: "🤝", title: "Community Love", desc: "We give back to schools and nonprofits." },
  { emoji: "🎨", title: "Endless Creativity", desc: "We never stop inventing new ideas." },
]

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            What We Stand For
          </h2>
          <p className="text-gray-600 mt-2">Our guiding principles.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-3">{v.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{v.title}</h3>
              <p className="text-gray-600 mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}