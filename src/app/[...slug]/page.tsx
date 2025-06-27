import React from 'react';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/content/service';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle,  } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata,  } from 'next'

import { 
  CheckCircle, 
  ArrowRight, 

  ChevronRight, 
  Star, 
  ArrowRightCircle,
  Users,
  Activity,
  Briefcase
} from 'lucide-react';

// Updated interface to match Next.js expectations
// Replace your existing interface with this:
export interface ServicePageProps {
  params: { slug: string[] }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Service data interface
export interface ServiceData {
  title: string;
  description: string;
  content: string;
  image?: string;
  features?: string[];
  metaDescription?: string;
  relatedServices?: string[];
  heroBackground?: string; 
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  // Ensure params.slug is properly handled
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = await getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }


  const testimonials = [
  {
    quote: "From the very first day, they understood our vision perfectly and delivered exactly what we had in mind.",
    author: "Rajeev Mehta",
    position: "Creative Director",
    company: "Desi Innovations",
    avatar: "/api/placeholder/40/40"
  },
  {
    quote: "Our business had multiple challenges, and their service helped us manage everything smoothly.",
    author: "Ananya Sharma",
    position: "Operations Manager",
    company: "FutureTech India",
    avatar: "/api/placeholder/40/40"
  }
];


  const outcomes = [
    "An elevated perception of your business by the outside world",
    "A cohesive visual identity",
    "A unique and memorable brand"
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We begin with a deep dive into your business goals, audience, and market position.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs.",
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: "Implementation",
      description: "Our team of experts brings the strategy to life with precision and creativity.",
      icon: <Briefcase className="h-8 w-8" />
    }]

  return (
    <div className="min-h-screen bg-zinc-950">
      
      {/* Premium Hero Section with Enhanced Visibility */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0c0c0c 0%, #1e1e1e 25%, #111827 50%, #0f1419 75%, #030712 100%)`,
          backgroundImage: service.heroBackground ? `url(${service.heroBackground})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Enhanced Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/60 via-transparent to-zinc-950/40"></div>
        
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="luxury-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(255,255,255)" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="1.5" fill="rgb(255,255,255)" opacity="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#luxury-grid)" />
          </svg>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Enhanced Visibility */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-xl">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-zinc-200 text-sm font-medium tracking-wide uppercase">Professional Services</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight">
                  <span className="block text-white drop-shadow-lg">{service.title.split(' ')[0]}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin drop-shadow-lg">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-zinc-200 leading-relaxed max-w-2xl font-light drop-shadow-md mx-auto lg:mx-0">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-zinc-600 text-black hover:bg-zinc-800 hover:text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            
            {/* Right Side - Premium Outcomes Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-zinc-900/90 backdrop-blur-2xl border border-zinc-700/50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-zinc-300 text-sm font-medium tracking-widest uppercase">Expected Outcomes</span>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-light text-white">What You'll Achieve</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-2 w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0 group-hover:bg-blue-400 transition-colors"></div>
                      <span className="text-zinc-200 leading-relaxed font-light">{outcome}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-zinc-700/50">
                    <a
                      href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-zinc-600 text-black hover:bg-zinc-800 hover:text-white rounded-full py-3 backdrop-blur-sm"
                      >
                        Schedule Consultation
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Content Sections */}
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        
        {/* Service Overview - Enhanced Premium Design */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-700 text-sm font-medium tracking-wide uppercase">Our Expertise</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                    {service.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-thin">{service.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                  
                  <p className="text-xl text-zinc-600 leading-relaxed font-light">
                    Creating a consistent visual presence is essential for businesses to be perceived as industry leaders. 
                    We craft memorable and cohesive digital experiences that elevate your brand to new heights.
                  </p>
                </div>
                
                {/* Premium Services Grid */}
               <div className="grid grid-cols-1 gap-10">
  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200/50 shadow-lg">
    <h4 className="text-lg font-medium text-emerald-800 mb-6 tracking-wide">Core Automation Services</h4>
    <div className="space-y-5">
      {[
        'Home Automation Systems',
        'Industrial Process Automation',
        'IoT Device Integration',
      ].map((service, index) => (
        <div key={index} className="flex items-center gap-4 group">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center group-hover:bg-emerald-600 transition-colors shadow-md">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-zinc-800 font-medium">{service}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200/50 shadow-lg">
    <h4 className="text-lg font-medium text-blue-800 mb-6 tracking-wide">Additional Automation Services</h4>
    <div className="space-y-5">
      {[
        'Smart Lighting Solutions',
        'Security & Surveillance Automation',
        'Energy Management Systems',
      ].map((service, index) => (
        <div key={index} className="flex items-center gap-4 group">
          <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-md">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-zinc-800 font-medium">{service}</span>
        </div>
      ))}
    </div>
  </div>
</div>

              </div>
              
              <div className="lg:col-span-7">
                {service.image && (
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 mix-blend-multiply"></div>
                    
                    {/* Premium overlay badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-bold text-zinc-800">Premium Solution</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Brand Logos Section */}
        {service.brandLogos && service.brandLogos.length > 0 && (
          <section className="py-20 bg-white border-t border-zinc-200">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50 border border-purple-200 mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 text-sm font-medium tracking-wide uppercase">Trusted Partners</span>
                </div>
                <h2 className="text-3xl font-light text-zinc-900 mb-4">Industry Leaders Trust Us</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {service.brandLogos.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-zinc-100 h-24 flex items-center justify-center"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={140}
                      height={70}
                      className="object-contain max-h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Premium Process Section */}
        <section className="py-32 bg-gradient-to-b from-white to-zinc-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium tracking-wide uppercase">Our Process</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6">How We Deliver Excellence</h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
                Our refined methodology ensures exceptional results through strategic thinking and meticulous execution.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden rounded-3xl">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:h-3 transition-all duration-300"></div>
                  <CardContent className="p-10">
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
                        </div>
                        <span className="text-8xl font-thin text-zinc-100 group-hover:text-zinc-200 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl font-medium text-zinc-900">{step.title}</h3>
                        <p className="text-zinc-600 leading-relaxed font-light text-lg">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Premium Content Section */}
        <section className="py-32 bg-gradient-to-br from-zinc-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-50 border border-purple-200 mb-8">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 text-sm font-medium tracking-wide uppercase">Service Details</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6">What We Offer</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-zinc-200">
                <div className="prose prose-xl prose-zinc max-w-none">
                  <div
                    className="text-zinc-700 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Premium Features Section */}
        {service.features && (
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-50 border border-amber-200 mb-8">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-amber-700 text-sm font-medium tracking-wide uppercase">Key Features</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6">What's Included</h2>
                <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
                  We've refined our approach to deliver exactly what your business needs to succeed.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {service.features.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0], feature.split(':')[1]] 
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="group bg-gradient-to-br from-zinc-50 to-white p-8 rounded-2xl border border-zinc-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-medium text-zinc-900">{title}</h3>
                      </div>
                      {description && (
                        <p className="text-zinc-600 font-light leading-relaxed">{description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
      
      {/* Premium Dark Testimonials Section */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Client Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl lg:text-2xl text-zinc-200 leading-relaxed font-light">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-6 pt-6 border-t border-zinc-800">
                    
                      <div>
                        <p className="font-medium text-white text-lg">{testimonial.author}</p>
                        <p className="text-zinc-400 font-light">{testimonial.position}</p>
                        <p className="text-sm text-zinc-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="py-32 bg-zinc-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-50 border border-rose-200 mb-8">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <span className="text-rose-700 text-sm font-medium tracking-wide uppercase">Explore More</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6">Related Services</h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
                Discover how our other premium services can complement your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {service.relatedServices.map(async (slug, index) => {
                const relatedService = await getServiceBySlug(slug.split('/'));
                if (!relatedService) return null;

                return (
                  <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl bg-white">
                    {relatedService.image && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={relatedService.image}
                          alt={relatedService.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 mix-blend-multiply"></div>
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-bold text-zinc-800">Premium Service</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-zinc-900">{relatedService.title}</h3>
                        <p className="text-zinc-600 font-light text-lg leading-relaxed line-clamp-2">{relatedService.description}</p>
                        <Button 
                          variant="outline" 
                          className="w-full border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 rounded-full py-3 font-medium transition-all duration-300"
                          asChild
                        >
                          <a href={`/${slug}`} className="flex items-center justify-center">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}
      
      {/* Premium CTA Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Premium pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="premium-dots" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" />
                <circle cx="15" cy="15" r="1" fill="white" opacity="0.5" />
                <circle cx="45" cy="45" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#premium-dots)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-2xl">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Business?</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
              
              <p className="text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                Let's create something exceptional together. Schedule a consultation to discuss your project and discover how we can elevate your brand.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25 text-lg"
                >
                  Start Your Project <ArrowRightCircle className="ml-3 h-6 w-6" />
                </Button>
              </a>
      
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static routes for all known services
export async function generateStaticParams() {
  const serviceData = await import('@/content/service');
  return serviceData.getAllServiceSlugs().map(slug => ({ slug }));
}

// Generate metadata for the page - FIXED VERSION
// Make sure to await the params.slug properly
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | GM Automation & Solution`,
    description: service.metaDescription || service.description,
  }
}