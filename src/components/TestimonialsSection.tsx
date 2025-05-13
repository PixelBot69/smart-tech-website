'use client';
import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  companyLogo: string;
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
      companyLogo: "/testimonials/sumadhura.png"
    },
    {
      id: 2,
      quote: "EBSL Automat team worked closely with us to understand our project requirements and come up with optimised and cost-effective security and automation solutions for our project. We are very happy with their solutions and offerings. EBSL Automat brings in the discipline and...",
      name: "Vipul Kumat",
      title: "Managing Director",
      company: "DNR Corporation Pvt. Ltd.",
      avatar: "/testimonials/avatar2.png",
      companyLogo: "/testimonials/dnr.png"
    },
    {
      id: 3,
      quote: "Our preferred provider for security, automation, and luxury space needs is EBSL Automat. Their team has completed multiple projects for us with professionalism and subject matter expertise, delivering on time and with discipline. We are pleased with their services and...",
      name: "Somashekar HN",
      title: "General Manager",
      company: "Micro Labs Limited.",
      avatar: "/testimonials/avatar3.png",
      companyLogo: "/testimonials/microlabs.png"
    },
    
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative">
          {/* Green accent line above heading */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="h-1 w-16 bg-green-500"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
          <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
            Discover how our smart solutions have transformed homes into safe, secure, and convenient spaces, reflecting unique lifestyles.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg p-8 shadow-md relative"
              >
               
                
                <div className="text-green-600 text-3xl mb-2">"</div>
                <p className="text-gray-800 mb-4">{testimonial.quote}</p>
                <a href="#" className="text-green-600 text-sm mb-8 inline-block">Read more</a>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium">{testimonial.name} - {testimonial.title}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
         
        </div>
      </div>
    </section>
  );
}