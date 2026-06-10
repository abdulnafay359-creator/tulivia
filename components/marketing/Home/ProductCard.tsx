import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: number
  image: string
  slug: string
  categorySlug?: string
}

export const ProductCard = ({ name, price, image, slug, categorySlug }: ProductCardProps) => {
  const href = categorySlug ? `/${categorySlug}` : `/products/${slug}`

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-primary-600 font-bold">${price.toFixed(2)}</p>
        <Link href={href} className="block w-full mt-3">
          <Button className="w-full" variant="outline">View Details</Button>
        </Link>
      </div>
    </div>
  )
}