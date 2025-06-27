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
import { Home, Lightbulb, Wifi, Shield, Activity, ArrowRight } from 'lucide-react';

interface Slide {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

const slides: Slide[] = [
  {
    title: 'Smart Home Control',
    description: 'Manage your entire home from a single dashboard. From lighting to locks, enjoy seamless control and automation.',
    image: '/home.jpg',
    alt: 'Modern smart home control interface',
    category: 'Home Automation',
  },
  {
    title: 'Cinematic Experience',
    description: 'Bring the theater to your living room with smart lighting, synced audio, and automated ambience adjustments.',
    image: '/tv.webp',
    alt: 'Smart TV setup with automated lights and sound',
    category: 'Entertainment',
  },
  {
    title: 'Structured Cabling',
    description: 'Ensure high-speed connectivity and efficient data management with professionally installed structured cabling systems.',
    image: '/Structure-Cabling.jpg',
    alt: 'Structured cabling installation in a modern setup',
    category: 'Infrastructure',
  },
  {
    title: 'CCTV Surveillance',
    description: 'Protect your property with advanced CCTV systems offering high-resolution video, night vision, and remote monitoring.',
    image: '/cctv.jpg',
    alt: 'CCTV surveillance camera setup',
    category: 'Security',
  },
  {
    title: 'Access Control',
    description: 'Secure your premises with cutting-edge access control, including biometric scanners, RFID, and smart locks.',
    image: '/acess control.jpg',
    alt: 'Biometric and smart lock access control system',
    category: 'Security',
  },
  {
    title: 'LED Display Solutions',
    description: 'Captivate your audience with vibrant LED walls and digital display screens perfect for events, retail, or boardrooms.',
    image: '/led.jpg',
    alt: 'Large LED display screen in a commercial space',
    category: 'Display',
  },
  {
    title: 'Gaming Environment',
    description: 'Experience the ultimate gaming ambiance with responsive lighting, surround sound, and real-time environment control.',
    image: '/Gamingroom_tk700sti-A.avif',
    alt: 'High-end smart gaming room setup',
    category: 'Gaming',
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

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full h-screen bg-zinc-950 overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <div className="relative w-full h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  {/* Sophisticated Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/20"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                      
                      {/* Left Content */}
                      <div className="space-y-8 text-white">
                        <div className="space-y-6">
                          {/* Category Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">
                              {slide.category}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                            <span className="block text-zinc-100">
                              {slide.title.split(' ')[0]}
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">
                              {slide.title.split(' ').slice(1).join(' ')}
                            </span>
                          </h1>
                          
                          {/* Description */}
                          <p className="text-xl text-zinc-300 leading-relaxed max-w-lg font-light">
                            {slide.description}
                          </p>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button 
                              size="lg" 
                              className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20"
                            >
                              Book Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                    
                        </div>
                      </div>
                      
                      {/* Right Side - Minimalist Tech Visualization */}
                      <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                          {/* Main Circle */}
                          <div className="w-80 h-80 rounded-full border border-zinc-700/30 bg-zinc-900/20 backdrop-blur-xl flex items-center justify-center">
                            
                            {/* Inner Elements */}
                            <div className="relative w-64 h-64">
                              {/* Center Icon */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                  <Home className="h-10 w-10 text-white" />
                                </div>
                              </div>
                              
                              {/* Floating Icons */}
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                                <Lightbulb className="h-6 w-6 text-emerald-400" />
                              </div>
                              
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse delay-1000">
                                <Wifi className="h-6 w-6 text-blue-400" />
                              </div>
                              
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse delay-2000">
                                <Shield className="h-6 w-6 text-purple-400" />
                              </div>
                              
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse delay-3000">
                                <Activity className="h-6 w-6 text-red-400" />
                              </div>
                              
                              {/* Connecting Lines */}
                              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                                <g stroke="rgb(113 113 122)" strokeWidth="1" fill="none" opacity="0.3">
                                  <line x1="128" y1="32" x2="128" y2="96" strokeDasharray="4,4" className="animate-pulse" />
                                  <line x1="224" y1="128" x2="160" y2="128" strokeDasharray="4,4" className="animate-pulse delay-1000" />
                                  <line x1="128" y1="224" x2="128" y2="160" strokeDasharray="4,4" className="animate-pulse delay-2000" />
                                  <line x1="32" y1="128" x2="96" y2="128" strokeDasharray="4,4" className="animate-pulse delay-3000" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Outer Ring Animation */}
                          <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-emerald-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Tech Visualization */}
                <div className="lg:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-zinc-900/50 backdrop-blur-xl p-4 rounded-2xl border border-zinc-700/30">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Lightbulb className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Wifi className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Elegant Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 ${
                current === index 
                  ? 'w-8 h-2 bg-white rounded-full' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Minimal Navigation Arrows - Hidden on mobile */}
        <CarouselPrevious className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-800/70 border-zinc-700/50 text-white backdrop-blur-sm z-30 h-12 w-12 rounded-full transition-all duration-300" />
        <CarouselNext className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-800/70 border-zinc-700/50 text-white backdrop-blur-sm z-30 h-12 w-12 rounded-full transition-all duration-300" />
      </Carousel>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSlider;