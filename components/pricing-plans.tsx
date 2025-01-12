import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Essential features for a simple memorial",
    features: [
      "QR Code Generation",
      "Basic Biography Page",
      "1 Year Hosting",
      "Email Support"
    ]
  },
  {
    name: "Premium",
    price: "$199",
    description: "Advanced features for a comprehensive memorial",
    features: [
      "QR Code Generation",
      "Advanced Biography Page",
      "Photo Gallery",
      "5 Years Hosting",
      "Priority Email Support",
      "Visitor Guestbook"
    ]
  },
  {
    name: "Eternal",
    price: "$499",
    description: "The ultimate package for a lasting legacy",
    features: [
      "QR Code Generation",
      "Customizable Biography Page",
      "Photo and Video Gallery",
      "Lifetime Hosting",
      "24/7 Phone Support",
      "Interactive Timeline",
      "Family Tree Integration"
    ]
  }
]

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

