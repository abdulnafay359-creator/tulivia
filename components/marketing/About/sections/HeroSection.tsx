"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold text-purple-700 mb-4 shadow">
              ✨ Our Story ✨
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 leading-tight">
              Where Creativity & <br />
              <span className="text-purple-500">Learning Come Alive</span>
            </h1>
            <p className="text-lg text-gray-700 mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              Tulivia was born from a simple idea: every child deserves magical tools to imagine, create, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                <Link href="#contact-form">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                <Link href="#story">Read Our Story</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full animate-float"></div>
              <img
                src="https://placehold.co/400x400/8B5CF6/white?text=Tulivia"
                alt="Tulivia"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-10 left-5 text-5xl opacity-20 rotate-12">📚</div>
      <div className="absolute bottom-6 right-8 text-6xl opacity-20 -rotate-12">🎨</div>
    </section>
  )
}