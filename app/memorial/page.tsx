import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { QrCode } from 'lucide-react'

export default function Memorial() {
  return (
    <div className="min-h-screen bg-[hsl(0_0%_3.9%)] text-white flex flex-col items-center justify-center px-4">
      <QrCode className="h-24 w-24 text-blue-500 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Create a Memorial</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        You can create a memorial for a loved one who has passed away. You can also search for an existing memorial.
      </p>
      <Button asChild>
        <Link href="/">
          Return to Homepage
        </Link>
      </Button>
    </div>
  )
}

