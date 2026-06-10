"use client"

import { motion } from "framer-motion"

const features = [
  { emoji: "🧩", title: "Educational & Fun", desc: "Games that teach math, reading, and logic." },
  { emoji: "🎭", title: "Imaginative Play", desc: "Role-playing sets and dress-up costumes." },
  { emoji: "🔬", title: "STEM Learning", desc: "Science kits and building challenges." },
  { emoji: "🎨", title: "Creative Arts", desc: "Craft supplies and art projects for all ages." },
]

export const FeaturesSection = () => {
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
            Why Parents <span className="text-yellow-500">❤️</span> Kids Corner
          </h2>
          <p className="text-gray-600 mt-2">Every product is designed to inspire and educate.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-yellow-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-3">{f.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}