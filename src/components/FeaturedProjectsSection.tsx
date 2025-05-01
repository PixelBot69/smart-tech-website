import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, category, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-emerald-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-emerald-600 font-medium hover:text-emerald-700 transition duration-300 flex items-center">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const FeaturedProjectsSection = () => {
  const projects = [
    {
      image: "/api/placeholder/600/400",
      category: "Smart Lighting",
      title: "Modern Villa Automation",
      description: "Complete smart home system with voice-controlled lighting, security, and climate control.",
      link: "/projects/villa-automation"
    },
    {
      image: "/api/placeholder/600/400",
      category: "Energy Management",
      title: "Eco-Friendly Smart Apartment",
      description: "Energy-efficient home automation system reducing consumption by 40% while enhancing comfort.",
      link: "/projects/eco-apartment"
    },
    {
      image: "/api/placeholder/600/400",
      category: "Security System",
      title: "Executive Home Protection",
      description: "Premium security suite with AI-powered surveillance, smart locks, and intrusion detection.",
      link: "/projects/executive-security"
    },
    {
      image: "/api/placeholder/600/400",
      category: "Entertainment System",
      title: "Connected Media Home",
      description: "Seamless multi-room audio/video experience with voice control and automated scene settings.",
      link: "/projects/media-home"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Installations</h2>
            <p className="text-gray-600">See how we've transformed homes with intelligent automation</p>
          </div>
          <Link 
            href="/projects"
            className="mt-4 md:mt-0 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Home?</h3>
              <p className="text-gray-600 mb-6">
                Our team of experts will design a custom smart home solution tailored to your specific needs and preferences. Schedule a free consultation today.
              </p>
              <Link
                href="/consultation"
                className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition duration-300 inline-flex items-center"
              >
                Book Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="bg-emerald-100 p-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  <circle cx="9" cy="8" r="2"></circle>
                  <circle cx="15" cy="8" r="2"></circle>
                  <path d="M9 12v-2"></path>
                  <path d="M15 12v-2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;