import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"
import { Background } from "@/components/three/Background"
import { CartProvider } from "@/components/providers/CartProvider"
import { AuthProvider } from "@/components/providers/AuthProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-heading" 
})

export const metadata: Metadata = {
  title: "Tulivia – Educational Products for Creative Kids",
  description: "Discover coloring books, activity books, toys, and learning products for children aged 3-12.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <AuthProvider>
          <CartProvider>
            <Background />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}