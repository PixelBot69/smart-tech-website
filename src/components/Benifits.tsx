'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Heart, Lightbulb, Smile, Smartphone, Mic, Puzzle, Shield, Home, Cloud, Wifi, ThermometerSun, Lock } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export default function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Healthy Living",
      icon: <Heart className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 2,
      title: "Energy Savings",
      icon: <Lightbulb className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 3,
      title: "Peace of Mind",
      icon: <Smile className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 4,
      title: "Mobile Control",
      icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 5,
      title: "Voice Control",
      icon: <Mic className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 6,
      title: "GPS Integrated",
      icon: <Puzzle className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 7,
      title: "Smart Security",
      icon: <Shield className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 8,
      title: "Remote Access",
      icon: <Home className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 9,
      title: "Cloud Storage",
      icon: <Cloud className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 10,
      title: "WiFi Management",
      icon: <Wifi className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 11,
      title: "Climate Control",
      icon: <ThermometerSun className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    },
    {
      id: 12,
      title: "Advanced Security",
      icon: <Lock className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
    }
  ];

  // Determine how many items to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(6);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 640) {
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
      // Loop back to beginning for infinite scroll
      setCurrentIndex(0);
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to end for infinite scroll
      setCurrentIndex(maxIndex);
    }
  };

  // Create a smooth scroll effect when currentIndex changes
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / visibleItems;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, visibleItems]);

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      scrollToNext(); // Swipe left
    }
    if (touchStart - touchEnd < -75) {
      scrollToPrevious(); // Swipe right
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative mb-8 md:mb-12">
          {/* Green accent line */}
          <div className="absolute left-0 top-[-1rem] h-1 w-16 bg-green-500 mb-2"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-6">Benefits & Features</h2>
          <p className="mt-3 md:mt-4 text-gray-700 max-w-4xl text-sm md:text-base">
            Create a living space that's safe, secure, and convenient, designed to match your lifestyle.
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel container with overflow for scrolling */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex" 
              style={{ 
                width: `${benefits.length * (100 / visibleItems)}%`,
                transform: `translateX(-${currentIndex * (100 / benefits.length)}%)`
              }}
            >
              {benefits.map((benefit) => (
                <div 
                  key={benefit.id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / benefits.length}%` }}
                  onMouseEnter={() => setIsHovering(benefit.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div 
                    className={`flex flex-col items-center text-center p-4 md:p-6 mx-1 md:mx-2 rounded-lg transition-all duration-300 ${
                      isHovering === benefit.id ? 'shadow-lg bg-gray-50' : ''
                    }`}
                  >
                    <div 
                      className={`mb-3 md:mb-4 ${
                        isHovering === benefit.id ? 'text-green-500' : 'text-gray-800'
                      }`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="font-medium text-base md:text-lg">{benefit.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows with improved positioning and styling */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-12 space-x-4">
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors duration-300 border border-gray-200 shadow-sm"
              aria-label="Previous benefit"
              onClick={scrollToPrevious}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors duration-300 border border-gray-200 shadow-sm"
              aria-label="Next benefit"
              onClick={scrollToNext}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-1">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-green-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}