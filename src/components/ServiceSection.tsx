import React from 'react';
import Link from 'next/link';
import {
  Volume2, 
  Monitor, 
  Mic, 
  Cog, 
  Armchair,
  Gamepad,
  Camera,
  Network,
  KeySquare,
  HomeIcon,
  MessageSquare,
  Tv,
  Lightbulb,
  ChevronsUp,
  Thermometer,
  Music,
  Building,
  Wifi,
  Server,
  Phone,
  Sun,
  Lock,
  Radio,
  Cpu,
  Globe,
  BarChart3,
  Wind,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, href }) => {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
        <div className="relative">
          {/* Icon Container */}
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 group-hover:border-zinc-600 transition-all duration-300">
            <div className="text-zinc-300 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Title */}
        <h3 className="text-zinc-300 group-hover:text-white font-light text-sm tracking-wide transition-colors duration-300 leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
};

interface ServiceSectionProps {
  title: string;
  description: string;
  services: Array<{
    icon: React.ReactNode;
    title: string;
    href: string;
  }>;
  imageOnLeft: boolean;
  sectionImage: string;
  accent: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  description, 
  services, 
  imageOnLeft,
  sectionImage,
  accent
}) => {
  const accentColors = {
    emerald: {
      badge: 'from-emerald-500 to-emerald-600',
      dot: 'bg-emerald-400',
      border: 'border-emerald-500/20'
    },
    blue: {
      badge: 'from-blue-500 to-blue-600',
      dot: 'bg-blue-400',
      border: 'border-blue-500/20'
    },
    purple: {
      badge: 'from-purple-500 to-purple-600',
      dot: 'bg-purple-400',
      border: 'border-purple-500/20'
    },
    amber: {
      badge: 'from-amber-500 to-amber-600',
      dot: 'bg-amber-400',
      border: 'border-amber-500/20'
    },
    rose: {
      badge: 'from-rose-500 to-rose-600',
      dot: 'bg-rose-400',
      border: 'border-rose-500/20'
    }
  };

  const colors = accentColors[accent];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className={`w-3 h-3 rounded-full ${colors.dot} animate-pulse`}></div>
            <span className="text-zinc-400 text-sm font-medium tracking-widest uppercase">{title}</span>
          </div>
          
          <div className={`w-32 h-px bg-gradient-to-r ${colors.badge} mb-6`}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {imageOnLeft ? (
            <>
              {/* Image Section - Left */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={sectionImage} 
                    alt={`${title} visual representation`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-zinc-900/20"></div>
                </div>
                
                {/* Floating badge on image */}
                <div className="absolute top-6 left-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border ${colors.border}`}>
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                    <span className="text-white text-sm font-medium">{title}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section - Right */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                    {title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">{title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  
                  <p className="text-xl text-zinc-400 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 group/btn">
                    <span className="text-sm font-medium">View All {title} Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Section - Left */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                    {title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">{title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  
                  <p className="text-xl text-zinc-400 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 group/btn">
                    <span className="text-sm font-medium">View All {title} Services</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* Image Section - Right */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={sectionImage} 
                    alt={`${title} visual representation`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-zinc-900/20"></div>
                </div>
                
                {/* Floating badge on image */}
                <div className="absolute top-6 left-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border ${colors.border}`}>
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                    <span className="text-white text-sm font-medium">{title}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const SmartHomeServices: React.FC = () => {
  const elvSystemServices = [
    {
      icon: <Network size={24} strokeWidth={1.5} />,
      title: "STRUCTURED CABLING",
      href: "/elv-systems/structured-cabling"
    },
    {
      icon: <Camera size={24} strokeWidth={1.5} />,
      title: "CCTV SURVEILLANCE",
      href: "/elv-systems/cctv-surveillance"
    },
    {
      icon: <KeySquare size={24} strokeWidth={1.5} />,
      title: "ACCESS CONTROL",
      href: "/elv-systems/access-control"
    },
    {
      icon: <ChevronsUp size={24} strokeWidth={1.5} />,
      title: "PARKING MANAGEMENT",
      href: "/elv-systems/parking-management"
    },
    {
      icon: <Tv size={24} strokeWidth={1.5} />,
      title: "SMATV / IPTV",
      href: "/elv-systems/smatv-iptv"
    },
    {
      icon: <MessageSquare size={24} strokeWidth={1.5} />,
      title: "AUDIO/VIDEO INTERCOM",
      href: "/elv-systems/audio-video-intercom"
    },
    {
      icon: <Lock size={24} strokeWidth={1.5} />,
      title: "SMART LOCKS",
      href: "/elv-systems/smart-locks"
    },
    {
      icon: <Radio size={24} strokeWidth={1.5} />,
      title: "PUBLIC ADDRESS SYSTEMS",
      href: "/elv-systems/public-address-systems"
    }
  ];

  const ictSolutionsServices = [
    {
      icon: <Wifi size={24} strokeWidth={1.5} />,
      title: "WI-FI SOLUTIONS",
      href: "/ict-solutions/wifi-solutions"
    },
    {
      icon: <Server size={24} strokeWidth={1.5} />,
      title: "IT & SERVER SOLUTIONS",
      href: "/ict-solutions/it-server-solutions"
    },
    {
      icon: <Phone size={24} strokeWidth={1.5} />,
      title: "TELEPHONE & PABX",
      href: "/ict-solutions/telephone-pabx"
    },
    {
      icon: <Sun size={24} strokeWidth={1.5} />,
      title: "SOLAR SYSTEMS",
      href: "/ict-solutions/solar-systems"
    }
  ];

  const homeCinemaServices = [
    {
      icon: <Volume2 size={24} strokeWidth={1.5} />,
      title: "ACOUSTIC ROOMS",
      href: "/home-cinema/acoustic-rooms"
    },
    {
      icon: <Monitor size={24} strokeWidth={1.5} />,
      title: "LED WALLS/SCREENS",
      href: "/home-cinema/led-walls-screens"
    },
    {
      icon: <Mic size={24} strokeWidth={1.5} />,
      title: "CINEMA AUDIO/VIDEO",
      href: "/home-cinema/cinema-audio-video"
    },
    {
      icon: <Cog size={24} strokeWidth={1.5} />,
      title: "CINEMA AUTOMATION",
      href: "/home-cinema/cinema-automation"
    },
    {
      icon: <Armchair size={24} strokeWidth={1.5} />,
      title: "CINEMA SEATING",
      href: "/home-cinema/cinema-seating"
    },
    {
      icon: <Gamepad size={24} strokeWidth={1.5} />,
      title: "GAME ROOMS",
      href: "/home-cinema/game-rooms"
    }
  ];

  const homeAutomationServices = [
    {
      icon: <Lightbulb size={24} strokeWidth={1.5} />,
      title: "LIGHTING CONTROL",
      href: "/home-automation/lighting-control"
    },
    {
      icon: <ChevronsUp size={24} strokeWidth={1.5} />,
      title: "CURTAIN CONTROL",
      href: "/home-automation/curtain-control"
    },
    {
      icon: <Thermometer size={24} strokeWidth={1.5} />,
      title: "HVAC CONTROL",
      href: "/home-automation/hvac-control"
    },
    {
      icon: <Music size={24} strokeWidth={1.5} />,
      title: "MUSIC CONTROL",
      href: "/home-automation/music-control"
    },
    {
      icon: <Building size={24} strokeWidth={1.5} />,
      title: "SMART CITY & SMART SYSTEMS",
      href: "/home-automation/smart-city-systems"
    },
    {
      icon: <HomeIcon size={24} strokeWidth={1.5} />,
      title: "SELF-POWERED SMART HOMES",
      href: "/home-automation/self-powered-homes"
    }
  ];

  const bmsServices = [
    {
      icon: <Building size={24} strokeWidth={1.5} />,
      title: "INTELLIGENT BUILDING",
      href: "/bms/intelligent-building"
    },
    {
      icon: <Cpu size={24} strokeWidth={1.5} />,
      title: "INTEGRATED SERVICES",
      href: "/bms/integrated-services"
    },
    {
      icon: <Wind size={24} strokeWidth={1.5} />,
      title: "AIR QUALITY CONTROL",
      href: "/bms/air-quality-control"
    },
    {
      icon: <BarChart3 size={24} strokeWidth={1.5} />,
      title: "BTU METERING",
      href: "/bms/btu-metering"
    },
    {
      icon: <Globe size={24} strokeWidth={1.5} />,
      title: "INTERNET OF THINGS (IOT)",
      href: "/bms/internet-of-things"
    }
  ];

  return (
    <div className="bg-zinc-950">
      {/* Main Header Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Our Expertise</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-thin">Smart Solutions</span>
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed font-light">
              At GM Automation, we provide end-to-end smart home and building solutions designed to enhance comfort, 
              security, and efficiency. Our expert team delivers cutting-edge technology tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Sections */}
      <ServiceSection 
        title="ELV SYSTEMS" 
        description="Our Extra Low Voltage systems provide comprehensive security and communication solutions for residential and commercial properties, ensuring safety and connectivity through advanced technology integration."
        services={elvSystemServices}
        imageOnLeft={false}
        sectionImage="/els.jpg"
        accent="emerald"
      />
      
      <ServiceSection 
        title="ICT SOLUTIONS" 
        description="Our Information and Communications Technology solutions deliver robust networking infrastructure and innovative connectivity options for modern homes and businesses."
        services={ictSolutionsServices}
        imageOnLeft={true}
        sectionImage="/ict.jpg"
        accent="blue"
      />
      
      <ServiceSection 
        title="HOME CINEMA" 
        description="Transform your entertainment experience with our custom home cinema installations, featuring premium audio-visual equipment and professional acoustic treatments for the ultimate viewing experience."
        services={homeCinemaServices}
        imageOnLeft={false}
        sectionImage="/cinema.jpg"
        accent="purple"
      />
      
      <ServiceSection 
        title="HOME AUTOMATION" 
        description="Experience the convenience of fully automated living spaces with intelligent systems that control lighting, temperature, entertainment, and security from a single, intuitive interface."
        services={homeAutomationServices}
        imageOnLeft={true}
        sectionImage="/auto.jpg"
        accent="amber"
      />
      
      <ServiceSection 
        title="BMS" 
        description="Our Building Management Systems offer centralized control of your property's technical services, optimizing performance while reducing operational costs and environmental impact."
        services={bmsServices}
        imageOnLeft={false}
        sectionImage="/bms.jpg"
        accent="rose"
      />
    </div>
  );
};

export default SmartHomeServices;