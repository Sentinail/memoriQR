import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">QR Memories</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:text-gray-300">How It Works</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Button variant="outline">Get Started</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

