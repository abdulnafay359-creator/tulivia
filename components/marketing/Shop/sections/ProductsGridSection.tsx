"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const allProducts = [
  { id: 1, name: "Magical Unicorn Coloring Book", price: 12.99, image: "/images/unicorn.jpg", slug: "magical-unicorn", isNew: true },
  { id: 2, name: "Dino Adventure Coloring Book", price: 14.99, image: "/images/dino.jpg", slug: "dino-adventure", isNew: false },
  { id: 3, name: "A5 Spiral Sketchbook", price: 9.99, image: "/images/sketch-a5.jpg", slug: "a5-spiral", isNew: false },
  { id: 4, name: "Hardcover Artist Pad", price: 14.99, image: "/images/sketch-hardcover.jpg", slug: "hardcover-pad", isNew: false },
  { id: 5, name: "Wooden Building Blocks", price: 29.99, image: "/images/blocks.jpg", slug: "wooden-blocks", isNew: true },
  { id: 6, name: "Kids Art Smock", price: 14.99, image: "/images/smock.jpg", slug: "art-smock", isNew: false },
  { id: 7, name: "Watercolor Palette", price: 9.99, image: "/images/watercolor.jpg", slug: "watercolor-palette", isNew: false },
  { id: 8, name: "Foldable Desk Easel", price: 29.99, image: "/images/easel.jpg", slug: "desk-easel", isNew: true },
  { id: 9, name: "Cute World Kids Coloring Book", price: 11.99, image: "/images/cute-world.jpg", slug: "cute-world", isNew: false },
  { id: 10, name: "Anime Sketch Book A5", price: 12.50, image: "/images/anime-sketch.jpg", slug: "anime-sketch", isNew: false },
];

export const ProductsGridSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Our Products
          </h2>
          <p className="text-gray-600 mt-2">Explore our magical collection.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-purple-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Link href={`/products/${product.slug}`} className="block w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" className="border-purple-300 text-purple-700">Previous</Button>
            <Button className="bg-purple-600 text-white">1</Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">2</Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">3</Button>
            <Button variant="outline" className="border-purple-300 text-purple-700">Next</Button>
          </div>
        </div>
      </div>
    </section>
  );
};