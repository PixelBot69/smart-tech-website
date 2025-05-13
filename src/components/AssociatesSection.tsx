'use client'

import React from 'react';
import Image from 'next/image';

interface Associate {
  id: number;
  name: string;
  logo: string;
}

interface Solution {
  id: number;
  name: string;
  logo: string;
}

export default function AssociatesSection() {
  const solutions: Solution[] = [
    { id: 1, name: "KNX", logo: "/logo/wifi.svg" },
    { id: 2, name: "Zigbee", logo: "/logo/zigbee.png" },
    { id: 3, name: "Z-Wave", logo: "/logo/z-wave.png" },
    { id: 4, name: "WiFi", logo: "/logo/knx.png" },
    { id: 5, name: "RF", logo: "/logo/RF.jpg" },
    { id: 6, name: "IoT", logo: "/logo/iot.png" },
  ];

  const associates: Associate[] = [
    { id: 1, name: "Crestron", logo: "/logo/cres.jpg" },
    { id: 2, name: "Panasonic", logo: "/logo/pana.png" },
    { id: 3, name: "Schneider Electric", logo: "/logo/sch.png" },
    { id: 4, name: "Casadigi", logo: "/logo/casa.png" },
    { id: 5, name: "RTI", logo: "/logo/rti.png" },
    { id: 6, name: "Savant", logo: "/logo/savant.png" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Solutions Column */}
          <div>
            <div className="relative mb-8">
              {/* Green accent line above heading */}
              <div className="absolute top-0 left-0 transform -translate-y-6">
                <div className="h-1 w-16 bg-green-500"></div>
              </div>
              <h2 className="text-4xl font-bold text-black">Solutions</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {solutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-24">
                  <Image 
                    src={solution.logo} 
                    alt={solution.name} 
                    width={120} 
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Associates Column */}
          <div>
            <div className="relative mb-8">
              {/* Green accent line above heading */}
              <div className="absolute top-0 left-0 transform -translate-y-6">
                <div className="h-1 w-16 bg-green-500"></div>
              </div>
              <h2 className="text-4xl font-bold text-black">Associates</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {associates.map((associate) => (
                <div key={associate.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-24">
                  <Image 
                    src={associate.logo} 
                    alt={associate.name} 
                    width={120} 
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
          >
            Discover More
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}