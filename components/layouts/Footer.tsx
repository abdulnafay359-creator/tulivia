import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Tulivia</h3>
            <p className="text-sm text-gray-400">Inspiring creativity through magical books & toys.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/track-order">Track Order</Link></li>
              <li><Link href="/shipping">Shipping & Delivery</Link></li>
              <li><Link href="/returns">Returns & Refunds</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/story">Our Story</Link></li>
              <li><Link href="/why-us">Why Tulivia?</Link></li>
              <li><Link href="/blog">Blog & Insights</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
           
            </div>
            <div className="mt-6 flex space-x-3">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">VISA</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">JCB</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">EUROPAY</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tulivia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}