"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Emily, Mom of 5yo", text: "My daughter spends hours coloring these beautiful pages. So much better than screen time!" },
  { name: "James, Teacher", text: "I use these in my classroom. The kids love them and the quality is outstanding." },
  { name: "Sarah, Grandma", text: "Perfect gift for my grandchildren. They light up every time I bring a new one." },
]

export const TestimonialsSection = () => {
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
            What Parents & Teachers Say
          </h2>
          <p className="text-gray-600 mt-2">Join thousands of happy families.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-2xl p-6 text-center shadow-md"
            >
              <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
              <p className="text-gray-700 italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-purple-600">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}