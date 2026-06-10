"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Jessica, Early Adopter", text: "The galaxy book is stunning! My son hasn’t put it down." },
  { name: "Ryan, Dad of 7yo", text: "We love the new eco art set. Great quality and sustainable." },
  { name: "Ms. Garcia, Art Teacher", text: "The desk easel is a game‑changer for home art stations." },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            What Parents Are Saying
          </h2>
          <p className="text-gray-600 mt-2">Real reviews from our community.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md"
            >
              <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
              <p className="text-gray-700 italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-teal-600">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}