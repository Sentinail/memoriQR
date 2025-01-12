import { Button } from "@/components/ui/button"
import { QrCode } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <QrCode className="mx-auto mb-8 h-24 w-24" />
        <h1 className="text-5xl font-bold mb-6">Preserve Memories Forever</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Connect the physical world with the digital realm. Our QR codes on tombstones 
          link to personalized biography websites, keeping memories alive for generations.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  )
}

