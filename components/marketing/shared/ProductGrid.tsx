"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/stores/cartStore"
import { useCart } from "@/components/providers/CartProvider"

interface Product {
  id: number
  name: string
  slug: string
  price: number
  images: string[]
}

interface ProductGridProps {
  products: Product[]
  title?: string
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  const addItem = useCartStore((state) => state.addItem)
  const { openCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || "/images/placeholder.jpg",
      slug: product.slug,
    })
    openCart()
  }

  if (products.length === 0) {
    return <div className="text-center py-10 text-gray-500">No products found.</div>
  }

  return (
    <section className="py-12">
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">{title}</h2>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <Link href={`/products/${product.slug}`}>
              <div className="relative h-64 w-full">
                <Image
                  src={product.images?.[0] || "/images/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-purple-600 font-bold mt-1">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className="p-4 pt-0">
              <Button
                variant="outline"
                className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}