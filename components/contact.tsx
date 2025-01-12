import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We're here to answer any questions you may have.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-gray-600 border-gray-500" />
                <Input type="email" placeholder="Your Email" className="bg-gray-600 border-gray-500" />
                <Textarea placeholder="Your Message" className="bg-gray-600 border-gray-500" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 border-gray-600">
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
        </div>
      </div>
    </section>
  )
}

