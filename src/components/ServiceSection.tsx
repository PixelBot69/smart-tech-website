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
  Wind
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-20 h-20 flex items-center justify-center">
          <div className="text-emerald-600">
            {icon}
          </div>
        </div>
        <h3 className="text-emerald-700 font-medium uppercase text-sm">{title}</h3>
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
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  description, 
  services, 
  imageOnLeft,
  sectionImage
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <div className="bg-emerald-600 text-white py-3 px-6 inline-block rounded-r-full">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <div className="h-1 bg-gray-200 w-full mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch">
          {imageOnLeft ? (
            <>
              {/* Image Section - Left */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="h-full rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={sectionImage} 
                    alt={`${title} visual representation`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Section - Right */}
              <div className="w-full md:w-1/2">
                <div className="mb-6">
                  <p className="text-gray-600">{description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Section - Left */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="mb-6">
                  <p className="text-gray-600">{description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </div>
              </div>
              
              {/* Image Section - Right */}
              <div className="w-full md:w-1/2">
                <div className="h-full rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={sectionImage} 
                    alt={`${title} visual representation`} 
                    className="w-full h-full object-cover"
                  />
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
      icon: <Network size={36} strokeWidth={1.5} />,
      title: "STRUCTURED CABLING",
      href: "/elv-systems/structured-cabling"
    },
    {
      icon: <Camera size={36} strokeWidth={1.5} />,
      title: "CCTV SURVEILLANCE",
      href: "/elv-systems/cctv-surveillance"
    },
    {
      icon: <KeySquare size={36} strokeWidth={1.5} />,
      title: "ACCESS CONTROL",
      href: "/elv-systems/access-control"
    },
    {
      icon: <ChevronsUp size={36} strokeWidth={1.5} />,
      title: "PARKING MANAGEMENT",
      href: "/elv-systems/parking-management"
    },
    {
      icon: <Tv size={36} strokeWidth={1.5} />,
      title: "SMATV / IPTV",
      href: "/elv-systems/smatv-iptv"
    },
    {
      icon: <MessageSquare size={36} strokeWidth={1.5} />,
      title: "AUDIO/VIDEO INTERCOM",
      href: "/elv-systems/audio-video-intercom"
    },
    {
      icon: <Lock size={36} strokeWidth={1.5} />,
      title: "SMART LOCKS",
      href: "/elv-systems/smart-locks"
    },
    {
      icon: <Radio size={36} strokeWidth={1.5} />,
      title: "PUBLIC ADDRESS SYSTEMS",
      href: "/elv-systems/public-address-systems"
    }
  ];

  const ictSolutionsServices = [
    {
      icon: <Wifi size={36} strokeWidth={1.5} />,
      title: "WI-FI SOLUTIONS",
      href: "/ict-solutions/wifi-solutions"
    },
    {
      icon: <Server size={36} strokeWidth={1.5} />,
      title: "IT & SERVER SOLUTIONS",
      href: "/ict-solutions/it-server-solutions"
    },
    {
      icon: <Phone size={36} strokeWidth={1.5} />,
      title: "TELEPHONE & PABX",
      href: "/ict-solutions/telephone-pabx"
    },
    {
      icon: <Sun size={36} strokeWidth={1.5} />,
      title: "SOLAR SYSTEMS",
      href: "/ict-solutions/solar-systems"
    }
  ];

  const homeCinemaServices = [
    {
      icon: <Volume2 size={36} strokeWidth={1.5} />,
      title: "ACOUSTIC ROOMS",
      href: "/home-cinema/acoustic-rooms"
    },
    {
      icon: <Monitor size={36} strokeWidth={1.5} />,
      title: "LED WALLS/SCREENS",
      href: "/home-cinema/led-walls-screens"
    },
    {
      icon: <Mic size={36} strokeWidth={1.5} />,
      title: "CINEMA AUDIO/VIDEO",
      href: "/home-cinema/cinema-audio-video"
    },
    {
      icon: <Cog size={36} strokeWidth={1.5} />,
      title: "CINEMA AUTOMATION",
      href: "/home-cinema/cinema-automation"
    },
    {
      icon: <Armchair size={36} strokeWidth={1.5} />,
      title: "CINEMA SEATING",
      href: "/home-cinema/cinema-seating"
    },
    {
      icon: <Gamepad size={36} strokeWidth={1.5} />,
      title: "GAME ROOMS",
      href: "/home-cinema/game-rooms"
    }
  ];

  const homeAutomationServices = [
    {
      icon: <Lightbulb size={36} strokeWidth={1.5} />,
      title: "LIGHTING CONTROL",
      href: "/home-automation/lighting-control"
    },
    {
      icon: <ChevronsUp size={36} strokeWidth={1.5} />,
      title: "CURTAIN CONTROL",
      href: "/home-automation/curtain-control"
    },
    {
      icon: <Thermometer size={36} strokeWidth={1.5} />,
      title: "HVAC CONTROL",
      href: "/home-automation/hvac-control"
    },
    {
      icon: <Music size={36} strokeWidth={1.5} />,
      title: "MUSIC CONTROL",
      href: "/home-automation/music-control"
    },
    {
      icon: <Building size={36} strokeWidth={1.5} />,
      title: "SMART CITY & SMART SYSTEMS",
      href: "/home-automation/smart-city-systems"
    },
    {
      icon: <HomeIcon size={36} strokeWidth={1.5} />,
      title: "SELF-POWERED SMART HOMES",
      href: "/home-automation/self-powered-homes"
    }
  ];

  const bmsServices = [
    {
      icon: <Building size={36} strokeWidth={1.5} />,
      title: "INTELLIGENT BUILDING",
      href: "/bms/intelligent-building"
    },
    {
      icon: <Cpu size={36} strokeWidth={1.5} />,
      title: "INTEGRATED SERVICES",
      href: "/bms/integrated-services"
    },
    {
      icon: <Wind size={36} strokeWidth={1.5} />,
      title: "AIR QUALITY CONTROL",
      href: "/bms/air-quality-control"
    },
    {
      icon: <BarChart3 size={36} strokeWidth={1.5} />,
      title: "BTU METERING",
      href: "/bms/btu-metering"
    },
    {
      icon: <Globe size={36} strokeWidth={1.5} />,
      title: "INTERNET OF THINGS (IOT)",
      href: "/bms/internet-of-things"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">Our Comprehensive Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Smart Matrix, we provide end-to-end smart home and building solutions designed to enhance comfort, 
            security, and efficiency. Our expert team delivers cutting-edge technology tailored to your specific needs.
          </p>
        </div>
      </div>
      
      {/* Services with alternating layout */}
      <ServiceSection 
        title="ELV SYSTEMS" 
        description="Our Extra Low Voltage systems provide comprehensive security and communication solutions for residential and commercial properties, ensuring safety and connectivity."
        services={elvSystemServices}
        imageOnLeft={false}
        sectionImage="/els.jpg"
      />
      
      <div className="bg-gray-50 py-8"></div>
      
      <ServiceSection 
        title="ICT SOLUTIONS" 
        description="Our Information and Communications Technology solutions deliver robust networking infrastructure and innovative connectivity options for modern homes and businesses."
        services={ictSolutionsServices}
        imageOnLeft={true}
        sectionImage="/ict.jpg
        "
      />
      
      <div className="bg-gray-50 py-8"></div>
      
      <ServiceSection 
        title="HOME CINEMA" 
        description="Transform your entertainment experience with our custom home cinema installations, featuring premium audio-visual equipment and professional acoustic treatments."
        services={homeCinemaServices}
        imageOnLeft={false}
        sectionImage="/cinema.jpg"
      />
      
      <div className="bg-gray-50 py-8"></div>
      
      <ServiceSection 
        title="HOME AUTOMATION" 
        description="Experience the convenience of fully automated living spaces with intelligent systems that control lighting, temperature, entertainment, and security from a single interface."
        services={homeAutomationServices}
        imageOnLeft={true}
        sectionImage="/auto.jpg"
      />
      
      <div className="bg-gray-50 py-8"></div>
      
      <ServiceSection 
        title="BMS" 
        description="Our Building Management Systems offer centralized control of your property's technical services, optimizing performance while reducing operational costs and environmental impact."
        services={bmsServices}
        imageOnLeft={false}
        sectionImage="/bms.jpg"
      />
    </div>
  );
};

export default SmartHomeServices;