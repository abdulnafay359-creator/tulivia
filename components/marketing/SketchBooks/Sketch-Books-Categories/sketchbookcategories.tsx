"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const categoriesList = [
  { id: "all", name: "All Categories" },
  { id: "drawing-illustration", name: "Drawing & Illustration" },
  { id: "creativity-imagination", name: "Creativity & Imagination" },
  { id: "school-practice", name: "School & Practice" },
  { id: "skill-development", name: "Skill Development" },
  { id: "educational", name: "Educational Sketchbooks" },
];

const sketchBooksData = [
  { id: 1, name: "Learn to Draw Animals", price: 9.99, categoryId: "drawing-illustration", image: "/images/sketch-animals.jpg", slug: "learn-to-draw-animals" },
  { id: 2, name: "Figure Drawing Basics", price: 12.99, categoryId: "drawing-illustration", image: "/images/figure-drawing.jpg", slug: "figure-drawing-basics" },
  { id: 3, name: "Cartooning for Kids", price: 8.99, categoryId: "drawing-illustration", image: "/images/cartooning.jpg", slug: "cartooning-for-kids" },
  { id: 4, name: "Doodle Mania", price: 7.99, categoryId: "creativity-imagination", image: "/images/doodle.jpg", slug: "doodle-mania" },
  { id: 5, name: "Imagination Station", price: 10.99, categoryId: "creativity-imagination", image: "/images/imagination.jpg", slug: "imagination-station" },
  { id: 6, name: "Creative Sketch Prompts", price: 9.99, categoryId: "creativity-imagination", image: "/images/prompts.jpg", slug: "creative-sketch-prompts" },
  { id: 7, name: "Grid Drawing Practice", price: 6.99, categoryId: "school-practice", image: "/images/grid.jpg", slug: "grid-drawing-practice" },
  { id: 8, name: "Still Life Sketchbook", price: 11.99, categoryId: "school-practice", image: "/images/still-life.jpg", slug: "still-life-sketchbook" },
  { id: 9, name: "Perspective Drawing", price: 13.99, categoryId: "school-practice", image: "/images/perspective.jpg", slug: "perspective-drawing" },
  { id: 10, name: "Shading Techniques", price: 8.99, categoryId: "skill-development", image: "/images/shading.jpg", slug: "shading-techniques" },
  { id: 11, name: "Portrait Drawing", price: 14.99, categoryId: "skill-development", image: "/images/portrait.jpg", slug: "portrait-drawing" },
  { id: 12, name: "Science Sketchbook", price: 10.99, categoryId: "educational", image: "/images/science-sketch.jpg", slug: "science-sketchbook" },
  { id: 13, name: "Nature Journal", price: 9.99, categoryId: "educational", image: "/images/nature-journal.jpg", slug: "nature-journal" },
];

export const SketchBookCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const filteredProducts = sketchBooksData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof sketchBooksData[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/images/placeholder.jpg",
      slug: product.slug,
    });
    openCart();
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-400/10 to-rose-300/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" strokeLinecap="round" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Sketch Books</h1>
          </div>
          <p className="text-lg text-slate-400 max-w-xl mx-auto font-light">Curated collections to inspire every stroke of your pencil.</p>
        </motion.div>

        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 pl-12 pr-4 py-3 transition-all duration-300"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant="ghost"
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {cat.name}
              </Button>
            );
          })}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl mb-6">🎨</motion.div>
            <p className="text-xl text-slate-400">No sketchbooks found.</p>
            <p className="text-slate-500 mt-2">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/products/${product.slug}`} className="block h-full">
                  <div className="h-full bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                    <div className="relative h-52 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="text-6xl opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500">✏️</div>
                      <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                        ${product.price}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};