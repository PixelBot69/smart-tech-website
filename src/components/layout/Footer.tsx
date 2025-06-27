'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight, Send, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "ELV Systems",
      href: "/elv-systems",
      accent: "emerald",
      links: [
        { name: "Structured Cabling", href: "/elv-systems/structured-cabling" },
        { name: "CCTV Surveillance", href: "/elv-systems/cctv-surveillance" },
        { name: "Access Control", href: "/elv-systems/access-control" },
        { name: "Parking Management", href: "/elv-systems/parking-management" }
      ]
    },
    {
      title: "ICT Solutions",
      href: "/ict-solutions",
      accent: "blue",
      links: [
        { name: "Wi-Fi Solutions", href: "/ict-solutions/wifi-solutions" },
        { name: "IT & Server Solutions", href: "/ict-solutions/it-server-solutions" },
        { name: "Telephone & PABX", href: "/ict-solutions/telephone-pabx" },
        { name: "Solar Systems", href: "/ict-solutions/solar-systems" }
      ]
    },
    {
      title: "Home Cinema",
      href: "/home-cinema",
      accent: "purple",
      links: [
       { name: "Acoustic Rooms", href: "/Home-cinema/acoutic" },
        { name: "LED Walls/Screens", href: "/Home-cinema/Led-wall" },
        { name: "Cinema Audio/Video", href: "/Home-cinema/cinema-audio" },
        { name: "Cinema Automation", href: "/Home-cinema/Cinema-automation" },
        { name: "Cinema Seating", href: "/Home-cinema/cinema-seating" },
        { name: "Game Rooms", href: "/Home-cinema/game" }
      ]
    },
    {
      title: "Smart Systems",
      href: "/",
      accent: "amber",
      links: [
        { name: "Home Automation", href: "/home-automation" },
        { name: "BMS", href: "/bms" },
        { name: "AMC", href: "/amc" },
        { name: "Our Projects", href: "/projects" }
      ]
    }
  ];

  const accentColors = {
    emerald: "group-hover:text-emerald-400",
    blue: "group-hover:text-blue-400",
    purple: "group-hover:text-purple-400",
    amber: "group-hover:text-amber-400"
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(255,255,255)" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="rgb(255,255,255)" opacity="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
                  </div>
                  <div>
                    <span className="text-xl font-light text-white tracking-tight">GM AUTOMATION</span>
                    <div className="text-sm text-zinc-400 font-light">& SOLUTION</div>
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed font-light">
                  Providing cutting-edge technology solutions for homes and businesses since 2010. 
                  We're dedicated to creating smarter, more efficient spaces through innovative technology.
                </p>
              </div>
              
              {/* Social Proof */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-zinc-400 font-medium">Trusted by 1500+ Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                  <span className="text-sm text-zinc-400 font-medium">12+ Years of Excellence</span>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-white">
                    {category.title}
                  </h3>
                  <div className="w-12 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                </div>
                
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="group flex items-center text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        <ArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Newsletter Section */}
        <div className="border-t border-zinc-800 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-white">Get In Touch</h3>
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-4 group-hover:bg-zinc-800 transition-colors">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-white">Our Location</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Prince Palace, Kanha Vihar, Ayodhya Nagar, Plot No.154, Bhura Patel Marg, 
                      near Gandhi Path West, Vaishali Nagar, Jaipur, Rajasthan 302021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-4 group-hover:bg-zinc-800 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-white">Email Us</h4>
                    <a 
                      href="mailto:Info@gmautomation.co.in" 
                      className="text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                      Info@gmautomation.co.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-4 group-hover:bg-zinc-800 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-white">Call Us</h4>
                    <a 
                      href="tel:+919782730455" 
                      className="text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                    >
                      +91 97827 30455
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-white">Stay Updated</h3>
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                <p className="text-zinc-400 font-light">
                  Subscribe to get the latest updates on smart home technology and our services.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-colors group">
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span>We respect your privacy. Unsubscribe anytime.</span>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span>About Us</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span>Our Projects</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors group"
                  >
                    <span>Contact</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-500">
              © {currentYear} GM Automation & Solution. All rights reserved.
            </div>
            
            <div className="flex items-center gap-8">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;