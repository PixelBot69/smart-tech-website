'use client'
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 1800 }) => {
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
      
      // Smooth easing with less computation
      const easedProgress = 1 - Math.pow(1 - progress, 2.5);
      const currentCount = Math.floor(easedProgress * endValue);
      
      // Only update state when the count changes
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
  
  const formatted = end.includes('+') ? `${count}+` : count;
  return <>{formatted}</>;
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const stats = [
    { number: "1500+", label: "Homes Automated", icon: "🏡" },
    { number: "35+", label: "Smart Home Experts", icon: "👨‍💻" },
    { number: "12+", label: "Years Experience", icon: "⏱️" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" }
  ];
  
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
      className="py-20 bg-gradient-to-b from-emerald-700 to-emerald-800 text-white relative"
    >
      {/* Simple top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-emerald-50">
            Smart Home Excellence
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Transforming homes with cutting-edge automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-xl bg-emerald-800 shadow-lg border-t border-emerald-600/30 hover:shadow-emerald-600/20 transition duration-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 text-2xl">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-emerald-200 text-transparent bg-clip-text">
                {isVisible ? (
                  <AnimatedCounter end={stat.number} duration={1800} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-emerald-100 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
        <a href="tel:+919782730455">
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:shadow-md hover:translate-y-px transition-all duration-300">
            Talk to an Expert
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;