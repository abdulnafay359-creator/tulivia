import Hero from "./sections/Hero"
import { Categories } from "./sections/Categories"
import { FeaturedProducts } from "./sections/FeaturedProducts"
import { Newsletter } from "./sections/Newsletter"

// Remove Categories and Testimonials if you don't need them, or keep them as extra.

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </main>
  )
}
