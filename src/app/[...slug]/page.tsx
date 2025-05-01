import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/content/service';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata, ResolvingMetadata } from 'next'
import type { NextPage } from 'next'
import { 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
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
      quote: "Everything they brought to us on day one of their build was exactly what we wanted.",
      author: "Gavin Cornell",
      position: "Creative Director",
      company: "Orbit Creative",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "My company needed a service that addressed several competing priorities.",
      author: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechForward",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with improved layout */}
      <div 
        className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 text-white overflow-hidden"
        style={{
          backgroundImage: service.heroBackground ? `url(${service.heroBackground})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        {/* Decorative patterns */}
       
        
        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4 backdrop-blur-sm">
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-white text-emerald-600 hover:bg-white/90 font-medium">
                Get Started <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-emerald-600 hover:bg-white/10">
                See Portfolio
              </Button>
            </div>
          </div>
          
          {/* Right side floating card with improved styling */}
          <div className="md:w-2/5 md:ml-auto">
            <Card className="bg-white/95 backdrop-blur-md text-black shadow-2xl border-0 w-full max-w-md rounded-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-800 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-amber-500" />
                  Expect to achieve
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Improved curved edge with subtle pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0,64 C288,128 576,32 864,80 C1152,128 1344,32 1440,48 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Main Content with improved spacing and layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main service description with improved visual hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <Badge className="bg-emerald-100 text-emerald-700 mb-2">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{service.title}</h2>
            <div className="w-20 h-1 bg-emerald-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Creating a consistent visual presence is tough but essential for a business to be perceived as an industry leader. We help brands like yours develop memorable and consistent digital presences.
            </p>
          
            {/* Service categories with improved styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
              <div>
                <h4 className="font-medium text-emerald-700 mb-3">Core Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">Creative Direction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">Brand Guides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">User Experience Design</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-emerald-700 mb-3">Additional Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">User Interface Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">Prototypes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">Web Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            {service.image && (
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                {/* Image overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </div>
        </div>
        
        {/* Our Process Section - New Addition */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 mb-2">How We Work</Badge>
            <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven approach ensures we deliver consistent results for every client we work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-emerald-600"></div>
                <CardContent className="pt-8">
                  <div className="bg-emerald-100 h-16 w-16 rounded-lg flex items-center justify-center mb-4 text-emerald-700">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  <div className="flex items-center text-emerald-600 mt-4 font-medium">
                    <span className="border-2 border-emerald-600 rounded-full flex items-center justify-center w-8 h-8">
                      {index + 1}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Dynamic content section with improved styling */}
        <div className="mb-24 bg-gray-50 p-8 rounded-3xl">
          <Badge className="bg-emerald-100 text-emerald-700 mb-2">About This Service</Badge>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">What We Offer</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-8"></div>
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-a:text-emerald-600 prose-a:font-medium prose-strong:text-emerald-700"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </div>
        
        {/* Features with improved card design */}
        {service.features && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-700 mb-2">Our Solution</Badge>
              <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've refined our approach to deliver exactly what your business needs to succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => {
                const [title, description] = feature.includes(':') 
                  ? [feature.split(':')[0], feature.split(':')[1]] 
                  : [feature, ''];
                
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="h-1 bg-emerald-600 transform origin-left group-hover:scale-x-110 transition-transform"></div>
                    <CardContent className="pt-6">
                      <div className="bg-emerald-100 h-12 w-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                        <CheckCircle className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{title}</h3>
                      <p className="text-gray-600">{description || title}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Testimonial Section with improved styling */}
        <div className="mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 opacity-20">
            <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
              <path d="M42.7,-64.9C54.9,-57.8,64.2,-45.1,70.1,-31.1C76,-17,78.6,-1.6,74.9,11.9C71.2,25.3,61.3,36.9,50.1,47.2C38.9,57.5,26.5,66.5,11.7,73C-3.1,79.5,-20.4,83.5,-35.3,78.9C-50.3,74.3,-62.9,61.2,-69.8,46C-76.8,30.9,-78,13.7,-76.8,-3.1C-75.5,-19.9,-71.8,-36.3,-62.3,-48.3C-52.8,-60.3,-37.5,-67.9,-23,-70.2C-8.4,-72.6,5.3,-69.6,19.7,-67.1C34.1,-64.6,49.2,-62.5,57.1,-54.6C65.1,-46.7,66,-33,66.3,-19.6C66.6,-6.2,66.2,6.8,63.1,18.7" fill="currentColor" />
            </svg>
          </div>
          
          <div className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-700 mb-2">Testimonials</Badge>
              <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto my-4"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 p-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="inline-block h-5 w-5 text-amber-400 mr-1" fill="currentColor" />
                      ))}
                    </div>
                    <p className="italic text-lg mb-6 text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Read More Success Stories
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Services Section with improved card design */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-700 mb-2">Explore More</Badge>
              <h2 className="text-3xl font-bold text-gray-800">Related Services</h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto my-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our other services can complement your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedServices.map(async (slug, index) => {
                const relatedService = await getServiceBySlug(slug.split('/'));
                if (!relatedService) return null;

                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-md overflow-hidden">
                    {relatedService.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={relatedService.image}
                          alt={relatedService.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <Badge className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-emerald-700">
                          Service
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{relatedService.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedService.description}</p>
                      <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 w-full" asChild>
                        <a href={`/${slug}`} className="flex items-center justify-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        
        {/* CTA Section with improved design */}
        <div className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 rounded-3xl p-12 text-white text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">Get Started Today</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-white text-emerald-600 hover:bg-white/90 font-medium">
                Request a Consultation <ArrowRightCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-emerald-600 hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
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
    title: `${service.title} | Your Company Name`,
    description: service.metaDescription || service.description,
}

}