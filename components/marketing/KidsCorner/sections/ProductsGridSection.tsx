"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const products = [
  { id: 1, name: "Wooden Building Blocks", price: 29.99, image: "/images/blocks.jpg", slug: "wooden-blocks" },
  { id: 2, name: "Science Lab Kit", price: 34.99, image: "/images/science-kit.jpg", slug: "science-lab" },
  { id: 3, name: "Art & Craft Set", price: 24.99, image: "/images/craft-set.jpg", slug: "art-craft" },
  { id: 4, name: "Puzzle Mat", price: 19.99, image: "/images/puzzle-mat.jpg", slug: "puzzle-mat" },
];

export const ProductsGridSection = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    openCart();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Top Picks for Kids
          </h2>
          <p className="text-gray-600 mt-2">Highly rated by families and teachers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
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
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-yellow-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/kids-corner/categories">
            <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
              View All Activities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};