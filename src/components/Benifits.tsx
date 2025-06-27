'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Heart, Lightbulb, Smile, Smartphone, Mic, Puzzle, Shield, Home, Cloud, Wifi, ThermometerSun, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'comfort' | 'security' | 'efficiency' | 'control';
}

export default function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Healthy Living",
      description: "Monitor air quality and optimize environment",
      icon: <Heart className="w-8 h-8 stroke-1.5" />,
      category: 'comfort'
    },
    {
      id: 2,
      title: "Energy Savings",
      description: "Intelligent consumption management",
      icon: <Lightbulb className="w-8 h-8 stroke-1.5" />,
      category: 'efficiency'
    },
    {
      id: 3,
      title: "Peace of Mind",
      description: "Complete home monitoring and alerts",
      icon: <Smile className="w-8 h-8 stroke-1.5" />,
      category: 'security'
    },
    {
      id: 4,
      title: "Mobile Control",
      description: "Full control from anywhere",
      icon: <Smartphone className="w-8 h-8 stroke-1.5" />,
      category: 'control'
    },
    {
      id: 5,
      title: "Voice Control",
      description: "Hands-free home management",
      icon: <Mic className="w-8 h-8 stroke-1.5" />,
      category: 'control'
    },
    {
      id: 6,
      title: "GPS Integrated",
      description: "Location-based automation",
      icon: <Puzzle className="w-8 h-8 stroke-1.5" />,
      category: 'control'
    },
    {
      id: 7,
      title: "Smart Security",
      description: "Advanced protection systems",
      icon: <Shield className="w-8 h-8 stroke-1.5" />,
      category: 'security'
    },
    {
      id: 8,
      title: "Remote Access",
      description: "Control from anywhere in the world",
      icon: <Home className="w-8 h-8 stroke-1.5" />,
      category: 'control'
    },
    {
      id: 9,
      title: "Cloud Storage",
      description: "Secure data backup and sync",
      icon: <Cloud className="w-8 h-8 stroke-1.5" />,
      category: 'security'
    },
    {
      id: 10,
      title: "WiFi Management",
      description: "Optimized network performance",
      icon: <Wifi className="w-8 h-8 stroke-1.5" />,
      category: 'efficiency'
    },
    {
      id: 11,
      title: "Climate Control",
      description: "Perfect temperature automation",
      icon: <ThermometerSun className="w-8 h-8 stroke-1.5" />,
      category: 'comfort'
    },
    {
      id: 12,
      title: "Advanced Security",
      description: "Multi-layer protection protocols",
      icon: <Lock className="w-8 h-8 stroke-1.5" />,
      category: 'security'
    }
    
  ];

  const categoryColors = {
    comfort: { bg: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/20', text: 'text-emerald-600' },
    security: { bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', text: 'text-blue-600' },
    efficiency: { bg: 'from-amber-500/10 to-yellow-500/10', border: 'border-amber-500/20', text: 'text-amber-600' },
    control: { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', text: 'text-purple-600' }
  };

  // Determine how many items to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, benefits.length - visibleItems);

  const scrollToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / visibleItems;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, visibleItems]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        scrollToNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isHovering]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      scrollToNext();
    }
    if (touchStart - touchEnd < -75) {
      scrollToPrevious();
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Smart Benefits</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Smart Living</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            Create a living space that's safe, secure, and convenient, designed to perfectly match your lifestyle and exceed your expectations.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                width: `${benefits.length * (100 / visibleItems)}%`,
                transform: `translateX(-${currentIndex * (100 / benefits.length)}%)`
              }}
            >
              {benefits.map((benefit) => {
                const colors = categoryColors[benefit.category];
                return (
                  <div 
                    key={benefit.id} 
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / benefits.length}%` }}
                    onMouseEnter={() => setIsHovering(benefit.id)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <div 
                      className={`group relative h-full p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isHovering === benefit.id 
                          ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-xl scale-105` 
                          : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg'
                      }`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id={`pattern-${benefit.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="1" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#pattern-${benefit.id})`} />
                        </svg>
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                        {/* Icon Container */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isHovering === benefit.id 
                            ? `bg-white/80 ${colors.text}` 
                            : 'bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200'
                        }`}>
                          {benefit.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className={`text-xl font-medium transition-colors duration-300 ${
                            isHovering === benefit.id ? colors.text : 'text-zinc-900'
                          }`}>
                            {benefit.title}
                          </h3>
                          
                          <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${
                            isHovering === benefit.id ? 'text-zinc-700' : 'text-zinc-600'
                          }`}>
                            {benefit.description}
                          </p>
                        </div>
                        
                        {/* Category Indicator */}
                        <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          isHovering === benefit.id 
                            ? `bg-white/60 ${colors.text}` 
                            : 'bg-zinc-100 text-zinc-500'
                        }`}>
                          {benefit.category.charAt(0).toUpperCase() + benefit.category.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-200 transition-all duration-300 group"
                aria-label="Previous benefit"
                onClick={scrollToPrevious}
              >
                <ChevronLeft className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
              </button>
              <button 
                className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-200 transition-all duration-300 group"
                aria-label="Next benefit"
                onClick={scrollToNext}
              >
                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? 'w-8 h-2 bg-emerald-500' 
                      : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}