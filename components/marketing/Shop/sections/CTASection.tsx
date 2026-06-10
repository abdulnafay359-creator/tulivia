"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Don’t Miss Out on New Arrivals!
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Subscribe to get 10% off your first order and be the first to know about fresh products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-yellow-500 text-purple-800 hover:bg-yellow-400 font-bold">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}