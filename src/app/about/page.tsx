import React from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Award, Target, Heart, Lightbulb, Shield, Zap, CheckCircle, Star, Building, Home, Cpu } from 'lucide-react';

const AboutUsPage = () => {
  const stats = [
    { number: "1500+", label: "Homes Automated", icon: <Home className="w-6 h-6" /> },
    { number: "35+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "12+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously embrace cutting-edge technology to deliver the most advanced automation solutions.",
      color: "emerald"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Our solutions are built to last, ensuring consistent performance and peace of mind for our clients.",
      color: "blue"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every project, from design to installation and support.",
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Our smart solutions optimize energy consumption and streamline operations for maximum efficiency.",
      color: "amber"
    }
  ];

  const services = [
    {
      title: "ELV Systems",
      description: "Complete extra low voltage solutions including CCTV, access control, and structured cabling.",
      features: ["CCTV Surveillance", "Access Control", "Structured Cabling", "Intercom Systems"]
    },
    {
      title: "Home Automation",
      description: "Intelligent home control systems that integrate lighting, climate, entertainment, and security.",
      features: ["Lighting Control", "HVAC Management", "Entertainment Systems", "Security Integration"]
    },
    {
      title: "Smart Solutions",
      description: "Advanced ICT solutions, building management systems, and IoT integration for modern spaces.",
      features: ["BMS Integration", "Wi-Fi Solutions", "IoT Connectivity", "Energy Management"]
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "GM Automation was established with a vision to transform spaces through smart technology."
    },
    {
      year: "2015",
      title: "Major Expansion",
      description: "Expanded our services to include comprehensive home cinema and automation solutions."
    },
    {
      year: "2018",
      title: "Technology Innovation",
      description: "Introduced cutting-edge IoT and AI-powered automation systems to our portfolio."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Achieved recognition as a leading automation provider with 1500+ successful installations."
    }
  ];

  const colorClasses = {
    emerald: { bg: "from-emerald-500/10 to-green-500/10", border: "border-emerald-500/20", text: "text-emerald-600", icon: "text-emerald-600" },
    blue: { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20", text: "text-blue-600", icon: "text-blue-600" },
    purple: { bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20", text: "text-purple-600", icon: "text-purple-600" },
    amber: { bg: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/20", text: "text-amber-600", icon: "text-amber-600" }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f172a 50%, #134e4a 75%, #064e3b 100%)'
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">About GM Automation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Spaces</span>
              <br />Through Technology
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
            
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
              Since 2010, we've been pioneering smart automation solutions that enhance comfort, security, and efficiency 
              for homes and businesses across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20">
                  Start Your Project 
                </button>
              </a>
              <button className="px-8 py-4 border border-zinc-600 text-zinc-300 hover:bg-zinc-800 rounded-full font-medium transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-950 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-800 transition-colors">
                  <div className="text-emerald-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-thin text-white mb-2">{stat.number}</div>
                <div className="text-zinc-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Our Story</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                  Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Smart Living</span>
                </h2>
                
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              </div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-light">
                <p>
                  Founded in 2010, GM Automation & Solution began with a simple yet ambitious vision: to transform 
                  ordinary spaces into intelligent environments that enhance the way people live and work.
                </p>
                <p>
                  Over the past 12 years, we've evolved from a small automation company into a trusted leader in 
                  smart home and building solutions. Our journey has been marked by continuous innovation, unwavering 
                  commitment to quality, and a deep understanding of our clients' needs.
                </p>
                <p>
                  Today, we're proud to have automated over 1,500 homes and countless commercial spaces, each project 
                  reflecting our dedication to excellence and our passion for creating smarter, more efficient environments.
                </p>
              </div>
            </div>
            
            <div className="relative">
 <div className="relative">
  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/pic.jpg" // Make sure this image is in your /public folder
      alt="Company Image"
      fill
      className="object-cover"
    />
  </div>
</div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Our Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Drives Us</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const colors = colorClasses[value.color as keyof typeof colorClasses];
              return (
                <div key={index} className={`group p-8 rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-lg transition-all duration-300`}>
                  <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${colors.icon}`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-medium mb-4 ${colors.text}`}>{value.title}</h3>
                  <p className="text-zinc-600 leading-relaxed font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Our Expertise</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Solutions</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-200">
                <h3 className="text-2xl font-medium text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-light mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-zinc-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-600 text-sm font-medium tracking-wide uppercase">Our Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 mb-6 leading-tight">
              Milestones of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-thin">Excellence</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-light text-emerald-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-medium text-zinc-900 mb-4">{item.title}</h3>
                      <p className="text-zinc-600 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-emerald-500 rounded-full shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Let's Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Space</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
            
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to experience the future of smart living? Let's discuss how we can bring intelligence to your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20">
                  Start Your Project 
                </button>
              </a>
              <button className="px-8 py-4 border border-zinc-600 text-zinc-300 hover:bg-zinc-800 rounded-full font-medium transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;