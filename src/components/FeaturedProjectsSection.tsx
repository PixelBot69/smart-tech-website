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
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-6">
        <div className="text-pink-500 text-sm font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link} 
          className="text-pink-500 font-medium hover:text-pink-700 transition duration-300 inline-flex items-center"
        >
          Read More
          <span className="ml-2">—</span>
        </Link>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Work</h2>
          <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Explore our latest projects through our video showcases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/0R8dfSjW3ZY" 
                title="RC Dream Villa Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Automation in Jaipur</h3>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/fpRhSrYrbXg" 
                title="RC Dream Villa Channel Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Latest Project Walkthrough</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {

  
  return (
    <>
 
      
      <VideoSection />
      
      
    </>
  );
};

export default ProjectsSection;