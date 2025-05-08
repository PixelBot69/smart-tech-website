'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Home, Lightbulb, Wifi, Shield, Activity } from 'lucide-react';

interface Slide {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    title: 'Smart Home Control Center',
    description: 'Manage your entire home from a single dashboard. From lighting to locks, enjoy seamless control and automation.',
    image: '/home.jpg',
    alt: 'Modern smart home control interface',
  },
  {
    title: 'Cinematic Smart TV Experience',
    description: 'Bring the theater to your living room with smart lighting, synced audio, and automated ambience adjustments.',
    image: '/tv.webp',
    alt: 'Smart TV setup with automated lights and sound',
  },
  {
    title: 'Structured Cabling Solutions',
    description: 'Ensure high-speed connectivity and efficient data management with professionally installed structured cabling systems.',
    image: '/Structure-Cabling.jpg',
    alt: 'Structured cabling installation in a modern setup',
  },
  {
    title: 'CCTV Surveillance Systems',
    description: 'Protect your property with advanced CCTV systems offering high-resolution video, night vision, and remote monitoring.',
    image: '/cctv.jpg',
    alt: 'CCTV surveillance camera setup',
  },
  {
    title: 'Access Control Systems',
    description: 'Secure your premises with cutting-edge access control, including biometric scanners, RFID, and smart locks.',
    image: '/acess control.jpg',
    alt: 'Biometric and smart lock access control system',
  },
  {
    title: 'LED Walls & Display Screens',
    description: 'Captivate your audience with vibrant LED walls and digital display screens perfect for events, retail, or boardrooms.',
    image: '/led.jpg',
    alt: 'Large LED display screen in a commercial space',
  },
  {
    title: 'Immersive Gaming Room Setup',
    description: 'Experience the ultimate gaming ambiance with responsive lighting, surround sound, and real-time environment control.',
    image: '/Gamingroom_tk700sti-A.avif',
    alt: 'High-end smart gaming room setup',
  },
];

const HeroSlider: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState<number>(0);

  const handleSelect = useCallback(() => {
    if (api) {
      requestAnimationFrame(() => {
        setCurrent(api.selectedScrollSnap());
      });
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on('select', handleSelect);
    return () => api.off('select', handleSelect);
  }, [api, handleSelect]);

  return (
    <section className="relative w-full bg-gradient-to-r from-emerald-600 to-teal-800 text-white overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative will-change-transform transform-gpu">
              <div className="relative h-[600px] sm:h-[700px] md:h-[800px] w-full">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="container mx-auto px-4 sm:px-6">
                    {/* Centered layout structure for both mobile and desktop */}
                    <div className="flex flex-col md:flex-row items-center justify-center h-full">
                      {/* Text section - centered on both mobile and desktop */}
                      <div className="w-full md:w-1/2 bg-emerald-700/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{slide.title}</h1>
                        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-emerald-100">{slide.description}</p>
                        <a href="tel:+919782730455">
  <Button className="bg-white text-emerald-700 hover:bg-emerald-100">
    Book a Demo
  </Button>
</a>

                      </div>
                      
                      {/* Visual card - improved visibility on larger screens */}
                      <div className="hidden md:block md:w-1/2 md:flex md:justify-center md:items-center ml-8">
                        {current === index && (
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/20 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <div className="w-full h-64 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-md flex items-center justify-center relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                  <Home size={200} className="text-white absolute inset-0" />
                                  <Lightbulb size={32} className="text-yellow-300 absolute top-8 left-8" />
                                  <Wifi size={32} className="text-blue-300 absolute top-8 right-8" />
                                  <Shield size={32} className="text-purple-300 absolute bottom-8 left-8" />
                                  <Activity size={32} className="text-red-300 absolute bottom-8 right-8" />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 border-2 border-white/40 rounded-full animate-pulse"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced visual element for mobile - better vertical spacing */}
                      <div className="md:hidden mt-4">
                        {current === index && (
                          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/20 inline-flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                              <Home size={24} className="text-white" />
                              <Lightbulb size={20} className="text-yellow-300" />
                              <Wifi size={20} className="text-blue-300" />
                              <Shield size={20} className="text-purple-300" />
                              <Activity size={20} className="text-red-300" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                current === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/40 text-white z-30 h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/40 text-white z-30 h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;