import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "../data/faq.data"

export const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        {/* @ts-expect-error – shadcn Accordion accepts type prop, but types are missing */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}