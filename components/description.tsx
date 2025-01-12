import Image from "next/image";

export default function Description() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-8 leading-tight">
          Preserving Memories in the Digital Age
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          With <span className="text-blue-400 font-medium">MemoriQR</span>, you can create a lasting digital connection, linking physical memorials to personalized biographies that live on for generations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-700 border border-gray-600 p-8 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <p className="text-gray-400">
                Our QR solutions are simple to integrate and user-friendly, providing a meaningful way to connect the past with the future.
              </p>
            </div>
            <div className="bg-gray-700 border border-gray-600 p-8 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold mb-4">Timeless Tributes</h3>
              <p className="text-gray-400">
                Share your loved ones’ stories with family and friends around the world through an everlasting digital presence.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Image
              src="/assets/images/tombstone_white.png"
              alt="Tombstone"
              width={356}
              height={356}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

