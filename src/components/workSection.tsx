'use client'

import React from 'react';
import VideoCard from './Videocard';
import { ArrowRight } from 'lucide-react';

interface VideoProject {
  id: string;
  thumbnail: string;
  videoSrc: string;
  title: string;
  description?: string;
}

interface WorkSectionProps {
  projects: VideoProject[];
  title?: string;
  subtitle?: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllHref?: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({ 
  projects,
  title = "FEATURED WORK",
  subtitle = "Our Latest Projects",
  description = "Explore our portfolio of cutting-edge smart home and automation projects, showcasing innovative solutions that transform how people interact with their living and working spaces.",
  showViewAllButton = true,
  viewAllHref = "/portfolio"
}) => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-zinc-400 text-sm font-medium tracking-widest uppercase">{title}</span>
          </div>
          
          <div className="w-32 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mb-6"></div>
          
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              {subtitle.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">{subtitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              thumbnail={project.thumbnail}
              videoSrc={project.videoSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        {/* View All Button */}
      
      </div>
    </section>
  );
};

export default WorkSection;