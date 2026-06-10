"use client"

import { motion } from "framer-motion"

const benefits = [
  "Always up‑to‑date with the latest trends",
  "Limited editions – collect them all!",
  "Supports new artists and illustrators",
  "Eco‑friendly packaging on all new items",
  "Free gift with first purchase of new arrivals",
  "Exclusive online launch prices",
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
              Fresh & Exciting
            </h2>
            <p className="text-gray-600 mb-6">
              We constantly refresh our collection to bring you the most engaging, creative products for your child.
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
                  <span className="text-teal-500 text-xl">✓</span> {benefit}
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
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-green-200 to-teal-200 rounded-3xl shadow-xl flex items-center justify-center">
              <span className="text-8xl">🎉✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}