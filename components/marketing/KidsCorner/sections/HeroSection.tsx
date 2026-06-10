"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-300 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-yellow-700 mb-4 shadow">
              🎈 Welcome to Kids Corner!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
              Play, Learn, <br />
              <span className="text-yellow-600">Grow Every Day</span>
            </h1>
            <p className="text-lg text-gray-700 mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              Fun toys, activity kits, and learning resources that spark curiosity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Explore Activities
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-100">
                Shop Kids Products
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full animate-bounce-slow"></div>
              <img
                src="https://placehold.co/400x400/FBBF24/white?text=Kids+Fun"
                alt="Kids playing"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Floating emojis */}
      <div className="absolute top-5 left-5 text-5xl animate-float">🧸</div>
      <div className="absolute bottom-8 right-6 text-6xl animate-float-delayed">🎨</div>
    </section>
  )
}