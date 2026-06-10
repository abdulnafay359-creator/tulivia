import { testimonials } from "../data/testimonials.data"

export const Testimonials = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          What Families Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-text-secondary mb-4">“{t.text}”</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
