"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  slug: string
  price: number
  images: string[]
}

interface RelatedProductsProps {
  products: Product[]
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-8">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="relative h-48 w-full">
                <Image
                  src={product.images?.[0] || "/images/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <p className="text-purple-600 font-bold mt-1">
                  ${product.price.toFixed(2)}
                </p>
                <Button variant="outline" className="mt-3 w-full border-purple-300 text-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}