import Hero from '@/components/hero'
import Description from '@/components/description'
import Features from '@/components/features'
import HowToGetStarted from '@/components/how-to-get-started'
import PricingPlans from '@/components/pricing-plans'
import Contact from '@/components/contact'
import BackToTop from '@/components/back-to-top'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
        <main className="min-h-screen bg-[hsl(0_0%_3.9%)] text-white">
          <Hero />
          <Features />
          <HowToGetStarted />
          <Description />
          <PricingPlans />
          <Contact />
          <BackToTop />
        </main>
      <Footer />
    </>
  )
}

