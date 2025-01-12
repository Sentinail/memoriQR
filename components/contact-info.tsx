import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Reach out to us through any of these channels.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6 text-blue-500" />
          <p>bitmaestro.solutions@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="h-6 w-6 text-blue-500" />
          <p>+63 938 0542 839</p>
        </div>
        <div className="flex items-center space-x-4">
          <Clock className="h-6 w-6 text-blue-500" />
          <p>Monday - Friday: 9am - 5pm EST</p>
        </div>
      </CardContent>
    </Card>
  )
}

