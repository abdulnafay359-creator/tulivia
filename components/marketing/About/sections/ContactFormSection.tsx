"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const ContactFormSection = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")
    // Simulate API call (replace with actual endpoint later)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormStatus("sent")
    setTimeout(() => setFormStatus("idle"), 3000)
  }

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you!</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea id="message" name="message" rows={5} required />
          </div>
          <Button
            type="submit"
            disabled={formStatus !== "idle"}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            {formStatus === "sending" && "Sending..."}
            {formStatus === "sent" && "✓ Sent! Thank you."}
            {formStatus === "error" && "Failed. Please try again."}
            {formStatus === "idle" && "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}