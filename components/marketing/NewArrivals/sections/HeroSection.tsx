"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-teal-700 mb-4 shadow">
              🔥 Hot Off the Press! 🔥
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
              Discover What’s <span className="text-teal-500">New</span>
            </h1>
            <p className="text-lg text-gray-700 mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              Fresh coloring books, sketch pads, toys, and accessories – just added to Tulivia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Shop New Arrivals
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                View All
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full animate-bounce-slow"></div>
              <img
                src="https://placehold.co/400x400/14B8A6/white?text=NEW"
                alt="New arrivals"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-5 right-8 text-6xl opacity-20 rotate-6">✨</div>
      <div className="absolute bottom-6 left-6 text-7xl opacity-20 -rotate-12">🎁</div>
    </section>
  )
}