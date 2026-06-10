"use client"

import { HeroSection } from "./sections/HeroSection"
import { FeaturesSection } from "./sections/FeaturesSection"
import { ProductsGridSection } from "./sections/ProductsGridSection"
import { BenefitsSection } from "./sections/BenefitsSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { CTASection } from "./sections/CTASection"

export const KidsCornerPage = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProductsGridSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}