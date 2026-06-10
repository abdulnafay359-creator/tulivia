"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const newProducts = [
  { name: "Galaxy Coloring Book", price: 14.99, image: "/images/galaxy-book.jpg", slug: "galaxy-coloring" },
  { name: "Eco Art Set (24 pcs)", price: 19.99, image: "/images/eco-set.jpg", slug: "eco-art-set" },
  { name: "Mindful Kids Journal", price: 12.99, image: "/images/mindful-journal.jpg", slug: "mindful-journal" },
  { name: "Foldable Desk Easel", price: 29.99, image: "/images/easel.jpg", slug: "desk-easel" },
]

export const ProductsGridSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Just Landed 🎉
          </h2>
          <p className="text-gray-600 mt-2">Be the first to try these exciting new products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-teal-600 font-bold mt-1">${product.price}</p>
                <Link href={`/products/${product.slug}`} passHref legacyBehavior>
                  <Button className="mt-3 w-full bg-teal-500 hover:bg-teal-600">Shop Now</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  )
}