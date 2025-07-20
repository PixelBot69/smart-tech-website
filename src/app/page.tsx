import React from 'react';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ServicesSection from '@/components/ServiceSection';
import StatsSection from '@/components/StatsSection';
import HeroSection from '@/components/HeroSection';
import ContactFormSection from '../components/NewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AssociatesSection from '@/components/AssociatesSection';
import BenefitsSection from '@/components/Benifits';
import WorkSection from '@/components/workSection'; // Add this import

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

// Define your video projects data
const featuredVideoProjects = [
  {
    id: '1',
    thumbnail: '/thumbnails/smart-home-demo.jpg',
    videoSrc: '/videos/smart-home-demo.mp4',
    title: 'Complete Home Automation',
    description: 'Full smart home integration with lighting, security, and climate control systems.'
  },
  {
    id: '2',
    thumbnail: '/thumbnails/security-system.jpg',
    videoSrc: '/videos/security-system.mp4',
    title: 'Advanced LED Solutions',
    description: 'Comprehensive LED and access control system installation for residential property.'
  },
  {
    id: '3',
    thumbnail: '/thumbnails/home-theater.jpg',
    videoSrc: '/videos/home-theater.mp4',
    title: 'Premium Home Cinema',
    description: 'Custom home theater with acoustic treatments and automated controls.'
  }
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection/>
      
      {/* Add WorkSection here - good placement after featured projects */}
     
      
      <ServicesSection />
      <AssociatesSection/>
       <WorkSection 
        projects={featuredVideoProjects}
        title="PROJECT SHOWCASE"
        subtitle="See Our Work"
        description="Watch our latest installations in action. From smart homes to commercial automation, see how we transform spaces with cutting-edge technology."
        showViewAllButton={true}
        viewAllHref="/portfolio"
      />
      <BenefitsSection/>
      <StatsSection />
      <TestimonialsSection/>
      <ContactFormSection/>
    </main>
  );
}