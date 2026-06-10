"use client"

import { motion } from "framer-motion"

const benefits = [
  "Develops fine motor skills & hand-eye coordination",
  "Boosts problem-solving & spatial thinking",
  "Encourages self-expression and confidence",
  "A relaxing, screen-free activity",
  "Prepares for advanced art techniques",
  "Great for travel, school, and home",
]

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Why Sketching Matters
            </h2>
            <p className="text-gray-600 mb-6">
              Sketching isn't just art – it's a fundamental skill that helps children observe, imagine, and create.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-gray-600 text-xl">✓</span> {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-200 to-gray-100 rounded-3xl shadow-xl flex items-center justify-center">
              <span className="text-8xl">✏️📘</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}