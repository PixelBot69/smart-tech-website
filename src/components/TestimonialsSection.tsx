'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
 
  rating: number;
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
      
      rating: 5
    },
    {
      id: 2,
      quote: "EBSL Automat team worked closely with us to understand our project requirements and come up with optimised and cost-effective security and automation solutions for our project. We are very happy with their solutions and offerings. EBSL Automat brings in the discipline and...",
      name: "Vipul Kumat",
      title: "Managing Director",
      company: "DNR Corporation Pvt. Ltd.",
      avatar: "/testimonials/avatar2.png",
     
      rating: 4.5
    },
    {
      id: 3,
      quote: "Our preferred provider for security, automation, and luxury space needs is EBSL Automat. Their team has completed multiple projects for us with professionalism and subject matter expertise, delivering on time and with discipline. We are pleased with their services and...",
      name: "Somashekar HN",
      title: "General Manager",
      company: "Micro Labs Limited.",
      avatar: "/testimonials/avatar3.png",
     
      rating: 5
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle testimonial navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-lg">
            {star <= rating ? (
              <svg 
                className="w-5 h-5 text-yellow-400 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ) : star === Math.ceil(rating) && rating % 1 !== 0 ? (
              <svg 
                className="w-5 h-5 text-yellow-400 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              </svg>
            ) : (
              <svg 
                className="w-5 h-5 text-gray-300 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative mb-16">
          {/* Green accent line above heading */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="h-1 w-16 bg-green-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Discover how our smart solutions have transformed homes and businesses into safe, secure, and convenient spaces.
          </p>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
            >
              <div className="flex-1">
                {/* Quote icon */}
                <div className="flex justify-between items-center mb-4">
                  <svg className="w-10 h-10 text-green-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6c0 4.4-1.6 8-6 10 .4-2 2-4 2-8H2V8h8zm18 0v6c0 4.4-1.6 8-6 10 .4-2 2-4 2-8h-4V8h8z"/>
                  </svg>
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Testimonial content */}
                <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.quote}</p>
                <button className="text-green-600 text-sm font-medium hover:text-green-700 mb-6 focus:outline-none">
                  Read more
                </button>
              </div>
              
              {/* Testimonial footer */}
              <div className="flex items-center pt-4 border-t border-gray-100">
            
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <svg className="w-8 h-8 text-green-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v6c0 4.4-1.6 8-6 10 .4-2 2-4 2-8H2V8h8zm18 0v6c0 4.4-1.6 8-6 10 .4-2 2-4 2-8h-4V8h8z"/>
              </svg>
              <StarRating rating={testimonials[activeIndex].rating} />
            </div>
            
            <p className="text-gray-700 mb-4">{testimonials[activeIndex].quote}</p>
            <button className="text-green-600 text-sm font-medium hover:text-green-700 mb-6 focus:outline-none">
              Read more
            </button>
            
            <div className="flex items-center pt-4 border-t border-gray-100">
             
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full focus:outline-none transition-colors duration-200 ${
                    index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Company logos */}
    
      </div>
    </section>
  );
}