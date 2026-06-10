"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const categoriesList = [
  { id: "all", name: "All Activities" },
  { id: "arts-crafts", name: "Arts & Crafts" },
  { id: "educational-fun", name: "Educational Fun" },
  { id: "reading-storytelling", name: "Reading & Storytelling" },
  { id: "printables-downloads", name: "Printables & Downloads" },
  { id: "gift-bundles", name: "Gift & Bundle Collections" },
];

const kidsCornerData = [
  { id: 1, name: "DIY Paper Crafts Kit", price: 14.99, categoryId: "arts-crafts", slug: "diy-paper-crafts", image: "/images/paper-crafts.jpg" },
  { id: 2, name: "Friendship Bracelet Kit", price: 9.99, categoryId: "arts-crafts", slug: "friendship-bracelet-kit", image: "/images/bracelet-kit.jpg" },
  { id: 3, name: "Origami Paper Pack", price: 5.99, categoryId: "arts-crafts", slug: "origami-paper-pack", image: "/images/origami.jpg" },
  { id: 4, name: "Math Puzzles for Kids", price: 7.99, categoryId: "educational-fun", slug: "math-puzzles", image: "/images/math-puzzles.jpg" },
  { id: 5, name: "Science Experiment Kit", price: 19.99, categoryId: "educational-fun", slug: "science-experiment-kit", image: "/images/science-kit.jpg" },
  { id: 6, name: "World Map Activity Poster", price: 8.99, categoryId: "educational-fun", slug: "world-map-poster", image: "/images/map-poster.jpg" },
  { id: 7, name: "My First Story Journal", price: 10.99, categoryId: "reading-storytelling", slug: "story-journal", image: "/images/story-journal.jpg" },
  { id: 8, name: "Picture Book: The Magical Forest", price: 12.99, categoryId: "reading-storytelling", slug: "magical-forest-book", image: "/images/magical-forest.jpg" },
  { id: 9, name: "Story Cubes (9 dice)", price: 11.99, categoryId: "reading-storytelling", slug: "story-cubes", image: "/images/story-cubes.jpg" },
  { id: 10, name: "Alphabet Tracing Worksheets (PDF)", price: 3.99, categoryId: "printables-downloads", slug: "alphabet-worksheets", image: "/images/worksheets.jpg" },
  { id: 11, name: "Animal Coloring Pages Bundle", price: 4.99, categoryId: "printables-downloads", slug: "animal-coloring-pages", image: "/images/animal-pages.jpg" },
  { id: 12, name: "Art Starter Bundle (Book + Crayons)", price: 24.99, categoryId: "gift-bundles", slug: "art-starter-bundle", image: "/images/art-bundle.jpg" },
  { id: 13, name: "Summer Activity Box", price: 29.99, categoryId: "gift-bundles", slug: "summer-activity-box", image: "/images/summer-box.jpg" },
];

export const KidsCornerCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const filteredProducts = kidsCornerData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof kidsCornerData[0]) => {
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
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800">
            Kids Corner Activities
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Fun, educational, and creative activities for children of all ages.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full px-6 py-3 text-gray-700 border-2 border-yellow-200 focus:border-yellow-500"
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
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "border-yellow-600 text-yellow-600 hover:bg-yellow-50"
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No activities found matching your criteria.</p>
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
                  <div className="relative h-64 w-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center text-5xl">
                    🧸
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-yellow-600 font-bold text-lg">${product.price}</p>
                  </div>
                </Link>
                <div className="p-5 pt-0">
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
        )}
      </div>
    </section>
  );
};