import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">MemoriQR</Link>
            <p className="text-sm text-gray-400 mt-2">Preserving legacies, one QR code at a time.</p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li><Link href="#" className="text-sm hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm hover:text-blue-400">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MemoriQR. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

