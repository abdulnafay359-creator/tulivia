"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Linda, Art Teacher", text: "These sketchbooks are a staple in my classroom. The paper quality is fantastic." },
  { name: "Mark, Dad of 9yo", text: "My son fills these up in weeks. He loves the drawing prompts inside!" },
  { name: "Sophia, Young Artist (12)", text: "I use them for anime sketches. They erase really well and don't smudge." },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Loved by Artists & Parents
          </h2>
          <p className="text-gray-600 mt-2">Join thousands of happy sketchers.</p>
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
              <p className="mt-4 font-semibold text-gray-700">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}