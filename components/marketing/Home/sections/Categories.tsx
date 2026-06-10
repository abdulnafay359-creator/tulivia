import Link from "next/link"

const categories = [
  { name: "Coloring Books", slug: "coloring-books", icon: "🎨", bgColor: "bg-purple-100" },
  { name: "Activity Books", slug: "activity-books", icon: "📘", bgColor: "bg-blue-100" },
  { name: "Toys", slug: "toys", icon: "🧸", bgColor: "bg-green-100" },
  { name: "Learning Kits", slug: "learning-kits", icon: "📚", bgColor: "bg-yellow-100" },
  { name: "Sketch Books", slug: "sketch-books", icon: "✏️", bgColor: "bg-pink-100" },
]

export const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`${cat.bgColor} flex-1 flex items-center gap-6 rounded-xl p-8 hover:shadow-lg transition-shadow min-w-[210px]`}
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}