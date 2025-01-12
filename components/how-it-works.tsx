import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, UserPlus, LogIn, QrCode, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "Explore how our QR codes connect tombstones to personalized biography websites.",
    icon: Globe,
  },
  {
    title: "Register",
    description:
      "Create an account to start generating and managing QR codes.",
    icon: UserPlus,
  },
  {
    title: "Log In",
    description:
      "Access your dashboard to manage and track your QR codes effortlessly.",
    icon: LogIn,
  },
  {
    title: "Manage QR Codes",
    description:
      "Easily create, customize, and monitor the status of your QR codes in one place.",
    icon: QrCode,
  },
  {
    title: "Deliver",
    description:
      "Ensure your QR codes are functional and ready for tombstone installation.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
        <div className="relative">
          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-shrink-0 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <Card className="bg-gray-800 border-gray-700 flex-1">
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

