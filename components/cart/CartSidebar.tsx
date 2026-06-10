"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/stores/cartStore"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CartSidebar = ({ open, onOpenChange }: CartSidebarProps) => {
  const { items, removeItem, updateQuantity, getTotalPrice, getItemCount } = useCartStore()
  const total = getTotalPrice()
  const itemCount = getItemCount()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleCheckoutClick = () => {
    onOpenChange(false) // close sidebar before navigation
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[200]"
            onClick={() => onOpenChange(false)}
          />

          {/* Sidebar panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white shadow-2xl z-[201] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-800">Your Cart</h2>
                  <p className="text-sm text-gray-500">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
                </div>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart items – scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500 mb-4">Your cart is empty.</p>
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-600"
                    onClick={() => onOpenChange(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 rounded-xl p-3">
                    <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-purple-600 font-bold text-base mt-1">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with totals and buttons */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 space-y-4 bg-white">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Shipping & taxes calculated at checkout</span>
                  </div>
                </div>
                <Link href="/cart" onClick={handleCheckoutClick} className="block w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-base font-semibold rounded-xl shadow-md">
                    Proceed to Checkout
                  </Button>
                </Link>
                <button
                  onClick={() => onOpenChange(false)}
                  className="w-full text-center text-sm text-purple-600 hover:text-purple-700 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}