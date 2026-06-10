"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export const ContactMethodsSection = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 text-center shadow-md"
          >
            <Mail className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
            <a href="mailto:hello@tulivia.com" className="text-purple-600 hover:underline">
              hello@tulivia.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 text-center shadow-md"
          >
            <Phone className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <a href="tel:+11234567890" className="text-purple-600 hover:underline">
              +1 (234) 567-890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 text-center shadow-md"
          >
            <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Creative Lane, Suite 200<br />New York, NY 10001</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition">📘</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition">🐦</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition">📷</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition">▶️</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}