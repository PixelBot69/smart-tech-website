import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-emerald-700">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our smart home solutions? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Email Card */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-emerald-700 flex items-center">
              <div className="bg-emerald-100 p-2 rounded-full mr-3">
                <Mail className="h-5 w-5 text-emerald-700" />
              </div>
              Email Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:Info@gmautomation.co.in" className="text-emerald-700 hover:underline text-lg block mb-1 font-medium">
              Info@gmautomation.co.in
            </a>
          </CardContent>
        </Card>

        {/* Phone Card */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-emerald-700 flex items-center">
              <div className="bg-emerald-100 p-2 rounded-full mr-3">
                <Phone className="h-5 w-5 text-emerald-700" />
              </div>
              Call Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="tel:+919782730455" className="text-emerald-700 hover:underline text-lg block font-medium">
              +91 97827 30455
            </a>
          </CardContent>
        </Card>

        {/* Address Card */}
        <Card className="shadow-md md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-emerald-700 flex items-center">
              <div className="bg-emerald-100 p-2 rounded-full mr-3">
                <MapPin className="h-5 w-5 text-emerald-700" />
              </div>
              Visit Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Main Office:</p>
                <p className="text-gray-700">
                  Prince Palace, Kanha Vihar,<br />
                  Ayodhya Nagar, Plot No.154,<br /> 
                  Bhura Patel Marg, Vaishali Nagar,<br />
                  Jaipur, Rajasthan 302021
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Hours:</p>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Google Map Embed */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0268054523494!2d75.72152617543911!3d26.902644376653182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cfbb7dfcab%3A0x38828eb08adcfe17!2sPrince%20Palace!5e0!3m2!1sen!2sin!4v1746715849791!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full shadow-md"
        ></iframe>
      </div>
    </div>
  );
}