import React from 'react';


import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ServicesSection from '@/components/ServiceSection';

import StatsSection from '@/components/StatsSection';
import HeroSection from '@/components/HeroSection';

import ContactFormSection from '../components/NewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AssociatesSection from '@/components/AssociatesSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection/>
      
      <ServicesSection />
      
      <AssociatesSection/>
     
      <StatsSection />
      <TestimonialsSection/>
      <ContactFormSection/>
    </main>
  );
}