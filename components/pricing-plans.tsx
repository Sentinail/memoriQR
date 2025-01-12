import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Bronze",
    price: "250 PHP/month",
    description: "Essential features for a simple memorial",
    features: [
      "QR Code Generation",
      "Basic Biography Page",
      "Email Support",
      "Custom Domain Name (price may vary)"
    ]
  },
  {
    name: "Silver",
    price: "458 PHP/month",
    description: "Advanced features for a comprehensive memorial",
    features: [
      "QR Code Generation",
      "Advanced Biography Page",
      "Photo Gallery",
      "Tribute Wall",
      "Priority Email Support",
      "Visitor Guestbook",
      "Custom Domain Name (price may vary)"
    ]
  },
  {
    name: "Gold",
    price: "883 PHP/month",
    description: "The ultimate package for a lasting legacy",
    features: [
      "QR Code Generation",
      "Custom Biography Page",
      "Photo and Video Gallery",
      "Tribute Wall",
      "24/7 Phone Support",
      "Interactive Timeline",
      "Custom Domain Name (price may vary)"
    ]
  }
]

export default function PricingPlans() {
  return (
    <section id="pricing-plans" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Choose the perfect plan to preserve and share your loved one&apos;s legacy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 flex flex-col transition transform hover:scale-105 duration-300">
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

