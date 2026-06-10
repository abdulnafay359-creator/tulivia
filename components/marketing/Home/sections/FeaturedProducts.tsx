import { ProductCard } from "../ProductCard"
import { featuredProducts } from "../data/featuredProducts.data"

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}