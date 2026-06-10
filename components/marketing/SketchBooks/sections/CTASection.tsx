"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CTASection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Sketch Your Ideas?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Get the perfect sketchbook for your young artist. Free shipping on orders over $25.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
            <Link href="/shop">Shop Sketchbooks →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}