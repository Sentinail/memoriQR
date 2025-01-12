import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
              We're here to answer any questions you may have about our services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

