"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useCartStore } from "@/lib/stores/cartStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShieldCheck, Truck, RotateCcw } from "lucide-react"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getItemCount } = useCartStore()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [promoApplied, setPromoApplied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax - discount

  const handleApplyPromo = () => {
    if (promoCode === "SAVE10" && !promoApplied) {
      setDiscount(subtotal * 0.1)
      setPromoApplied(true)
    } else if (promoCode === "FREESHIP" && !promoApplied) {
      // free shipping already handled by condition, but we can show a message
      setPromoApplied(true)
    } else {
      alert("Invalid or already applied promo code")
    }
  }

  if (!mounted) return null

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-heading font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products yet.</p>
          <Link href="/shop">
            <Button className="bg-purple-600 hover:bg-purple-700">Continue Shopping</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-8">Shopping Cart</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 text-sm font-medium text-gray-500 border-b">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <AnimatePresence>
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: idx * 0.05 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 border-b last:border-b-0"
                    >
                      {/* Product image & name */}
                      <div className="md:col-span-6 flex gap-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 mt-1 flex items-center gap-1"
                          >
                            <Trash2 className="h-3 w-3" /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity controls */}
                      <div className="md:col-span-2 flex justify-center">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 text-right font-bold text-purple-600">
                        <span className="md:hidden text-sm text-gray-500 mr-2">Total:</span>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Continue Shopping link */}
              <Link href="/shop" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mt-6">
                ← Continue Shopping
              </Link>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-heading font-bold text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({getItemCount()} items)</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (SAVE10)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-purple-600">${total.toFixed(2)}</span>
                    </div>
                    {shipping === 0 && <p className="text-xs text-green-600 mt-1">You've unlocked free shipping!</p>}
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={handleApplyPromo} disabled={promoApplied}>
                      Apply
                    </Button>
                  </div>
                  {promoApplied && <p className="text-green-600 text-xs mt-1">Promo applied successfully!</p>}
                  <p className="text-xs text-gray-400 mt-2">
                    Try: <span className="font-mono bg-gray-100 px-1">SAVE10</span> (10% off) or{" "}
                    <span className="font-mono bg-gray-100 px-1">FREESHIP</span> (free shipping)
                  </p>
                </div>

                {/* Checkout button */}
                <Link href="/checkout/auth" className="block mt-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-base font-semibold">
                    Proceed to Checkout
                  </Button>
                </Link>

                {/* Trust badges */}
                <div className="mt-6 flex justify-center gap-4 text-gray-400 text-xs">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-4 w-4" />
                    <span>30‑day returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}