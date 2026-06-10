"use client"

import { Suspense } from "react"
import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

// Inner component that uses useSearchParams
function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const registered = searchParams.get("registered")
  const redirectTo = searchParams.get("redirect") || "/"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError("Invalid email or password")
      setLoading(false)
    } else {
      router.push(redirectTo)
    }
  }

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Enter your email and password to access your account</p>
        </div>

        {registered && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4 text-sm text-center">
            Registration successful! Please sign in.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input name="email" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input name="password" type="password" placeholder="Enter your password" required />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" className="border-gray-300" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg shadow-md transition-all" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
        </div>

        <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 transition-all">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Sign In with Google
        </Button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-600 hover:underline font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image src="/loginsidebar.jpg" alt="Welcome illustration" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-5xl mb-4">✨</div>
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-lg italic leading-relaxed opacity-90">
              "You can get everything you want if you work hard, trust the process, and stick to the plan."
            </p>
            <p className="mt-4 text-sm font-medium">– Everything You Want</p>
          </motion.div>
        </div>
      </div>
      <Suspense fallback={<div className="w-full lg:w-1/2 flex items-center justify-center">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}