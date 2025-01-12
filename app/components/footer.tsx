import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">QR Memories</Link>
            <p className="text-sm text-gray-400 mt-2">Preserving legacies, one QR code at a time.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-sm hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} QR Memories. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

