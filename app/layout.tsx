import './globals.css'
import { GeistSans } from 'geist/font/sans'

export const metadata = {
  title: 'MemoriQR - Preserve Legacies with QR Code Tombstones',
  description: 'Connect physical memorials with digital biographies using QR codes on tombstones. Enhance your tombstone business with MemoriQR.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body className="min-h-screen flex flex-col bg-[hsl(0_0%_3.9%)]">
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  )
}

