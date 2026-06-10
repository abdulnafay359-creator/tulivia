import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
      <Card>
        <CardHeader>
          <div className="text-6xl mb-4">🎉</div>
          <CardTitle className="text-3xl">Thank you for your order!</CardTitle>
          <CardDescription>
            Your order has been placed successfully. You will receive a confirmation email shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/shop">
            <Button className="bg-purple-600 hover:bg-purple-700">Continue Shopping</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}