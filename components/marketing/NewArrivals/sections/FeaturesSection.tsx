"use client"

import { motion } from "framer-motion"

const features = [
  { emoji: "🌟", title: "Brand New Designs", desc: "Never seen before illustrations and themes." },
  { emoji: "🧪", title: "Trending Educational", desc: "Based on latest child development research." },
  { emoji: "🎁", title: "Limited Stock", desc: "Grab them before they fly off the shelves." },
  { emoji: "💡", title: "Inspired by Kids", desc: "Created with feedback from our young customers." },
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
            Why You’ll Love Our New Arrivals
          </h2>
          <p className="text-gray-600 mt-2">Fresh, fun, and thoughtfully made.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-teal-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
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