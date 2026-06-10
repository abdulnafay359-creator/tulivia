'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CartSidebar } from '@/components/cart/CartSidebar'

interface CartContextType {
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider value={{ openCart, closeCart }}>
      {children}
      <CartSidebar open={isOpen} onOpenChange={setIsOpen} />
    </CartContext.Provider>
  )
}