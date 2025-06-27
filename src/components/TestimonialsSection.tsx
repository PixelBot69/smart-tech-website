'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  category: 'residential' | 'commercial' | 'enterprise';
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "We are working with AUTOMAT on our multiple large scale projects and we are happy with the Right Technology Solutions provided in the field of Safety, Security, Convenience & Savings which is Beneficial to our end customer and at the same time they are very Cost Effective.",
      name: "G. Naveen Kumar",
      title: "Director",
      company: "Sumadhura Infracon Pvt. Ltd.",
      avatar: "/testimonials/avatar1.png",
      rating: 5,
      category: 'commercial'
    },
    {
      id: 2,
      quote: "EBSL Automat team worked closely with us to understand our project requirements and come up with optimised and cost-effective security and automation solutions for our project. We are very happy with their solutions and offerings. EBSL Automat brings in the discipline and professionalism.",
      name: "Vipul Kumat",
      title: "Managing Director",
      company: "DNR Corporation Pvt. Ltd.",
      avatar: "/testimonials/avatar2.png",
      rating: 5,
      category: 'enterprise'
    },
    {
      id: 3,
      quote: "Our preferred provider for security, automation, and luxury space needs is EBSL Automat. Their team has completed multiple projects for us with professionalism and subject matter expertise, delivering on time and with discipline. We are pleased with their services.",
      name: "Somashekar HN",
      title: "General Manager",
      company: "Micro Labs Limited.",
      avatar: "/testimonials/avatar3.png",
      rating: 5,
      category: 'enterprise'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const categoryColors = {
    residential: { bg: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-500' },
    commercial: { bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', dot: 'bg-blue-500' },
    enterprise: { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', dot: 'bg-purple-500' }
  };

  // Function to handle testimonial navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-current' : 'text-zinc-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Client Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Clients Say</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            Discover how our smart solutions have transformed homes and businesses into safe, secure, and convenient spaces.
          </p>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const colors = categoryColors[testimonial.category];
            return (
              <div
                key={testimonial.id}
                className={`group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 h-full flex flex-col ${
                  index === 1 ? 'lg:scale-105 lg:shadow-2xl' : ''
                }`}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${colors.dot}`}></div>
                      <span className="text-zinc-400 text-xs font-medium tracking-widest uppercase">
                        {testimonial.category}
                      </span>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  
                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <Quote className="w-8 h-8 text-zinc-600 mb-4" />
                    <p className="text-zinc-300 leading-relaxed font-light text-lg">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
               
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-zinc-400">{testimonial.title}</p>
                      <p className="text-xs text-zinc-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${categoryColors[testimonials[activeIndex].category].dot}`}></div>
                  <span className="text-zinc-400 text-xs font-medium tracking-widest uppercase">
                    {testimonials[activeIndex].category}
                  </span>
                </div>
                <StarRating rating={testimonials[activeIndex].rating} />
              </div>
              
              <Quote className="w-8 h-8 text-zinc-600 mb-4" />
              <p className="text-zinc-300 leading-relaxed font-light text-lg mb-6">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-zinc-400">{testimonials[activeIndex].title}</p>
                  <p className="text-xs text-zinc-500">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-zinc-400" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-zinc-400" />
                </button>
              </div>
              
              {/* Pagination dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex 
                        ? 'w-8 h-2 bg-emerald-500' 
                        : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Testimonial Highlight */}
        <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-800 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="testimonial-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-zinc-300 text-sm font-medium">Featured Review</span>
            </div>
            
            <Quote className="w-12 h-12 text-zinc-600 mx-auto" />
            
            <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed max-w-4xl mx-auto">
              "GM Automation transformed our office into a smart, efficient workspace. Their expertise in automation solutions is unmatched."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700"></div>
              <div className="text-left">
                <h4 className="text-lg font-medium text-white">Featured Client</h4>
                <p className="text-zinc-400">Technology Director</p>
                <p className="text-sm text-zinc-500">Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}