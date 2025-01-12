import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Tombstone Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join MemoriQR today and offer your customers a unique way to preserve and share memories.
        </p>
        <Button size="lg" variant="secondary">Sign Up Now</Button>
      </div>
    </section>
  )
}

