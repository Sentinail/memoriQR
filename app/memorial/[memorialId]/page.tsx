import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function MemorialOn({
  params,
}: {
  readonly params: Promise<{ memorialId: string }>
}) {
  const memorialId = (await params).memorialId

  return (
    <section className="w-full h-full relative">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Memorial</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          This is the memorial page for the memorial with the id {memorialId}
        </p>
      </div>
      <Link
        href="/memorials"
        className="fixed top-4 left-4 flex items-center space-x-2 z-10"
      >
        <ArrowLeft color='black' className="h-6 w-6 bg-white rounded-full p-1 hover:scale-110 transform transition" />
      </Link>
    </section>
  )
}