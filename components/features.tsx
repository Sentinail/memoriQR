import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Lock, Heart } from 'lucide-react'

const features = [
  {
    title: "Easy Access",
    description: "Scan the QR code with any smartphone to instantly access the biography.",
    icon: Smartphone
  },
  {
    title: "Worldwide Accessibility",
    description: "Access memories from anywhere in the world, at any time.",
    icon: Globe
  },
  {
    title: "Secure & Private",
    description: "Control who can view the biography with optional privacy settings.",
    icon: Lock
  },
  {
    title: "Preserve Legacies",
    description: "Keep your loved ones' stories alive for future generations.",
    icon: Heart
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
