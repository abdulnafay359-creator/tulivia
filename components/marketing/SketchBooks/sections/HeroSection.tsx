"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-black/5 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mb-4 shadow">
              ✏️ Draw Your Imagination
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
              Sketch, Doodle, <br />
              <span className="text-gray-500">Create Anything</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              Premium sketchbooks for young artists. Smooth pages, durable covers, endless creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gray-800 hover:bg-black text-white">
                Shop Sketchbooks
              </Button>
              <Button size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100">
                Explore Collection
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-white rounded-full animate-pulse-slow"></div>
              <img
                src="https://placehold.co/400x400/4B5563/white?text=Sketchbook"
                alt="Sketchbook"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Hand-drawn squiggles */}
      <div className="absolute top-8 left-10 text-6xl opacity-10 rotate-6">✏️</div>
      <div className="absolute bottom-6 right-8 text-7xl opacity-10 -rotate-12">🖌️</div>
    </section>
  )
}