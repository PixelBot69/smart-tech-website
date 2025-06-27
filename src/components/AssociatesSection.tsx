'use client'

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Technology Partners</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Partnerships</span>
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            We collaborate with industry-leading technology providers to deliver cutting-edge solutions and ensure the highest quality standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Solutions Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase">Technology Solutions</span>
              </div>
              
              <h3 className="text-3xl font-light text-zinc-900 leading-tight">
                Smart <span className="text-emerald-600 font-normal">Protocols</span>
              </h3>
              
              <div className="w-12 h-px bg-emerald-500"></div>
              
              <p className="text-zinc-600 leading-relaxed font-light">
                Advanced communication protocols and wireless technologies that power our smart home ecosystem.
              </p>
            </div>
            
            {/* Solutions Grid */}
            <div className="grid grid-cols-3 gap-4">
              {solutions.map((solution) => (
                <div 
                  key={solution.id} 
                  className="group bg-white rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={solution.logo}
                      alt={solution.name}
                      width={80}
                      height={40}
                      className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Associates Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase">Brand Partners</span>
              </div>
              
              <h3 className="text-3xl font-light text-zinc-900 leading-tight">
                Industry <span className="text-blue-600 font-normal">Leaders</span>
              </h3>
              
              <div className="w-12 h-px bg-blue-500"></div>
              
              <p className="text-zinc-600 leading-relaxed font-light">
                Partnering with world-renowned brands to deliver premium automation and control solutions.
              </p>
            </div>
            
            {/* Associates Grid */}
            <div className="grid grid-cols-3 gap-4">
              {associates.map((associate) => (
                <div 
                  key={associate.id} 
                  className="group bg-white rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={associate.logo}
                      alt={associate.name}
                      width={100}
                      height={50}
                      className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="space-y-6">
            <p className="text-lg text-zinc-600 font-light">
              Interested in learning more about our technology partnerships?
            </p>
            
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <span>Discover Our Solutions</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}