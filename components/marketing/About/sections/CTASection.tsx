"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CTASection = () => {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join the Tulivia Family
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Sign up for our newsletter and get 10% off your first order, plus creative ideas for kids.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/shop">Shop Now →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}