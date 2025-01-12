import './globals.css'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'MemoriQR - Preserve Legacies with QR Code Tombstones',
  description: 'Connect physical memorials with digital biographies using QR codes on tombstones. Enhance your tombstone business with MemoriQR.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[hsl(0_0%_3.9%)]">
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  )
}

