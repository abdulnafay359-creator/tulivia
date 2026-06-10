"use client"

import { HeroSection } from "./sections/HeroSection"
import { FiltersSection } from "./sections/FiltersSection"
import { ProductsGridSection } from "./sections/ProductsGridSection"
import { CTASection } from "./sections/CTASection"

export const ShopPage = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FiltersSection />
      <ProductsGridSection />
      <CTASection />
    </main>
  )
}