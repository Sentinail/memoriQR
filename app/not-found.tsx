import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { QrCode } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[hsl(0_0%_3.9%)] text-white flex flex-col items-center justify-center px-4">
      <QrCode className="h-24 w-24 text-blue-500 mb-8" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Oops! It seems like the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/">
          Return to Homepage
        </Link>
      </Button>
    </div>
  )
}

