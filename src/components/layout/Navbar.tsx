'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />

    </div>
    <span className="text-lg font-bold"> GM AUTOMATION &
    SOLUTION</span>
  </div>
);

type ListItemProps = {
  title: string;
  href: string;
};

const ListItem = ({ title, href }: ListItemProps) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
      >
        <div className="text-sm font-medium">{title}</div>
      </Link>
    </NavigationMenuLink>
  </li>
);

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = cn(
    "w-full fixed top-0 left-0 z-50 transition-all duration-300",
    isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
  );

  const menuItems = [
    {
      title: "ELV Systems",
      href: "/elv-systems",
      submenu: [
        { title: "Structured Cabling", href: "/elv-systems/structured-cabling" },
        { title: "CCTV Surveillance", href: "/elv-systems/cctv-surveillance" },
        { title: "Access Control", href: "/elv-systems/access-control" },
        { title: "Parking Management", href: "/elv-systems/parking-management" },
        { title: "SMATV / IPTV", href: "/elv-systems/smatv-iptv" },
        { title: "Audio/Video Intercom", href: "/elv-systems/audio-video-intercom" },
        { title: "Smart Locks", href: "/elv-systems/smart-locks" },
        { title: "Public Address Systems", href: "/elv-systems/public-address-systems" }
      ]
    },
    {
      title: "ICT Solutions",
      href: "/ict-solutions",
      submenu: [
        { title: "Wi-Fi Solutions", href: "/ict-solutions/wifi-solutions" },
        { title: "IT & Server Solutions", href: "/ict-solutions/it-server-solutions" },
        { title: "Telephone & PABX", href: "/ict-solutions/telephone-pabx" },
        { title: "Solar Systems", href: "/ict-solutions/solar-systems" }
      ]
    },
    {
      title: "Home Cinema",
      href: "/home-cinema",
      submenu: [
        { title: "Acoustic Rooms", href: "/home-cinema/acoustic-rooms" },
        { title: "LED Walls/Screens", href: "/home-cinema/led-walls-screens" },
        { title: "Cinema Audio/Video", href: "/home-cinema/cinema-audio-video" },
        { title: "Cinema Automation", href: "/home-cinema/cinema-automation" },
        { title: "Cinema Seating", href: "/home-cinema/cinema-seating" },
        { title: "Game Rooms", href: "/home-cinema/game-rooms" }
      ]
    },
    {
      title: "Home Automation",
      href: "/home-automation",
      submenu: [
        { title: "Lighting Control", href: "/home-automation/lighting-control" },
        { title: "Curtain Control", href: "/home-automation/curtain-control" },
        { title: "HVAC Control", href: "/home-automation/hvac-control" },
        { title: "Music Control", href: "/home-automation/music-control" },
        { title: "Smart City & Smart Systems", href: "/home-automation/smart-city-systems" },
        { title: "Self-Powered Smart Homes", href: "/home-automation/self-powered-homes" }
      ]
    },
    {
      title: "BMS",
      href: "/bms",
      submenu: [
        { title: "Intelligent Building", href: "/bms/intelligent-building" },
        { title: "Integrated Services", href: "/bms/integrated-services" },
        { title: "Air Quality Control", href: "/bms/air-quality-control" },
        { title: "BTU Metering", href: "/bms/btu-metering" },
        { title: "Internet of Things (IoT)", href: "/bms/internet-of-things" }
      ]
    },
    { title: "About Us", href: "/about",
        submenu:[{ title: "Contact", href: "/contact" },
            { title: "Our Projects", href: "/projects" },
            
            ]

     }
    
  ];

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.submenu.map((subItem, subIndex) => (
                              <ListItem 
                                key={subIndex} 
                                title={subItem.title} 
                                href={subItem.href} 
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-20 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className={`fixed inset-0 z-10 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2 border-b border-gray-100">
                    {item.submenu ? (
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer list-none font-medium">
                          {item.title}
                          <span className="transition group-open:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </summary>
                        <ul className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link 
                                href={subItem.href}
                                className="block py-2 text-gray-600 hover:text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link 
                        href={item.href}
                        className="block font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
