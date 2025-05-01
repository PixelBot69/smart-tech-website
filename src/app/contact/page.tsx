// app/contact/page.jsx
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-emerald-700">Contact Us</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our smart home solutions? 
          Our team is ready to help you transform your living space.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl text-emerald-700">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="name" className="font-medium text-sm sm:text-base">Full Name</label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="font-medium text-sm sm:text-base">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="phone" className="font-medium text-sm sm:text-base">Phone (Optional)</label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="message" className="font-medium text-sm sm:text-base">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or questions..." 
                  rows={4}
                  className="resize-y"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Card className="shadow-md">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-emerald-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Email Us</h3>
                    <p className="text-gray-500 text-sm mb-1">For general inquiries:</p>
                    <a href="mailto:info@smarthouse.com" className="text-emerald-700 hover:underline text-sm sm:text-base break-words">
                      info@smarthouse.com
                    </a>
                    <p className="text-gray-500 text-sm mt-2 mb-1">For support:</p>
                    <a href="mailto:support@smarthouse.com" className="text-emerald-700 hover:underline text-sm sm:text-base break-words">
                      support@smarthouse.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-emerald-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Call Us</h3>
                    <p className="text-gray-500 text-sm mb-1">Sales Department:</p>
                    <a href="tel:+1-800-123-4567" className="text-emerald-700 hover:underline text-sm sm:text-base">
                      +1 (800) 123-4567
                    </a>
                    <p className="text-gray-500 text-sm mt-2 mb-1">Customer Support:</p>
                    <a href="tel:+1-800-765-4321" className="text-emerald-700 hover:underline text-sm sm:text-base">
                      +1 (800) 765-4321
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address Card - Full Width */}
          <Card className="shadow-md">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-emerald-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">Visit Us</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Main Office:</p>
                      <address className="not-italic text-gray-700 text-sm sm:text-base">
                      10 11, Jai Ambay Nagar, Opp. Arg 1,<br />
                      Gopalpura Flyover, Jaipur-302015,<br />
                
                        Rajasthan, India
                      </address>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Hours:</p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 sm:mt-16">
        <div className="bg-gray-200 rounded-lg sm:rounded-xl w-full h-64 sm:h-96 flex items-center justify-center p-4 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            {/* In a real implementation, you would embed a Google Map or similar here */}
            Map placeholder - Embed your Google Maps or other map service here
          </p>
        </div>
      </div>
    </div>
  );
}