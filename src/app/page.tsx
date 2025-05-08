import React from 'react';


import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ServicesSection from '@/components/ServiceSection';

import StatsSection from '@/components/StatsSection';
import HeroSection from '@/components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactFormSection from '../components/NewsletterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection/>
      
      <ServicesSection />
      
      
      <StatsSection />
      <ContactFormSection/>
    </main>
  );
}