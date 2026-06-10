"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Coloring Books",
  "Sketch Books",
  "Toys",
  "Accessories",
  "New Arrivals",
]

export const FiltersSection = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  return (
    <section className="py-10 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1 text-sm ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border-purple-300 text-purple-700 hover:bg-purple-50"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </motion.div>
      </div>
    </section>
  )
}