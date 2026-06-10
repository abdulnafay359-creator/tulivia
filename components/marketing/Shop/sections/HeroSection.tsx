"use client"

import { motion } from "framer-motion"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-white/80 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-purple-700 mb-4 shadow">
            🎁 Explore Our Magical Store
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800">
            Shop <span className="text-purple-600">Creative Wonders</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Find the perfect coloring books, sketch pads, toys, and accessories for every young artist.
          </p>
        </motion.div>
      </div>
      {/* Decorative floating stars */}
      <div className="absolute top-5 left-5 text-4xl animate-float">✨</div>
      <div className="absolute bottom-5 right-5 text-5xl animate-float-delayed">🎨</div>
    </section>
  )
}