import React from 'react';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ServicesSection from '@/components/ServiceSection';
import StatsSection from '@/components/StatsSection';
import HeroSection from '@/components/HeroSection';
import ContactFormSection from '../components/NewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AssociatesSection from '@/components/AssociatesSection';
import BenefitsSection from '@/components/Benifits';

// ✅ SEO metadata export
export const metadata = {
  title: 'GM Smart Home | Smart Home Automation Solutions',
  description:
    'GM Smart Home offers cutting-edge smart home automation solutions. Upgrade your living with security, convenience, and efficiency.',
  keywords: [
    'smart home',
    'home automation',
    'GM Smart Home',
    'IoT',
    'home security',
    'smart devices',
  ],
  authors: [{ name: 'GM Smart Home' }],
  openGraph: {
    title: 'GM Smart Home | Smart Living Starts Here',
    description:
      'Explore premium smart home devices and automation solutions by GM Smart Home.',
    url: 'https://www.gmautomation.co.in',
    siteName: 'GM Smart Home',
    images: [
      {
        url: 'https://www.gmautomation.co.in/logo.png', // your actual logo image URL
        width: 1200,
        height: 630,
        alt: 'GM Smart Home Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GM Smart Home | Smart Living Starts Here',
    description:
      'Explore premium smart home devices and automation solutions by GM Smart Home.',
    images: ['https://www.gmautomation.co.in/logo.png'], // your logo image here
  },
};



export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection/>
      
      <ServicesSection />
      
      <AssociatesSection/>
      <BenefitsSection/>
      <StatsSection />
      <TestimonialsSection/>
      <ContactFormSection/>
    </main>
  );
}
