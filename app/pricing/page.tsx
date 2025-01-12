import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingPlans from '@/components/pricing-plans'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
            <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
              Choose the perfect plan to preserve and share your loved one's legacy.
            </p>
            <PricingPlans />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

