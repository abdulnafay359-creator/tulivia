"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

// Category data (unchanged)
const categoriesList = [
  { id: "all", name: "All Categories" },
  { id: "animals-nature", name: "Animals & Nature" },
  { id: "fantasy-magical", name: "Fantasy & Magical" },
  { id: "vehicles-machines", name: "Vehicles & Machines" },
  { id: "space-science", name: "Space & Science" },
  { id: "everyday-life", name: "Everyday Life" },
  { id: "creative-activity", name: "Creative & Activity Books" },
  { id: "cultural-travel", name: "Cultural & Travel Themes" },
  { id: "princess", name: "Princess Book" },
];

// Mock product data (same as yours)
const coloringBooksData = [
  { id: 1, name: "Jungle Safari", price: 12.99, categoryId: "animals-nature", image: "/images/jungle.jpg", slug: "jungle-safari" },
  { id: 2, name: "Ocean Wonders", price: 11.99, categoryId: "animals-nature", image: "/images/ocean.jpg", slug: "ocean-wonders" },
  { id: 3, name: "Farm Friends", price: 10.99, categoryId: "animals-nature", image: "/images/farm.jpg", slug: "farm-friends" },
  { id: 4, name: "Magical Unicorn", price: 14.99, categoryId: "fantasy-magical", image: "/images/unicorn.jpg", slug: "magical-unicorn" },
  { id: 5, name: "Fairy Tale Castle", price: 13.99, categoryId: "fantasy-magical", image: "/images/fairy.jpg", slug: "fairy-tale-castle" },
  { id: 6, name: "Dragon World", price: 15.99, categoryId: "fantasy-magical", image: "/images/dragon.jpg", slug: "dragon-world" },
  { id: 7, name: "Dino Adventure", price: 14.99, categoryId: "vehicles-machines", image: "/images/dino.jpg", slug: "dino-adventure" },
  { id: 8, name: "Construction Trucks", price: 12.99, categoryId: "vehicles-machines", image: "/images/trucks.jpg", slug: "construction-trucks" },
  { id: 9, name: "Race Cars", price: 11.99, categoryId: "vehicles-machines", image: "/images/racecars.jpg", slug: "race-cars" },
  { id: 10, name: "Space Explorers", price: 13.99, categoryId: "space-science", image: "/images/space.jpg", slug: "space-explorers" },
  { id: 11, name: "Solar System", price: 12.99, categoryId: "space-science", image: "/images/solarsystem.jpg", slug: "solar-system" },
  { id: 12, name: "My Day at School", price: 9.99, categoryId: "everyday-life", image: "/images/school.jpg", slug: "my-day-at-school" },
  { id: 13, name: "Happy Home", price: 10.99, categoryId: "everyday-life", image: "/images/home.jpg", slug: "happy-home" },
  { id: 14, name: "Maze Challenge", price: 11.99, categoryId: "creative-activity", image: "/images/maze.jpg", slug: "maze-challenge" },
  { id: 15, name: "Dot to Dot", price: 9.99, categoryId: "creative-activity", image: "/images/dot.jpg", slug: "dot-to-dot" },
  { id: 16, name: "Around the World", price: 14.99, categoryId: "cultural-travel", image: "/images/world.jpg", slug: "around-the-world" },
  { id: 17, name: "Princess Palace", price: 13.99, categoryId: "princess", image: "/images/princess.jpg", slug: "princess-palace" },
  { id: 18, name: "Royal Ball", price: 12.99, categoryId: "princess", image: "/images/ball.jpg", slug: "royal-ball" },
];

export const ColoringBookCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const filteredProducts = coloringBooksData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof coloringBooksData[0]) => {
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
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800">
            Coloring Books Collection
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Browse all our coloring books by category. Find the perfect theme for your child's imagination.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search by book title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full px-6 py-3 text-gray-700 border-2 border-purple-200 focus:border-purple-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoriesList.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={`rounded-full px-6 ${
                selectedCategory === cat.id
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "border-purple-600 text-purple-600 hover:bg-purple-50"
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No coloring books found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-64 w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl">
                    📖
                    {/* Replace with Image component when you have real images */}
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-purple-600 font-bold text-lg">${product.price}</p>
                  </div>
                </Link>
                <div className="p-5 pt-0">
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
        )}
      </div>
    </section>
  );
};