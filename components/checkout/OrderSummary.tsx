"use client"

import { useCartStore } from "@/lib/stores/cartStore"
import Image from "next/image"
import Link from "next/link"

export const OrderSummary = () => {
  const { items, getTotalPrice, getItemCount } = useCartStore()
  const total = getTotalPrice()
  const itemCount = getItemCount()
  const shipping = total > 50 ? 0 : 5.99
  const tax = total * 0.1
  const grandTotal = total + shipping + tax

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 text-center">
        <p className="text-gray-500 mb-4">Your cart is empty.</p>
        <Link href="/shop" className="text-purple-600 hover:underline">
          Continue Shopping →
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-heading font-bold text-gray-800 mb-4">
        Order Summary ({itemCount} items)
      </h2>
      
      <div className="space-y-3 max-h-80 overflow-y-auto mb-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 border-b pb-3">
            <div className="relative w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      
      <div className="space-y-2 text-sm border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Free shipping on orders over $50
      </p>
    </div>
  )
}