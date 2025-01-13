'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">MemoriQR</Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 left-0 right-0 bg-[hsl(0_0%_3.9%)] md:bg-transparent md:top-0 z-20`}>
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li><Link href="/memorials" className="hover:text-blue-400" onClick={toggleMenu}>Memorials</Link></li>
              <li><Button variant="outline" onClick={toggleMenu}><Link href={"/dashboard"}> Get Started </Link></Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

