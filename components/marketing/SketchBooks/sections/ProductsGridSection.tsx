"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const sketchBooks = [
  { id: 1, name: "Learn to Draw Animals", price: 9.99, slug: "learn-to-draw-animals", image: "/images/sketch-animals.jpg" },
  { id: 2, name: "Figure Drawing Basics", price: 12.99, slug: "figure-drawing-basics", image: "/images/figure-drawing.jpg" },
  { id: 3, name: "Cartooning for Kids", price: 8.99, slug: "cartooning-for-kids", image: "/images/cartooning.jpg" },
  { id: 4, name: "Doodle Mania", price: 7.99, slug: "doodle-mania", image: "/images/doodle.jpg" },
];

export const ProductsGridSection = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const handleAddToCart = (product: typeof sketchBooks[0]) => {
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
            Best Selling Sketchbooks
          </h2>
          <p className="text-gray-600 mt-2">High quality, affordable, and built to last.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sketchBooks.map((product, idx) => (
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
                  <p className="text-gray-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gray-800 hover:bg-black text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100">
            View All Sketchbooks
          </Button>
        </div>
      </div>
    </section>
  );
};