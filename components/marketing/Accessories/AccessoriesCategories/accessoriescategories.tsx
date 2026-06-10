"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cartStore";
import { useCart } from "@/components/providers/CartProvider";

const categoriesList = [
  { id: "all", name: "All Accessories" },
  { id: "coloring-supplies", name: "Coloring Supplies" },
  { id: "drawing-essentials", name: "Drawing Essentials" },
  { id: "painting-supplies", name: "Painting Supplies" },
  { id: "craft-supplies", name: "Craft Supplies" },
  { id: "creative-extras", name: "Creative Extras" },
];

const accessoriesData = [
  { id: 1, name: "Premium Colored Pencils (24 pack)", price: 12.99, categoryId: "coloring-supplies", image: "/images/colored-pencils.jpg", slug: "premium-colored-pencils" },
  { id: 2, name: "Washable Markers (12 pack)", price: 8.99, categoryId: "coloring-supplies", image: "/images/markers.jpg", slug: "washable-markers" },
  { id: 3, name: "Jumbo Crayons (16 pack)", price: 6.99, categoryId: "coloring-supplies", image: "/images/crayons.jpg", slug: "jumbo-crayons" },
  { id: 4, name: "Gel Pens Set (36 colors)", price: 15.99, categoryId: "coloring-supplies", image: "/images/gel-pens.jpg", slug: "gel-pens-set" },
  { id: 5, name: "Sketching Pencil Set", price: 9.99, categoryId: "drawing-essentials", image: "/images/sketch-pencils.jpg", slug: "sketching-pencil-set" },
  { id: 6, name: "Eraser & Sharpener Set", price: 4.99, categoryId: "drawing-essentials", image: "/images/eraser-set.jpg", slug: "eraser-sharpener-set" },
  { id: 7, name: "Blending Stumps", price: 5.99, categoryId: "drawing-essentials", image: "/images/blending-stumps.jpg", slug: "blending-stumps" },
  { id: 8, name: "Watercolor Paint Set (12 colors)", price: 14.99, categoryId: "painting-supplies", image: "/images/watercolor.jpg", slug: "watercolor-set" },
  { id: 9, name: "Paint Brushes (5 sizes)", price: 7.99, categoryId: "painting-supplies", image: "/images/paint-brushes.jpg", slug: "paint-brushes" },
  { id: 10, name: "Finger Paints (6 pack)", price: 10.99, categoryId: "painting-supplies", image: "/images/finger-paints.jpg", slug: "finger-paints" },
  { id: 11, name: "Safety Scissors for Kids", price: 3.99, categoryId: "craft-supplies", image: "/images/scissors.jpg", slug: "safety-scissors" },
  { id: 12, name: "Glue Stick (3 pack)", price: 2.99, categoryId: "craft-supplies", image: "/images/glue-sticks.jpg", slug: "glue-sticks" },
  { id: 13, name: "Construction Paper (50 sheets)", price: 5.99, categoryId: "craft-supplies", image: "/images/construction-paper.jpg", slug: "construction-paper" },
  { id: 14, name: "Sticker Roll (200+ stickers)", price: 6.99, categoryId: "creative-extras", image: "/images/stickers.jpg", slug: "sticker-roll" },
  { id: 15, name: "Washi Tape Set (10 designs)", price: 7.99, categoryId: "creative-extras", image: "/images/washi-tape.jpg", slug: "washi-tape-set" },
  { id: 16, name: "Glitter Glue Pens (6 pack)", price: 8.99, categoryId: "creative-extras", image: "/images/glitter-glue.jpg", slug: "glitter-glue-pens" },
];

export const AccessoriesCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useCart();

  const filteredProducts = accessoriesData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof accessoriesData[0]) => {
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
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800">Art Accessories Collection</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover the perfect tools to complement your coloring and drawing experience.
            From pencils to paints, we have everything you need.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search accessories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full px-6 py-3 text-gray-700 border-2 border-green-200 focus:border-green-500"
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
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border-green-600 text-green-600 hover:bg-green-50"
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No accessories found matching your criteria.</p>
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
                  <div className="relative h-64 w-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-5xl">
                    🎨
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-green-600 font-bold text-lg">${product.price}</p>
                  </div>
                </Link>
                <div className="p-5 pt-0">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
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