"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react"

interface ProductDetailsProps {
  product: {
    id: number
    name: string
    price: number
    description: string
    stock: number
    images: string[]
    category: { name: string } | null
  }
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const mainImage = product.images?.[0] || "/images/placeholder.jpg"

  const handleAddToCart = () => {
    // UI placeholder – Phase C will implement Zustand + DB sync
    alert(`Added ${product.name} to cart (demo). Cart store coming soon.`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-12 mb-20"
    >
      {/* Image gallery (simplified – main image only) */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Product info */}
      <div>
        {product.category && (
          <span className="inline-block text-sm text-purple-600 font-medium mb-2">
            {product.category.name}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-500">(4.8 · 120 reviews)</span>
        </div>
        <p className="text-3xl font-bold text-purple-600 mb-6">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

        {/* Stock status */}
        <div className="mb-6">
          {product.stock > 0 ? (
            <span className="text-green-600 text-sm font-medium">✓ In stock ({product.stock} available)</span>
          ) : (
            <span className="text-red-600 text-sm font-medium">✗ Out of stock</span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white py-6 px-10 text-lg rounded-full shadow-lg"
        >
          Add to Cart
        </Button>

        {/* Shipping info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck className="w-5 h-5 text-purple-500" />
            <span>Free shipping over $25</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheck className="w-5 h-5 text-purple-500" />
            <span>2‑year warranty</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RotateCcw className="w-5 h-5 text-purple-500" />
            <span>30‑day returns</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}