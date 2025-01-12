import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600" />
          <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600" />
          <Input type="tel" placeholder="Your Phone" className="bg-gray-700 border-gray-600" />
          <Textarea placeholder="Your Message" className="bg-gray-700 border-gray-600" />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  )
}

