"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { q: "Do you ship internationally?", a: "Yes, we ship worldwide. Delivery times and costs vary by region." },
  { q: "What is your return policy?", a: "We offer a 30‑day satisfaction guarantee. Return any unused product for a full refund." },
  { q: "Are your products safe for toddlers?", a: "All our products are tested for safety and meet international standards. Some items are recommended for ages 3+." },
  { q: "Can I use a discount code with other offers?", a: "Only one discount code can be applied per order, but it can be combined with free shipping promotions." },
  { q: "How can I become a Tulivia affiliate?", a: "Visit our Affiliate page or email partners@tulivia.com for details." },
]

export const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">Everything you need to know.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* @ts-expect-error – shadcn Accordion accepts type prop, but types are missing */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-gray-800 font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}