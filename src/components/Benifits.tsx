'use client'

import React, { useState } from 'react';
import { Heart, Lightbulb, Shield, Smartphone } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'comfort' | 'security' | 'efficiency' | 'control';
}

export default function BenefitsSection() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Healthy Living",
      description: "Monitor air quality and optimize environment for better health and comfort",
      icon: <Heart className="w-8 h-8 stroke-1.5" />,
      category: 'comfort'
    },
    {
      id: 2,
      title: "Energy Savings",
      description: "Intelligent consumption management reduces bills and environmental impact",
      icon: <Lightbulb className="w-8 h-8 stroke-1.5" />,
      category: 'efficiency'
    },
    {
      id: 3,
      title: "Smart Security",
      description: "Advanced protection systems with real-time monitoring and alerts",
      icon: <Shield className="w-8 h-8 stroke-1.5" />,
      category: 'security'
    },
    {
      id: 4,
      title: "Total Control",
      description: "Complete home management from anywhere using your smartphone",
      icon: <Smartphone className="w-8 h-8 stroke-1.5" />,
      category: 'control'
    }
  ];

  const categoryColors = {
    comfort: { bg: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/20', text: 'text-emerald-600' },
    security: { bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', text: 'text-blue-600' },
    efficiency: { bg: 'from-amber-500/10 to-yellow-500/10', border: 'border-amber-500/20', text: 'text-amber-600' },
    control: { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', text: 'text-purple-600' }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Smart Benefits</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Smart Living</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            Create a living space that's safe, secure, and convenient, designed to perfectly match your lifestyle and exceed your expectations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const colors = categoryColors[benefit.category];
            return (
              <div 
                key={benefit.id} 
                className="group relative"
                onMouseEnter={() => setIsHovering(benefit.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div 
                  className={`h-full p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isHovering === benefit.id 
                      ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-xl scale-105` 
                      : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg'
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`pattern-${benefit.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${benefit.id})`} />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovering === benefit.id 
                        ? `bg-white/80 ${colors.text}` 
                        : 'bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200'
                    }`}>
                      {benefit.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3 flex-grow flex flex-col justify-center">
                      <h3 className={`text-xl font-medium transition-colors duration-300 ${
                        isHovering === benefit.id ? colors.text : 'text-zinc-900'
                      }`}>
                        {benefit.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${
                        isHovering === benefit.id ? 'text-zinc-700' : 'text-zinc-600'
                      }`}>
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Category Indicator */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      isHovering === benefit.id 
                        ? `bg-white/60 ${colors.text}` 
                        : 'bg-zinc-100 text-zinc-500'
                    }`}>
                      {benefit.category.charAt(0).toUpperCase() + benefit.category.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}