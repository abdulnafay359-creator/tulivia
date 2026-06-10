import { notFound } from "next/navigation"
import { prisma } from "@/lib/db/prisma"
import { ProductDetails } from "@/components/marketing/ProductDetails"
import { RelatedProducts } from "@/components/marketing/RelatedProducts"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
    },
  })

  if (!product) {
    notFound()
  }

  // Fetch related products (same category, exclude current)
  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      id: { not: product.id },
    },
    take: 4,
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  )
}