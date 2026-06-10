"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-purple-700 mb-4 shadow">
              ✨ Complete the Creative Experience ✨
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
              Perfect <span className="text-purple-500">Accessories</span> for Little Artists
            </h1>
            <p className="text-lg text-gray-700 mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              From colorful markers to sturdy backpacks – everything your child needs to create and explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                Shop Accessories
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                Explore Sets
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full animate-pulse-slow"></div>
              <img
                src="https://placehold.co/400x400/8B5CF6/white?text=Accessories"
                alt="Accessories"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-8 left-6 text-6xl opacity-20 rotate-12">🖌️</div>
      <div className="absolute bottom-4 right-4 text-7xl opacity-20 -rotate-12">📦</div>
    </section>
  )
}