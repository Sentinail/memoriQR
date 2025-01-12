import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We're here to answer any questions you may have.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600" />
                <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600" />
                <Textarea placeholder="Your Message" className="bg-gray-700 border-gray-600" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-500" />
                <p>info@qrmemories.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-500" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-500" />
                <p>123 Memory Lane, Digital City, DC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

