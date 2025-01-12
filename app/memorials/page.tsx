import MemorialsList from '@/components/memorials-list'

export default function MemorialsPage() {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Memorials</h1>
          <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
            Here are the memorials that other users have created. You can search for a specific memorial or create a new one.
          </p>
          <MemorialsList />
        </div>
      </section>
    </main>
  )
}

