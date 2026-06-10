"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const coloringBooks = [
  { id: 1, name: "Magical Unicorn Coloring Book", price: 12.99, slug: "magical-unicorn", image: "/images/unicorn.jpg" },
  { id: 2, name: "Dino Adventure Coloring Book", price: 14.99, slug: "dino-adventure", image: "/images/dino.jpg" },
  { id: 3, name: "Cute World Kids Coloring Book", price: 11.99, slug: "cute-world", image: "/images/cute-world.jpg" },
  { id: 4, name: "Space Explorers", price: 13.99, slug: "space-explorers", image: "/images/space.jpg" },
];

export const ProductsGridSection = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const handleAddToCart = (product: typeof coloringBooks[0]) => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Our Best-Selling Coloring Books
          </h2>
          <p className="text-gray-600 mt-2">Fun, creative, and screen-free entertainment.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coloringBooks.map((product, idx) => (
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
                  <p className="text-purple-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            View All Coloring Books
          </Button>
        </div>
      </div>
    </section>
  );
};