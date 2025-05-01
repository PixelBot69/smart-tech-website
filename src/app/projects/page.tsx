
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building, 
  Building2, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export default function ProjectsPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Modern Suburban Smart Home",
      description: "Complete smart home transformation for a family of four, featuring integrated security, climate control, and lighting systems.",
      image: "/suburban-home.jpg", // Add your image path
      type: "Residential",
      location: "Palo Alto, CA",
      completedFeatures: [
        "Voice-controlled lighting system",
        "Smart security with facial recognition",
        "Energy-efficient climate control",
        "Automated blinds and curtains"
      ],
      icon: <Home className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Luxury High-Rise Apartment Complex",
      description: "Building-wide smart technology implementation for a 30-story luxury apartment complex, enhancing security and resident comfort.",
      image: "/high-rise.jpg", // Add your image path
      type: "Multi-Family Residential",
      location: "San Francisco, CA",
      completedFeatures: [
        "Centralized building management system",
        "Individual unit smart controls",
        "Lobby security and visitor management",
        "Smart package delivery system"
      ],
      icon: <Building className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Tech Startup Headquarters",
      description: "Comprehensive smart office solution for a fast-growing tech company, optimizing workspace efficiency and employee comfort.",
      image: "/tech-office.jpg", // Add your image path
      type: "Commercial",
      location: "Austin, TX",
      completedFeatures: [
        "Smart meeting room scheduling",
        "Occupancy-based climate control",
        "Automated lighting for energy savings",
        "Advanced security and access control"
      ],
      icon: <Building2 className="h-6 w-6" />
    }
  ];

  // Featured case study
  const featuredProject = {
    title: "Smart City Initiative",
    description: "A landmark project transforming downtown areas with integrated IoT solutions, reducing energy consumption by 35% and improving public safety metrics by 28%.",
    image: "/smart-city.jpg", // Add your image path
    metrics: [
      { label: "Energy Reduction", value: "35%" },
      { label: "Safety Improvement", value: "28%" },
      { label: "Public Satisfaction", value: "92%" },
      { label: "Implementation Time", value: "18 months" }
    ]
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-emerald-700">Our Projects</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of completed smart home and building automation projects. 
          From residential homes to commercial complexes, we've helped clients across the country 
          transform their spaces with intelligent technology.
        </p>
      </div>

      {/* Featured Case Study */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">Featured Case Study</h2>
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto flex items-center justify-center">
              <p className="text-gray-600">Featured project image placeholder</p>
              {/* In a real implementation, you would use an image component here */}
              {/* <Image src={featuredProject.image} alt={featuredProject.title} fill className="object-cover" /> */}
            </div>
            <div className="md:w-1/2 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{featuredProject.title}</h3>
              <p className="mb-6">{featuredProject.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {featuredProject.metrics.map((metric, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <p className="text-xl font-bold">{metric.value}</p>
                    <p className="text-sm opacity-80">{metric.label}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-white text-emerald-700 hover:bg-emerald-50">
                View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <h2 className="text-2xl font-bold mb-6 text-emerald-600">Recent Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Project image placeholder</p>
              {/* In a real implementation, you would use an image component here */}
              {/* <Image src={project.image} alt={project.title} className="h-full w-full object-cover" /> */}
            </div>
            
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  {project.icon}
                </div>
                <span className="text-sm font-medium text-emerald-700">{project.type}</span>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {project.location}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <h4 className="font-medium mb-2">Implemented Features:</h4>
              <ul className="space-y-2">
                {project.completedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                View Project Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-emerald-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">Ready to Start Your Own Smart Home Project?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can transform your space with the latest in home automation technology.
          Our experts will work with you to design a custom solution that meets your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-800 hover:opacity-90">
            Schedule a Consultation
          </Button>
          <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
            View More Projects
          </Button>
        </div>
      </div>
    </div>
  );
}