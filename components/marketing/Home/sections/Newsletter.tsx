import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-heading font-bold mb-4">Be the first to know!</h2>
        <p className="text-gray-600 mb-6">
          New arrivals, exclusive deals & creative inspiration straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white"
            required
          />
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe anytime.</p>
      </div>
    </section>
  )
}