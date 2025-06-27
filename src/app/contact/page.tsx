
'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, MessageSquare, Calendar, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      subtitle: "Get in touch via email",
      content: "Info@gmautomation.co.in",
      href: "mailto:Info@gmautomation.co.in",
      color: "emerald"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      subtitle: "Speak with our experts",
      content: "+91 97827 30455",
      href: "tel:+919782730455",
      color: "blue"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "Quick support & demos",
      content: "Chat with us",
      href: "https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo",
      color: "green"
    }
  ];

  const colorClasses = {
    emerald: { bg: "from-emerald-500/10 to-green-500/10", border: "border-emerald-500/20", text: "text-emerald-600", icon: "bg-emerald-100 text-emerald-600" },
    blue: { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20", text: "text-blue-600", icon: "bg-blue-100 text-blue-600" },
    green: { bg: "from-green-500/10 to-emerald-500/10", border: "border-green-500/20", text: "text-green-600", icon: "bg-green-100 text-green-600" },
    purple: { bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20", text: "text-purple-600", icon: "bg-purple-100 text-purple-600" }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f172a 50%, #134e4a 75%, #064e3b 100%)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Our Team</span>
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
            
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
              Have questions about our smart home solutions? Our experts are ready to help you transform your space 
              with cutting-edge automation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const colors = colorClasses[method.color as keyof typeof colorClasses];
              return (
                <Card key={index} className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative z-10 p-8 text-center space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-white">{method.title}</h3>
                      <p className="text-zinc-400 font-light">{method.subtitle}</p>
                    </div>
                    
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 ${colors.text} hover:text-white transition-colors font-medium group/link`}
                    >
                      <span>{method.content}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Send Message</span>
                </div>
                
                <h2 className="text-4xl font-light tracking-tight text-zinc-900 leading-tight">
                  Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Project</span>
                </h2>
                
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                
                <p className="text-lg text-zinc-600 leading-relaxed font-light">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your automation needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Service Interest</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="home-automation">Home Automation</option>
                    <option value="elv-systems">ELV Systems</option>
                    <option value="home-cinema">Home Cinema</option>
                    <option value="ict-solutions">ICT Solutions</option>
                    <option value="bms">Building Management Systems</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-4 px-6 rounded-xl hover:bg-zinc-800 transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>

              {isSubmitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <p className="text-emerald-700 font-medium">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Visit Our Office</span>
                </div>
                
                <h2 className="text-4xl font-light tracking-tight text-zinc-900 leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Location</span>
                </h2>
                
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              </div>

              {/* Address Card */}
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-zinc-900">Main Office</h3>
                      <p className="text-zinc-600 leading-relaxed">
                        Prince Palace, Kanha Vihar,<br />
                        Ayodhya Nagar, Plot No.154,<br />
                        Bhura Patel Marg, Vaishali Nagar,<br />
                        Jaipur, Rajasthan 302021
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-zinc-900">Business Hours</h3>
                      <div className="text-zinc-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-200">
                    <a 
                      href="https://maps.google.com/?q=Prince+Palace+Jaipur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors group text-center"
                >
                  <MessageSquare className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-green-700">Quick Chat</p>
                </a>
                
                <a
                  href="tel:+919782730455"
                  className="p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors group text-center"
                >
                  <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-blue-700">Call Now</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-zinc-900 mb-4">Find Us on the Map</h2>
            <p className="text-zinc-600 font-light">Located in the heart of Jaipur for easy accessibility</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0268054523494!2d75.72152617543911!3d26.902644376653182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cfbb7dfcab%3A0x38828eb08adcfe17!2sPrince%20Palace!5e0!3m2!1sen!2sin!4v1746715849791!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}