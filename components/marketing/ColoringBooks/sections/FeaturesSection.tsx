"use client"

import { motion } from "framer-motion"

const features = [
  { emoji: "🖍️", title: "Thick & Bold Lines", desc: "Easy for little hands to color inside" },
  { emoji: "🌟", title: "High-Quality Paper", desc: "No bleeding, perfect for markers" },
  { emoji: "🧩", title: "Educational Themes", desc: "Letters, numbers, animals & more" },
  { emoji: "🎁", title: "Great Gift Idea", desc: "Packaged beautifully for any occasion" },
]

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Why Kids <span className="text-purple-600">❤️</span> Our Coloring Books
          </h2>
          <p className="text-gray-600 mt-2">Designed with love, creativity, and learning in mind.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-3">{f.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-gray-500 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}