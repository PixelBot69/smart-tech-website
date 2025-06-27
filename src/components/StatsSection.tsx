'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Home, Users, Clock, Star, ArrowRight } from 'lucide-react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(end.replace(/\D/g, ''));
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let lastCount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * endValue);
      
      if (currentCount !== lastCount) {
        lastCount = currentCount;
        setCount(currentCount);
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, endValue]);
  
  const formatted = end.includes('+') ? `${count}+` : 
                   end.includes('%') ? `${count}%` : count;
  return <>{formatted}</>;
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const stats = [
    { 
      number: "1500+", 
      label: "Homes Automated", 
      description: "Smart homes delivered",
      icon: <Home className="w-8 h-8" strokeWidth={1.5} />,
      color: "emerald"
    },
    { 
      number: "35+", 
      label: "Smart Home Experts", 
      description: "Certified professionals",
      icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
      color: "blue"
    },
    { 
      number: "12+", 
      label: "Years Experience", 
      description: "Industry expertise",
      icon: <Clock className="w-8 h-8" strokeWidth={1.5} />,
      color: "purple"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      description: "Happy customers",
      icon: <Star className="w-8 h-8" strokeWidth={1.5} />,
      color: "amber"
    }
  ];

  const colorClasses = {
    emerald: {
      bg: "from-emerald-500/10 to-green-500/10",
      border: "border-emerald-500/20",
      icon: "text-emerald-600",
      number: "from-emerald-600 to-emerald-500"
    },
    blue: {
      bg: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      icon: "text-blue-600",
      number: "from-blue-600 to-blue-500"
    },
    purple: {
      bg: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      icon: "text-purple-600",
      number: "from-purple-600 to-purple-500"
    },
    amber: {
      bg: "from-amber-500/10 to-yellow-500/10",
      border: "border-amber-500/20",
      icon: "text-amber-600",
      number: "from-amber-600 to-amber-500"
    }
  };
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, 
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Elegant grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="stats-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(255,255,255)" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="rgb(255,255,255)" opacity="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Our Impact</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Excellence</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming homes with cutting-edge automation solutions, backed by years of expertise and thousands of satisfied clients.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className={`group relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 ${colors.icon} group-hover:bg-zinc-700 group-hover:border-zinc-600 transition-all duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className={`text-5xl lg:text-6xl font-thin text-transparent bg-clip-text bg-gradient-to-r ${colors.number} leading-none`}>
                    {isVisible ? (
                      <AnimatedCounter end={stat.number} duration={2000 + index * 200} />
                    ) : (
                      "0"
                    )}
                  </div>
                  
                  {/* Label and Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white group-hover:text-zinc-100 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-zinc-400 font-light">
                      {stat.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="space-y-6">
            <p className="text-lg text-zinc-400 font-light">
              Ready to join thousands of satisfied customers?
            </p>
            
            <a
              href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 font-medium rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl">
                <span>Talk to an Expert</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;