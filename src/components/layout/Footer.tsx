'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "ELV Systems",
      href: "/elv-systems",
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
      links: [
        { name: "Acoustic Rooms", href: "/home-cinema/acoustic-rooms" },
        { name: "LED Walls/Screens", href: "/home-cinema/led-walls-screens" },
        { name: "Cinema Audio/Video", href: "/home-cinema/cinema-audio-video" },
        { name: "Cinema Automation", href: "/home-cinema/cinema-automation" }
      ]
    },
    {
      title: "Smart Systems",
      href: "/",
      links: [
        { name: "Home Automation", href: "/home-automation" },
        { name: "BMS", href: "/bms" },
        { name: "AMC", href: "/amc" },
        { name: "Our Projects", href: "/projects" }
      ]
    }
  ];

  return (
    <footer className=" bg-emerald-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-15 h-8 rounded-md flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-bold text-white">GM AUTOMATION & SOLUTION</span>
            </div>
            <p className="mb-6 text-sm">
              Providing cutting-edge technology solutions for homes and businesses since 2010. We're dedicated to creating smarter, more efficient spaces through innovative technology.
            </p>
          </div>

          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-emerald-500 transition-colors flex items-center"
                    >
                      <ArrowRight size={12} className="mr-2 inline" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Separator className="bg-slate-700 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <MapPin size={20} className="mr-3 text-emerald-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1">Our Location</h4>
                <p className="text-sm">
                  Prince Palace, Kanha Vihar, Ayodhya Nagar, Plot No.154, Bhura Patel Marg, 
                  near Gandhi Path West, Vaishali Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail size={20} className="mr-3 text-emerald-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1">Email Us</h4>
                <a href="mailto:Info@gmautomation.co.in" className="text-sm hover:text-emerald-500 transition-colors">
                  Info@gmautomation.co.in
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={20} className="mr-3 text-emerald-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1">Call Us</h4>
                <a href="tel:+919782730455" className="text-sm hover:text-emerald-500 transition-colors">
                  +91 97827 30455
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Have Questions?</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <Button variant="default" className="rounded-l-none">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {currentYear} SmartTech. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm hover:text-emerald-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm hover:text-emerald-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm hover:text-emerald-500 transition-colors">
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
