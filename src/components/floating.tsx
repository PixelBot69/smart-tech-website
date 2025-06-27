'use client';

import React, { useState } from 'react';
import { Instagram, Youtube, Twitter, Facebook, Linkedin } from 'lucide-react';

const FloatingSocialDock = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />,
      href: 'https://www.instagram.com/gm_automationnsolution',
      bgColor: 'bg-pink-500 hover:bg-pink-600',
      textColor: 'text-white'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />,
      href: 'https://www.youtube.com/@RCDreamVilla/videos',
      bgColor: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-white'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />,
      href: 'https://twitter.com/gmautomation',
      bgColor: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-white'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />,
      href: 'https://www.facebook.com/share/1HoxLRCLUb/',
      bgColor: 'bg-blue-700 hover:bg-blue-800',
      textColor: 'text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6" />,
      href: 'https://www.linkedin.com/in/mayank-mathur-32495262',
      bgColor: 'bg-[#0a66c2] hover:bg-[#004182]',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="fixed right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">
      <div 
        className="flex flex-col gap-2 sm:gap-2.5 md:gap-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${social.bgColor} rounded-full flex items-center justify-center ${social.textColor} shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
            aria-label={social.name}
          >
            {social.icon}
            
            {/* Label on hover - Hidden on mobile for better UX */}
            <div className={`hidden sm:block absolute right-full mr-3 px-3 py-1 bg-zinc-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}>
              {social.name}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-zinc-900"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocialDock;