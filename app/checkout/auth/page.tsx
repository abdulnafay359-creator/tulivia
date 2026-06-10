"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, ShoppingBag, Sparkles, ArrowRight } from "lucide-react"

export default function CheckoutAuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full">
        {/* Header with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-2">
            Checkout
          </h1>
          <p className="text-gray-500 text-lg">Choose how you'd like to proceed</p>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Guest Checkout Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-2 border-transparent hover:border-purple-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-heading">Guest Checkout</CardTitle>
                <CardDescription className="text-gray-500">
                  Quick and easy – no registration required
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <ul className="text-sm text-gray-600 space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> No account needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> Fast checkout
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> Email confirmation
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <span className="text-gray-300">✗</span> No order history access
                  </li>
                </ul>
                <Link href="/checkout/shipping?guest=true">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4 group">
                    Continue as Guest
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Create Account / Sign In Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl font-heading">Create Account or Sign In</CardTitle>
                <CardDescription className="text-gray-500">
                  Unlock exclusive benefits and faster future checkouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <ul className="text-sm text-gray-600 space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">✦</span> Order history & tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">✦</span> Save addresses & payment methods
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">✦</span> Exclusive deals & rewards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">✦</span> One‑click checkout
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link href="/login?redirect=/checkout/shipping">
                    <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register?redirect=/checkout/shipping">
                    <Button variant="default" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600">Secure checkout · 30‑day returns · 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}