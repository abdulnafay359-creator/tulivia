"use client"

import { motion } from "framer-motion"

export const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Our <span className="text-purple-500">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="prose prose-lg text-gray-600 mx-auto"
        >
          <p className="mb-4">
            Tulivia started in a small living room, surrounded by coloring books and crayons. As parents and educators,
            we saw how creative tools could transform a child’s confidence and joy.
          </p>
          <p className="mb-4">
            What began as a passion project quickly grew into a community of families, teachers, and young artists who
            believe in the power of imagination. Today, Tulivia brings high‑quality educational products to children
            across the globe.
          </p>
          <p>
            Our name comes from “Tulip” (beauty and growth) and “Via” (pathway) – we’re here to nurture every child’s
            unique creative journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}