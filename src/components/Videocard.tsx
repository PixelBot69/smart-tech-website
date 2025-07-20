'use client'

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  videoSrc: string;
  title: string;
  description?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  thumbnail, 
  videoSrc, 
  title, 
  description 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
        
        {!isPlaying ? (
          // Thumbnail View
          <div className="relative aspect-video cursor-pointer" onClick={handlePlayClick}>
            <img 
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-zinc-900/20"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 left-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-white text-xs font-medium">VIDEO</span>
              </div>
            </div>
          </div>
        ) : (
          // Video View
          <div className="relative aspect-video">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-cover"
              onLoadedData={handleVideoLoad}
              onError={() => setIsLoading(false)}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-light text-white group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          
          {description && (
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              {description}
            </p>
          )}

          {/* Progress bar indicator */}
          <div className="w-full h-px bg-zinc-800">
            <div className="h-full w-0 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;