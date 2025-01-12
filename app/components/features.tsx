import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Lock } from 'lucide-react'

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
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
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

