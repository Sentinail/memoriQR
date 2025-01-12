import Header from '@/components/header'
import Hero from '@/components/hero'
import Description from '@/components/description'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import PricingPlans from '@/components/pricing-plans'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(0_0%_3.9%)] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Description />
        <PricingPlans />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

