"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CheckoutFormProps {
  user: {
    name?: string | null
    email?: string | null
  }
}

export function CheckoutForm({ user }: CheckoutFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const orderData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      postalCode: formData.get("postalCode"),
      country: formData.get("country"),
      paymentMethod,
    }
    
    // Here you would call your order API
    console.log("Order data:", orderData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    router.push("/order-confirmation")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>Enter your details to complete the order.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" defaultValue={user.email || ""} required />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          
          <div>
            <Label htmlFor="address">Street address *</Label>
            <Input id="address" name="address" required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input id="city" name="city" required />
            </div>
            <div>
              <Label htmlFor="postalCode">Postal code *</Label>
              <Input id="postalCode" name="postalCode" required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="country">Country *</Label>
            <Input id="country" name="country" defaultValue="Pakistan" required />
          </div>
          
          <div className="space-y-3">
            <Label>Payment method *</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="font-normal cursor-pointer">Credit / Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="font-normal cursor-pointer">Cash on Delivery</Label>
              </div>
            </RadioGroup>
          </div>
          
          {paymentMethod === "card" && (
            <div className="space-y-4 border-t pt-4">
              <p className="text-sm text-gray-500">Card details would be integrated with Stripe here.</p>
              <Input placeholder="Card number" disabled />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM/YY" disabled />
                <Input placeholder="CVC" disabled />
              </div>
            </div>
          )}
          
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
            {loading ? "Processing..." : "Place Order"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}