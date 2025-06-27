import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, category, title, description, link }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/20 transition-all duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
            <span className="text-zinc-300 text-xs font-medium tracking-wide uppercase">{category}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-light text-white group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed font-light text-sm">
          {description}
        </p>
        
        {/* Read More Link */}
        <Link 
          href={link}
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 group/link"
        >
          <span className="text-sm font-medium">Explore Project</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Showcases</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Experience our latest innovations through immersive video walkthroughs of completed projects
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Video Card 1 */}
          <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
            <div className="relative">
              {/* Video Container */}
              <div className="relative aspect-video bg-zinc-800">
                <iframe
                  className="w-full h-full rounded-t-2xl"
                  src="https://www.youtube.com/embed/0R8dfSjW3ZY"
                  title="RC Dream Villa Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Play Overlay for Aesthetic */}
              <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-all duration-300 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Smart Home Project</span>
              </div>
              
              <h3 className="text-2xl font-light text-white group-hover:text-emerald-400 transition-colors duration-300">
                Automation in Jaipur
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-light">
                Complete home automation system featuring integrated lighting, security, and climate control for a luxury villa in Jaipur.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <button className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 group/btn">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-medium">View Details</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Video Card 2 */}
          <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
            <div className="relative">
              {/* Video Container */}
              <div className="relative aspect-video bg-zinc-800">
                <iframe
                  className="w-full h-full rounded-t-2xl"
                  src="https://www.youtube.com/embed/wV4byUYohXM"
                  title="RC Dream Villa Channel Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Play Overlay for Aesthetic */}
              <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-all duration-300 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Latest Innovation</span>
              </div>
              
              <h3 className="text-2xl font-light text-white group-hover:text-blue-400 transition-colors duration-300">
                Project Walkthrough
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-light">
                Comprehensive walkthrough of our latest smart home implementation featuring cutting-edge technology and seamless integration.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <button className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 group/btn">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-medium">View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
      
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