"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Search } from "lucide-react"
import { useCart } from "@/components/providers/CartProvider"
import { useCartStore } from "@/lib/stores/cartStore"
import { useEffect, useState } from "react"

export const Header = () => {
  const { openCart } = useCart()
  const itemCount = useCartStore((state) => state.getItemCount())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white shadow-md" style={{ isolation: "isolate" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-heading font-bold text-purple-600">
              Tulivia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Home</Link>
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Shop</Link>
            <Link href="/coloring-books" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Coloring Books</Link>
            <Link href="/sketch-books" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Sketch Books</Link>
            <Link href="/kids-corner" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Kids Corner</Link>
            <Link href="/accessories" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">Accessories</Link>
            <Link href="/new-arrivals" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">New Arrivals</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition whitespace-nowrap">About Us</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-purple-600" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {/* Only show badge after component mounts (client side) */}
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-500 text-[10px] font-bold text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}