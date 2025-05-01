
export interface ServiceData {
    title: string;
    description: string;
    content: string;
    image?: string;
    features?: string[];
    metaDescription?: string;
    relatedServices?: string[];
    heroBackground?: string;
  }
  

  export type ServicesData = Record<string, ServiceData>;
  
 
  export const services: ServicesData = {
   
"elv-systems/structured-cabling": {
  title: "Structured Cabling",
  description: "Professional structured cabling solutions for modern connectivity needs.",
  content: `
    <p>SmartTech provides comprehensive structured cabling solutions designed to meet the evolving needs of businesses and residential properties. Our expert team designs and implements reliable infrastructure that supports your current and future connectivity requirements.</p>
    
    <h3>Our Structured Cabling Services Include:</h3>
    <ul>
      <li>Network cabling design and installation</li>
      <li>Fiber optic cabling</li>
      <li>Voice and data cabling</li>
      <li>Cable management systems</li>
      <li>Testing and certification</li>
      <li>Maintenance and support</li>
    </ul>
    
    <p>With our structured cabling solutions, you can expect improved network performance, scalability for future growth, and reduced downtime. We follow industry standards to ensure reliability and longevity of your cabling infrastructure.</p>
  `,
  image: "/elv-system/structured-cabling/stu1.jpg", // Image for standard usage
  heroBackground: "/elv-system/structured-cabling/stu2.webp", // Hero background image
  features: [
    "High-performance network infrastructure",
    "Scalable solutions for future expansion",
    "Certified installation techniques",
    "Comprehensive testing and documentation",
    "Ongoing maintenance support"
  ],
  metaDescription: "Professional structured cabling solutions for reliable connectivity in commercial and residential properties by SmartTech.",
  relatedServices: ["elv-systems/cctv-surveillance", "ict-solutions/wifi-solutions"]
}
,
  
    "elv-systems/cctv-surveillance": {
      title: "CCTV Surveillance",
      description: "Advanced security camera systems for comprehensive monitoring and protection.",
      content: `
        <p>SmartTech offers state-of-the-art CCTV surveillance systems designed to enhance security and provide peace of mind. Our solutions combine high-definition cameras, intelligent software, and secure storage to create comprehensive monitoring systems.</p>
        
        <h3>Our CCTV Surveillance Solutions Include:</h3>
        <ul>
          <li>HD and 4K security cameras</li>
          <li>Video analytics and motion detection</li>
          <li>Remote monitoring capabilities</li>
          <li>Cloud and local storage options</li>
          <li>Integration with other security systems</li>
          <li>Mobile app access and notifications</li>
        </ul>
        
        <p>Our expert team conducts a thorough assessment of your premises to design a customized surveillance system that addresses your specific security concerns. We handle everything from installation to configuration and provide ongoing support to ensure optimal performance.</p>
      `,
        image: "/elv-system/CCTV/cc.jpg", // Image for standard usage
  heroBackground: "/elv-system/CCTV/cc2.jpg",
      features: [
        "High-definition video capture",
        "24/7 monitoring capabilities",
        "Intelligent motion detection",
        "Secure data storage",
        "Remote access via mobile devices"
      ],
      metaDescription: "Advanced CCTV surveillance systems with HD cameras, intelligent monitoring, and remote access for enhanced security by SmartTech.",
      relatedServices: ["elv-systems/access-control", "elv-systems/structured-cabling"]
    },
  
   "elv-systems/access-control": {
  title: "Access Control",
  description: "Secure and intelligent access management systems for property protection.",
  content: `
    <p>SmartTech delivers comprehensive access control solutions that enhance security while providing convenient entry for authorized personnel. Our systems combine modern hardware with intelligent software to create secure yet user-friendly access management.</p>
    
    <h3>Our Access Control Solutions Include:</h3>
    <ul>
      <li>Biometric access systems</li>
      <li>Card and fob entry systems</li>
      <li>Mobile credential solutions</li>
      <li>Visitor management systems</li>
      <li>Time and attendance tracking</li>
      <li>Integration with other security platforms</li>
    </ul>
    
    <p>We design custom access control solutions based on your specific security requirements, facility layout, and operational needs. Our systems provide detailed logs and reporting capabilities, allowing you to monitor and control access to sensitive areas of your property with precision.</p>
  `,
  image: "/elv-system/Access-control/Shutterstock_2088007684.webp", // Image for standard usage
  heroBackground: "/elv-system/Access-control/Door_Access_Control.webp", // Hero background image
  features: [
    "Customizable security levels",
    "Remote management capabilities",
    "Detailed access logs and reports",
    "Scalable for growing facilities",
    "Integration with CCTV and alarm systems"
  ],
  metaDescription: "Advanced access control systems with biometric, card, and mobile solutions for secure property management by SmartTech.",
  relatedServices: ["elv-systems/cctv-surveillance", "elv-systems/smart-locks"]
}
,
  
    "elv-systems/parking-management": {
      title: "Parking Management",
      description: "Intelligent parking solutions for efficient space utilization and enhanced security.",
      content: `
        <p>SmartTech offers advanced parking management systems designed to optimize space utilization, enhance security, and improve the overall parking experience. Our solutions use the latest technologies to automate and streamline parking operations.</p>
        
        <h3>Our Parking Management Solutions Include:</h3>
        <ul>
          <li>Automated barrier systems</li>
          <li>License plate recognition</li>
          <li>Parking guidance systems</li>
          <li>Mobile payment integration</li>
          <li>Parking space detection</li>
          <li>Management software and reporting</li>
        </ul>
        
        <p>Whether for residential complexes, commercial buildings, or public parking facilities, our systems help reduce congestion, improve security, and enhance the user experience. We integrate smart technologies that provide real-time information about space availability and simplify the payment process.</p>
      `,
      image: "/elv-system/Parking/pa2.png", // Image for standard usage
      heroBackground: "/elv-system/Parking/pa1.jpg",
      features: [
        "Automated entry and exit",
        "Real-time occupancy monitoring",
        "Reduced congestion and wait times",
        "Enhanced security and surveillance",
        "Comprehensive reporting capabilities"
      ],
      metaDescription: "Smart parking management systems with automation, license plate recognition, and space optimization for commercial and residential properties by SmartTech.",
      relatedServices: ["elv-systems/access-control", "bms/intelligent-building"]
    },
  
    "elv-systems/smatv-iptv": {
      title: "SMATV / IPTV",
      description: "High-quality satellite and IP television distribution systems for multi-dwelling units.",
      content: `
        <p>SmartTech provides cutting-edge SMATV (Satellite Master Antenna Television) and IPTV solutions for residential complexes, hotels, and commercial buildings. Our systems deliver crystal-clear television signals and rich multimedia content to multiple users simultaneously.</p>
        
        <h3>Our SMATV/IPTV Solutions Include:</h3>
        <ul>
          <li>Satellite signal reception and distribution</li>
          <li>Digital headend systems</li>
          <li>IP-based content distribution</li>
          <li>Video on demand capabilities</li>
          <li>Interactive TV features</li>
          <li>System monitoring and management</li>
        </ul>
        
        <p>We design and implement customized systems that meet specific content requirements and facility characteristics. Our solutions provide flexible channel packages, high-definition content, and interactive features that enhance the viewing experience for all users.</p>
      `,
        image: "/elv-system/IPTV/smatv.jpg", // Image for standard usage
  heroBackground: "/elv-system/IPTV/iptv.jpg",
      features: [
        "High-definition content distribution",
        "Multi-channel support",
        "Centralized system management",
        "Scalable architecture",
        "Integration with building management systems"
      ],
      metaDescription: "Advanced SMATV and IPTV systems for multi-dwelling units with high-definition content distribution and interactive features by SmartTech.",
      relatedServices: ["home-cinema/cinema-audio-video", "elv-systems/structured-cabling"]
    },
  
    "elv-systems/audio-video-intercom": {
      title: "Audio/Video Intercom",
      description: "Modern communication systems for enhanced security and convenience.",
      content: `
        <p>SmartTech delivers state-of-the-art audio and video intercom systems that enhance security while providing convenient communication between residents and visitors. Our solutions combine clear audio, high-definition video, and intuitive interfaces for seamless operation.</p>
        
        <h3>Our Audio/Video Intercom Solutions Include:</h3>
        <ul>
          <li>HD video door stations</li>
          <li>Multi-apartment communication systems</li>
          <li>Mobile app integration</li>
          <li>Cloud-based access management</li>
          <li>Integration with access control</li>
          <li>Remote door release capabilities</li>
        </ul>
        
        <p>Our intercom systems provide peace of mind by allowing residents to see and speak with visitors before granting access. With mobile app integration, you can answer your door from anywhere, enhancing both convenience and security for your property.</p>
      `,
      image: "/elv-system/AudioIntercom/int2.jpg", // Image for standard usage
      heroBackground: "/elv-system/AudioIntercom/int1.png",
      features: [
        "Crystal-clear audio communication",
        "High-definition video monitoring",
        "Remote access via smartphone",
        "Visitor logging and recording",
        "Integration with other security systems"
      ],
      metaDescription: "Advanced audio and video intercom systems with HD video, mobile access, and integration capabilities for residential and commercial properties by SmartTech.",
      relatedServices: ["elv-systems/access-control", "elv-systems/cctv-surveillance"]
    },
  
    "elv-systems/smart-locks": {
      title: "Smart Locks",
      description: "Keyless entry solutions for enhanced security and convenience.",
      content: `
        <p>SmartTech offers innovative smart lock solutions that provide secure, keyless entry to homes and businesses. Our systems combine cutting-edge technology with user-friendly interfaces to enhance security while adding convenience to daily access.</p>
        
        <h3>Our Smart Lock Solutions Include:</h3>
        <ul>
          <li>Fingerprint recognition locks</li>
          <li>PIN code access systems</li>
          <li>Mobile app-controlled locks</li>
          <li>Key card and fob solutions</li>
          <li>Remote access management</li>
          <li>Access logging and monitoring</li>
        </ul>
        
        <p>With our smart lock systems, you can eliminate the need for traditional keys, grant temporary access to guests or service providers, and monitor entry activities remotely. Our solutions integrate seamlessly with home automation systems for a comprehensive smart home experience.</p>
      `,
        image: "/elv-system/SmartLock/sm1.jpg", // Image for standard usage
  heroBackground: "/elv-system/SmartLock/sm2.jpeg",
      features: [
        "Keyless convenience",
        "Multiple access methods",
        "Temporary access provision",
        "Activity logs and notifications",
        "Remote lock/unlock capabilities"
      ],
      metaDescription: "Advanced smart lock solutions with biometric, PIN code, and mobile access for enhanced security and convenience by SmartTech.",
      relatedServices: ["elv-systems/access-control", "home-automation/smart-city-systems"]
    },
  
    "elv-systems/public-address-systems": {
      title: "Public Address Systems",
      description: "Clear and reliable communication systems for announcements and emergency notifications.",
      content: `
        <p>SmartTech delivers high-quality public address systems designed for clear and effective communication in commercial buildings, educational institutions, transportation hubs, and public spaces. Our solutions ensure that announcements and emergency notifications reach everyone in the covered area.</p>
        
        <h3>Our Public Address Solutions Include:</h3>
        <ul>
          <li>Distributed speaker systems</li>
          <li>Zone-based audio management</li>
          <li>Emergency announcement prioritization</li>
          <li>Background music distribution</li>
          <li>Integration with alarm systems</li>
          <li>Digital audio processing</li>
        </ul>
        
        <p>We design custom public address systems based on acoustic analyses of your space, ensuring optimal sound distribution and clarity. Our solutions comply with safety regulations and can integrate with fire alarm systems to provide critical communications during emergencies.</p>
      `,
      image: "/elv-system/PublicAddress/pa2.png", // Image for standard usage
      heroBackground: "/elv-system//PublicAddress/pa1.jpg",
      features: [
        "Crystal-clear audio delivery",
        "Multi-zone announcement capabilities",
        "Emergency override functions",
        "Scheduled announcement automation",
        "Integration with building management systems"
      ],
      metaDescription: "Professional public address systems with zone-based management and emergency capabilities for commercial and public spaces by SmartTech.",
      relatedServices: ["elv-systems/structured-cabling", "home-automation/music-control"]
    },
  
    // ICT Solutions
    "ict-solutions/wifi-solutions": {
      title: "Wi-Fi Solutions",
      description: "High-performance wireless networks for seamless connectivity across your premises.",
      content: `
        <p>SmartTech delivers enterprise-grade Wi-Fi solutions that provide reliable, fast, and secure wireless connectivity. Our expert team designs and implements wireless networks tailored to your specific requirements and environment.</p>
        
        <h3>Our Wi-Fi Solutions Include:</h3>
        <ul>
          <li>Wireless site surveys and planning</li>
          <li>Enterprise-grade access points</li>
          <li>Mesh network configurations</li>
          <li>Guest network management</li>
          <li>Network security implementation</li>
          <li>Monitoring and management tools</li>
        </ul>
        
        <p>Whether you need coverage for a small office or a large commercial space, our Wi-Fi solutions provide consistent performance and eliminate dead zones. We use the latest wireless technologies to ensure optimal speed, reliability, and security for all your connected devices.</p>
      `,
      image: "/ict-solution/wifi-solution/wi.webp",
      heroBackground: "/ict-solution/wifi-solution/wifi-hero.jpeg",
      features: [
        "High-speed wireless connectivity",
        "Comprehensive coverage without dead zones",
        "Secure network protocols",
        "Guest access management",
        "Scalable for growing needs"
      ],
      metaDescription: "Enterprise-grade Wi-Fi solutions for reliable wireless connectivity in commercial and residential spaces by SmartTech.",
      relatedServices: ["ict-solutions/it-server-solutions", "elv-systems/structured-cabling"]
    },
  
    "ict-solutions/it-server-solutions": {
      title: "IT & Server Solutions",
      description: "Comprehensive IT infrastructure and server solutions for business operations.",
      content: `
        <p>SmartTech provides robust IT and server solutions designed to support your business operations with reliable, secure, and scalable infrastructure. Our expert team designs, implements, and maintains systems that meet your specific technology needs.</p>
        
        <h3>Our IT & Server Solutions Include:</h3>
        <ul>
          <li>Server architecture and deployment</li>
          <li>Cloud integration services</li>
          <li>Virtualization solutions</li>
          <li>Data storage and backup systems</li>
          <li>Network security implementation</li>
          <li>Disaster recovery planning</li>
        </ul>
        
        <p>We take a consultative approach to understand your business requirements before recommending appropriate solutions. Our team handles everything from initial planning to implementation and provides ongoing support to ensure your IT infrastructure operates at peak efficiency.</p>
      `,
      image: "/ict-solution/it-server/it.jpg",
      heroBackground: "/ict-solution/it-server/it-hero.jpg",
      features: [
        "Customized server architecture",
        "Scalable infrastructure design",
        "Enhanced data security protocols",
        "Reliable backup and recovery systems",
        "Ongoing technical support"
      ],
      metaDescription: "Comprehensive IT and server solutions with cloud integration, virtualization, and security features for business operations by SmartTech.",
      relatedServices: ["ict-solutions/wifi-solutions", "elv-systems/structured-cabling"]
    },
  
    "ict-solutions/telephone-pabx": {
      title: "Telephone & PABX",
      description: "Advanced telephony systems for efficient business communication.",
      content: `
        <p>SmartTech delivers modern telephone and PABX (Private Automatic Branch Exchange) solutions that enhance your business communication capabilities. Our systems combine traditional reliability with innovative features for comprehensive telephony management.</p>
        
        <h3>Our Telephone & PABX Solutions Include:</h3>
        <ul>
          <li>IP-based phone systems</li>
          <li>Virtual PBX solutions</li>
          <li>Call center setups</li>
          <li>Unified communications</li>
          <li>Voice mail and auto-attendant features</li>
          <li>Call analytics and reporting</li>
        </ul>
        
        <p>We design and implement telephony systems that scale with your business needs and integrate with your existing IT infrastructure. Our solutions optimize communication efficiency, reduce costs, and provide the flexibility to adapt to changing business requirements.</p>
      `,
      image: "/ict-solution/telephone/te.webp",
  heroBackground: "/ict-solution/telephone/te-hero.jpg",
      features: [
        "Cost-effective communication",
        "Scalable telephony architecture",
        "Advanced call management features",
        "Integration with other business systems",
        "Comprehensive technical support"
      ],
      metaDescription: "Modern telephone and PABX systems with IP-based solutions and unified communications for efficient business operations by SmartTech.",
      relatedServices: ["ict-solutions/it-server-solutions", "elv-systems/structured-cabling"]
    },
  
    "ict-solutions/solar-systems": {
      title: "Solar Systems",
      description: "Sustainable energy solutions for residential and commercial properties.",
      content: `
        <p>SmartTech provides comprehensive solar energy solutions designed to reduce your carbon footprint and energy costs. Our expert team designs and installs custom solar systems tailored to your specific energy needs and property characteristics.</p>
        
        <h3>Our Solar System Solutions Include:</h3>
        <ul>
          <li>Energy consumption analysis</li>
          <li>Custom system design</li>
          <li>High-efficiency solar panels</li>
          <li>Battery storage options</li>
          <li>Inverter and connection systems</li>
          <li>Monitoring and management platforms</li>
        </ul>
        
        <p>We handle every aspect of your solar installation, from initial assessment to permitting, installation, and final inspection. Our solutions integrate seamlessly with your existing electrical systems and can be expanded as your energy needs grow.</p>
      `,
      image: "/ict-solution/solar-system/so.webp",
  heroBackground: "/ict-solution/solar-system/so-hero.jpg",
      features: [
        "Reduced energy costs",
        "Sustainable power generation",
        "Battery storage options",
        "System monitoring capabilities",
        "Integration with home automation"
      ],
      metaDescription: "Custom solar energy systems for sustainable power generation in residential and commercial properties by SmartTech.",
      relatedServices: ["home-automation/self-powered-homes", "bms/intelligent-building"]
    },
  
    // Home Cinema
    "home-cinema/acoustic-rooms": {
      title: "Acoustic Rooms",
      description: "Professionally designed spaces with optimal acoustic properties for immersive audio experiences.",
      content: `
        <p>SmartTech specializes in creating acoustic rooms that deliver exceptional sound quality for music enjoyment, home theaters, and professional recording. Our expert team designs and implements custom acoustic solutions that optimize sound reproduction while enhancing the aesthetic appeal of your space.</p>
        
        <h3>Our Acoustic Room Solutions Include:</h3>
        <ul>
          <li>Acoustic analysis and modeling</li>
          <li>Sound isolation treatments</li>
          <li>Bass management solutions</li>
          <li>Diffusion and absorption systems</li>
          <li>Custom acoustic panels and treatments</li>
          <li>Integrated lighting and ventilation</li>
        </ul>
        
        <p>We take a scientific approach to acoustic design, using advanced modeling software to identify acoustic challenges and develop targeted solutions. The result is a balanced acoustic environment that brings out the best in your audio equipment and creates an immersive listening or viewing experience.</p>
      `,
      image: "/home-cinema/acoutic/ac.webp",
      heroBackground: "/home-cinema/acoutic/ac-hero.jpg",
      features: [
        "Precision-engineered acoustics",
        "Customized sound environments",
        "Minimal external noise intrusion",
        "Balanced frequency response",
        "Aesthetically integrated design"
      ],
      metaDescription: "Custom acoustic room solutions with professional sound treatment and isolation for optimal audio experiences by SmartTech.",
      relatedServices: ["home-cinema/cinema-audio-video", "home-cinema/led-walls-screens"]
    },
  
    "home-cinema/led-walls-screens": {
      title: "LED Walls/Screens",
      description: "State-of-the-art display solutions for stunning visual experiences.",
      content: `
        <p>SmartTech offers premium LED walls and screens that deliver exceptional visual experiences for home theaters, commercial spaces, and entertainment venues. Our display solutions combine cutting-edge technology with expert installation for stunning image quality.</p>
        
        <h3>Our LED Display Solutions Include:</h3>
        <ul>
          <li>Custom-sized LED video walls</li>
          <li>High-resolution cinema screens</li>
          <li>Ultra HD and 4K displays</li>
          <li>Curved and specialty screen formats</li>
          <li>Ambient light rejecting screens</li>
          <li>Control system integration</li>
        </ul>
        
        <p>We work with you to select the ideal display technology based on your space, viewing distance, ambient lighting conditions, and content preferences. Our team handles precise installation and calibration to ensure optimal picture quality and viewing experience.</p>
      `,
      image: "/home-cinema/led-wall/le.jpg",
      heroBackground: "/home-cinema/led-wall/le-hero.webp",
      features: [
        "Stunning visual clarity",
        "Custom sizing and configurations",
        "High contrast and color accuracy",
        "Seamless integration with audio systems",
        "Professional calibration"
      ],
      metaDescription: "Premium LED walls and screens with 4K resolution and custom configurations for home theaters and commercial spaces by SmartTech.",
      relatedServices: ["home-cinema/cinema-audio-video", "home-cinema/acoustic-rooms"]
    },
  
    "home-cinema/cinema-audio-video": {
      title: "Cinema Audio/Video",
      description: "Comprehensive audio and video solutions for immersive home cinema experiences.",
      content: `
        <p>SmartTech delivers professional-grade cinema audio and video systems that transform your space into an immersive entertainment environment. Our solutions combine the latest technologies with expert design to create exceptional viewing and listening experiences.</p>
        
        <h3>Our Cinema Audio/Video Solutions Include:</h3>
        <ul>
          <li>Surround sound system design</li>
          <li>Ultra HD and 4K projectors</li>
          <li>Premium audio processors and amplifiers</li>
          <li>Acoustically transparent screens</li>
          <li>Speaker placement and calibration</li>
          <li>Audio/video calibration services</li>
        </ul>
        
        <p>We design cinema systems tailored to your space constraints, budget considerations, and performance expectations. Our team handles everything from initial concept to final calibration, ensuring that every component works in harmony to deliver a truly cinematic experience.</p>
      `,
      image: "/home-cinema/cinema-audio/ce.jpg",
      heroBackground: "/home-cinema/cinema-audio/ce-hero.png",
      features: [
        "THX and Dolby Atmos compatibility",
        "Reference-level audio performance",
        "Ultra HD visual clarity",
        "Calibrated for optimal performance",
        "Intuitive control interfaces"
      ],
      metaDescription: "Professional cinema audio and video systems with surround sound and 4K projection for immersive home entertainment by SmartTech.",
      relatedServices: ["home-cinema/acoustic-rooms", "home-cinema/cinema-automation"]
    },
  
    "home-cinema/cinema-automation": {
      title: "Cinema Automation",
      description: "Intelligent control systems that enhance the home theater experience.",
      content: `
        <p>SmartTech offers sophisticated cinema automation solutions that streamline the operation of your home theater system. Our intelligent control systems allow you to create the perfect viewing environment with the touch of a button.</p>
        
        <h3>Our Cinema Automation Solutions Include:</h3>
        <ul>
          <li>One-touch scene activation</li>
          <li>Lighting control integration</li>
          <li>Motorized screen and projector lifts</li>
          <li>Automated curtains and blinds</li>
          <li>Climate control integration</li>
          <li>Voice control capabilities</li>
        </ul>
        
        <p>We design custom automation systems that integrate all aspects of your home theater, from audio and video equipment to lighting, seating, and environmental controls. With intuitive interfaces accessible via touchscreens, remote controls, or mobile devices, you can create and recall customized settings for different viewing scenarios.</p>
      `,
      image: "/home-cinema/cinema-automation/ci.png",
  heroBackground: "/home-cinema/cinema-automation/ci-hero.jpg",
      features: [
        "One-touch operation",
        "Customized scene settings",
        "Integrated environment control",
        "Multiple control interfaces",
        "Seamless equipment integration"
      ],
      metaDescription: "Intelligent cinema automation systems with one-touch operation and integrated control for enhanced home theater experiences by SmartTech.",
      relatedServices: ["home-cinema/cinema-audio-video", "home-automation/lighting-control"]
    },
  
    "home-cinema/cinema-seating": {
      title: "Cinema Seating",
      description: "Luxury seating solutions designed for optimal comfort and viewing experiences.",
      content: `
        <p>SmartTech provides premium cinema seating options that combine comfort, style, and functionality to enhance your home theater experience. Our seating solutions are designed with optimal viewing angles and ergonomics in mind.</p>
        
        <h3>Our Cinema Seating Solutions Include:</h3>
        <ul>
          <li>Custom theater recliners</li>
          <li>Tiered seating arrangements</li>
          <li>Powered reclining mechanisms</li>
          <li>Integrated cup holders and tables</li>
          <li>Custom upholstery options</li>
          <li>Seating with built-in controls</li>
        </ul>
        
        <p>We work with you to design seating arrangements that maximize viewing comfort while accommodating your space constraints. Our team can create custom configurations with premium materials and finishes to match your theater's aesthetic while ensuring optimal sight lines for every seat.</p>
      `,
      image: "/home-cinema/cinema-seating/ci.jpg",
  heroBackground: "/home-cinema/cinema-seating/ci-hero.png",
      features: [
        "Ergonomic comfort design",
        "Customized seating arrangements",
        "Premium upholstery options",
        "Power recline functionality",
        "Integrated accessory features"
      ],
      metaDescription: "Luxury cinema seating solutions with custom configurations and premium comfort features for home theaters by SmartTech.",
      relatedServices: ["home-cinema/acoustic-rooms", "home-cinema/cinema-automation"],
  
    },
  
    "home-cinema/game-rooms": {
      title: "Game Rooms",
      description: "Custom-designed spaces for immersive gaming experiences.",
      content: `
        <p>SmartTech creates cutting-edge game rooms that deliver immersive entertainment experiences for casual and serious gamers alike. Our custom gaming spaces combine advanced technology with thoughtful design for optimal gaming enjoyment.</p>
        
        <h3>Our Game Room Solutions Include:</h3>
        <ul>
          <li>Gaming-optimized display systems</li>
          <li>Immersive audio configurations</li>
          <li>Custom gaming furniture</li>
          <li>Specialized lighting design</li>
          <li>Network optimization for online gaming</li>
          <li>VR gaming spaces</li>
        </ul>
        
        <p>We design game rooms that address the specific requirements of different gaming platforms and styles, from PC and console gaming to virtual reality experiences. Our solutions incorporate ergonomic considerations, proper cable management, and aesthetic elements that create an engaging gaming environment.</p>
      `,
      image: "/home-cinema/game/ga.avif",
      heroBackground: "/home-cinema/game/ga-hero.webp",
      features: [
        "Low-latency gaming displays",
        "Immersive surround sound",
        "Optimized network connectivity",
        "Customized gaming stations",
        "Atmospheric lighting effects"
      ],
      metaDescription: "Custom game room solutions with optimized displays, immersive audio, and specialized design for enhanced gaming experiences by SmartTech.",
      relatedServices: ["home-cinema/cinema-audio-video", "home-automation/lighting-control"]
    },
  
    // Home Automation
    "home-automation/lighting-control": {
      title: "Lighting Control",
      description: "Intelligent lighting systems for ambiance, efficiency, and convenience.",
      content: `
        <p>SmartTech offers sophisticated lighting control solutions that enhance the ambiance, efficiency, and functionality of your spaces. Our systems allow for precise control of lighting scenes, automation of lighting schedules, and integration with other smart home features.</p>
        
        <h3>Our Lighting Control Solutions Include:</h3>
        <ul>
          <li>Smart lighting fixtures and switches</li>
          <li>Customized lighting scenes</li>
          <li>Motion-activated lighting</li>
          <li>Daylight harvesting systems</li>
          <li>Circadian rhythm lighting</li>
          <li>Integration with home automation</li>
        </ul>
        
        <p>We design lighting control systems that are both intuitive to use and powerful in their capabilities. Whether you want to create the perfect ambiance for entertaining, improve energy efficiency, or enhance security with automated lighting, our solutions can be tailored to your specific needs.</p>
      `,
      image: "/home-automation/lighting-control/l1.jpg",
  heroBackground: "/home-automation/lighting-control/l1-hero.png",
      features: [
        "Customizable lighting scenes",
        "Energy-efficient operation",
        "Scheduled lighting automation",
        "Remote access and control",
        "Integration with voice assistants"
      ],
      metaDescription: "Intelligent lighting control systems with customized scenes and automation for enhanced ambiance and efficiency by SmartTech.",
      relatedServices: ["home-automation/smart-city-systems", "home-cinema/cinema-automation"]
    },
  
    "home-automation/curtain-control": {
      title: "Curtain Control",
      description: "Automated drapery and shade systems for convenience and energy efficiency.",
      content: `
        <p>SmartTech provides advanced curtain control systems that automate the operation of drapes, blinds, and shades throughout your property. Our solutions combine elegant hardware with intelligent control for enhanced convenience and energy management.</p>
        
        <h3>Our Curtain Control Solutions Include:</h3>
        <ul>
          <li>Motorized drapery systems</li>
          <li>Automated blinds and shades</li>
          <li>Light-sensing automation</li>
          <li>Timer-based operation</li>
          <li>Integration with home automation</li>
          <li>Remote access and control</li>
        </ul>
        
        <p>We offer a wide range of motorized window treatment options that can be controlled individually or as groups, programmed to operate on schedules, or set to respond to environmental conditions. Our systems help manage natural light, enhance privacy, and improve energy efficiency through better insulation management.</p>
      `,
      image: "/home-automation/curtain-control/cu.jpg",
      heroBackground: "/home-automation/curtain-control/cu-hero.webp",
      features: [
        "Silent motor operation",
        "Customized scheduling",
        "Environmental response capabilities",
        "Integration with smart home systems",
        "Battery and hardwired options"
      ],
      metaDescription: "Automated curtain and shade control systems with scheduling and smart home integration for enhanced convenience and efficiency by SmartTech.",
      relatedServices: ["home-automation/lighting-control", "home-automation/hvac-control"]
    },
  
    "home-automation/hvac-control": {
    title: "HVAC Control",
    description: "Intelligent climate management systems for comfort and energy efficiency.",
    content: `
      <p>SmartTech delivers advanced HVAC control solutions that optimize comfort while minimizing energy consumption. Our intelligent climate management systems provide precise temperature control, improved air quality, and simplified operation.</p>
      
      <h3>Our HVAC Control Solutions Include:</h3>
      <ul>
        <li>Smart thermostats and sensors</li>
        <li>Zone-based climate control</li>
        <li>Occupancy-based management</li>
        <li>Energy usage analytics</li>
        <li>Remote monitoring and control</li>
        <li>Integration with home automation</li>
      </ul>
      
      <p>We design custom HVAC control systems that adapt to your lifestyle and preferences while maximizing energy efficiency. Our solutions can learn your schedule, adjust for weather conditions, and provide detailed insights into your energy usage patterns for optimized climate management.</p>
    `,
    image: "/home-automation/hvac-control/hv.jpg",
    heroBackground: "/home-automation/hvac-control/hv-hero.jpg",
    features: [
      "Precision temperature control",
      "Automated scheduling and adjustments",
      "Energy usage optimization",
      "Remote access and monitoring",
      "Integration with other smart systems"
    ],
    metaDescription: "Smart HVAC control systems with zone-based management and energy optimization for enhanced comfort and efficiency by SmartTech.",
    relatedServices: ["home-automation/lighting-control", "bms/air-quality-control"]
  },

  "home-automation/music-control": {
    title: "Music Control",
    description: "Multi-room audio systems for seamless music distribution throughout your property.",
    content: `
      <p>SmartTech offers sophisticated music control solutions that allow you to enjoy high-quality audio in any room of your home or business. Our multi-room audio systems provide seamless distribution of music with intuitive control interfaces.</p>
      
      <h3>Our Music Control Solutions Include:</h3>
      <ul>
        <li>Wireless and wired multi-room audio</li>
        <li>High-fidelity speakers and amplifiers</li>
        <li>Streaming service integration</li>
        <li>Voice control capabilities</li>
        <li>Zone-based audio management</li>
        <li>Integration with home automation</li>
      </ul>
      
      <p>We design custom audio solutions that deliver exceptional sound quality while blending seamlessly with your interior design. Whether you want background music throughout your home or dedicated listening zones with audiophile-grade sound, our systems provide flexible control options and easy access to your entire music library.</p>
    `,
    image: "/home-automation/music-control/mu.jpg",
  heroBackground: "/home-automation/music-control/mu-hero.jpg",
    features: [
      "High-fidelity sound reproduction",
      "Multi-room synchronization",
      "Intuitive control interfaces",
      "Integration with streaming services",
      "Custom zone configuration"
    ],
    metaDescription: "Advanced multi-room audio systems with high-fidelity sound and intuitive control for seamless music distribution by SmartTech.",
    relatedServices: ["home-cinema/cinema-audio-video", "home-automation/smart-city-systems"]
  },

  "home-automation/smart-city-systems": {
    title: "Smart City & Smart Systems",
    description: "Integrated technology solutions for modern urban environments and communities.",
    content: `
      <p>SmartTech provides comprehensive smart city and smart system solutions that enhance urban living through integrated technology applications. Our systems improve efficiency, sustainability, and quality of life for residents and businesses.</p>
      
      <h3>Our Smart City & Systems Solutions Include:</h3>
      <ul>
        <li>Community-wide network infrastructure</li>
        <li>Intelligent street lighting</li>
        <li>Smart waste management</li>
        <li>Environmental monitoring systems</li>
        <li>Public safety and security solutions</li>
        <li>Smart transportation management</li>
      </ul>
      
      <p>We work with municipalities, developers, and community organizations to implement connected technologies that address specific urban challenges. Our solutions leverage data and automation to optimize resource usage, enhance public services, and create more livable and sustainable communities.</p>
    `,
    image: "/home-automation/smart-city-systems/sm.jpg",
    heroBackground: "/home-automation/smart-city-systems/sm-hero.jpeg",
    features: [
      "Integrated urban technologies",
      "Resource usage optimization",
      "Enhanced public safety",
      "Environmental sustainability",
      "Improved quality of life"
    ],
    metaDescription: "Integrated smart city and community systems with connected technologies for enhanced urban living and sustainability by SmartTech.",
    relatedServices: ["home-automation/self-powered-homes", "bms/internet-of-things"]
  },

  "home-automation/self-powered-homes": {
    title: "Self-Powered Smart Homes",
    description: "Sustainable living solutions combining renewable energy with intelligent automation.",
    content: `
      <p>SmartTech delivers innovative self-powered smart home solutions that combine renewable energy generation with intelligent automation for sustainable, efficient living. Our integrated approach reduces carbon footprint while enhancing comfort and convenience.</p>
      
      <h3>Our Self-Powered Home Solutions Include:</h3>
      <ul>
        <li>Solar power generation systems</li>
        <li>Energy storage solutions</li>
        <li>Smart energy management</li>
        <li>Automated energy conservation</li>
        <li>Real-time consumption monitoring</li>
        <li>Integration with home automation</li>
      </ul>
      
      <p>We design comprehensive systems that optimize energy generation, storage, and usage throughout your home. By combining renewable energy sources with intelligent controls, our solutions can significantly reduce or eliminate your dependence on the power grid while maintaining all the comforts of modern living.</p>
    `,
    image: "/home-automation/self-powered-homes/se.jpg",
  heroBackground: "/home-automation/self-powered-homes/se-hero.jpg",
    features: [
      "Reduced or eliminated energy bills",
      "Environmental sustainability",
      "Energy independence",
      "Intelligent power management",
      "Real-time energy monitoring"
    ],
    metaDescription: "Comprehensive self-powered smart home solutions with renewable energy and intelligent automation for sustainable living by SmartTech.",
    relatedServices: ["ict-solutions/solar-systems", "home-automation/hvac-control"]
  },

  // BMS
  "bms/intelligent-building": {
    title: "Intelligent Building",
    description: "Comprehensive building management solutions for enhanced efficiency and comfort.",
    content: `
      <p>SmartTech delivers advanced intelligent building solutions that optimize operations, enhance occupant comfort, and improve energy efficiency. Our integrated systems provide centralized control and monitoring of all building functions.</p>
      
      <h3>Our Intelligent Building Solutions Include:</h3>
      <ul>
        <li>Centralized building management systems</li>
        <li>Integrated control interfaces</li>
        <li>Energy management and optimization</li>
        <li>Equipment monitoring and maintenance</li>
        <li>Occupancy-based system adjustment</li>
        <li>Data analytics and reporting</li>
      </ul>
      
      <p>We design custom intelligent building solutions tailored to your specific facility requirements and operational goals. Our systems integrate various building functions into a cohesive platform that enhances efficiency, reduces operating costs, and creates responsive environments that adapt to changing conditions.</p>
    `,
    image: "/bms/intelligent-building/ib.png",
    heroBackground: "/bms/intelligent-building/ib-hero.jpg",
    features: [
      "Centralized management platform",
      "Enhanced energy efficiency",
      "Improved occupant comfort",
      "Reduced maintenance costs",
      "Data-driven optimization"
    ],
    metaDescription: "Advanced intelligent building systems with integrated management and optimization for enhanced operational efficiency by SmartTech.",
    relatedServices: ["bms/integrated-services", "bms/internet-of-things"]
  },

  "bms/integrated-services": {
    title: "Integrated Services",
    description: "Unified management solutions for all building systems and services.",
    content: `
      <p>SmartTech offers comprehensive integrated services solutions that unify the management and operation of diverse building systems. Our approach eliminates silos between different technologies to create a seamless operational experience.</p>
      
      <h3>Our Integrated Services Solutions Include:</h3>
      <ul>
        <li>Cross-system integration platforms</li>
        <li>Unified control interfaces</li>
        <li>Centralized monitoring dashboards</li>
        <li>Automated system interactions</li>
        <li>Coordinated scheduling and operation</li>
        <li>System-wide data analytics</li>
      </ul>
      
      <p>We integrate various building systems—including HVAC, lighting, security, access control, and more—into a cohesive ecosystem that enhances efficiency and simplifies management. Our solutions enable systems to share data and respond to each other, creating intelligent environments that adapt to occupant needs and operational requirements.</p>
    `,
    image: "/bms/integrated-services/is.jpg",
  heroBackground: "/bms/integrated-services/is-hero.jpg",
    features: [
      "Seamless cross-system operation",
      "Simplified management interface",
      "Enhanced operational efficiency",
      "Coordinated system responses",
      "Comprehensive data insights"
    ],
    metaDescription: "Unified building management solutions with cross-system integration for enhanced efficiency and simplified operations by SmartTech.",
    relatedServices: ["bms/intelligent-building", "bms/internet-of-things"]
  },

  "bms/air-quality-control": {
    title: "Air Quality Control",
    description: "Advanced solutions for monitoring and maintaining healthy indoor environments.",
    content: `
      <p>SmartTech provides sophisticated air quality control systems that monitor, analyze, and optimize indoor air quality for healthier and more comfortable environments. Our solutions combine sensing technology with intelligent management for comprehensive air quality maintenance.</p>
      
      <h3>Our Air Quality Control Solutions Include:</h3>
      <ul>
        <li>Multi-parameter air quality monitoring</li>
        <li>Contaminant detection systems</li>
        <li>Automated ventilation control</li>
        <li>Filtration system management</li>
        <li>Real-time air quality reporting</li>
        <li>Integration with HVAC systems</li>
      </ul>
      
      <p>We design custom air quality solutions that address the specific needs of your environment, whether for commercial buildings, healthcare facilities, or residential properties. Our systems continuously monitor multiple air quality parameters and automatically adjust ventilation and filtration systems to maintain optimal conditions.</p>
    `,
    image: "/bms/air-quality-control/aq.jpeg",
    heroBackground: "/bms/air-quality-control/aq-hero.webp",
    features: [
      "Comprehensive pollutant monitoring",
      "Automated ventilation adjustment",
      "Real-time air quality analytics",
      "Enhanced occupant health and comfort",
      "Energy-efficient operation"
    ],
    metaDescription: "Advanced air quality control systems with real-time monitoring and automated management for healthier indoor environments by SmartTech.",
    relatedServices: ["home-automation/hvac-control", "bms/intelligent-building"]
  },

  "bms/btu-metering": {
    title: "BTU Metering",
    description: "Precise thermal energy measurement solutions for efficient resource management.",
    content: `
      <p>SmartTech delivers advanced BTU metering solutions that accurately measure and monitor thermal energy consumption in building systems. Our precision measurement technologies enable fair billing and effective energy management strategies.</p>
      
      <h3>Our BTU Metering Solutions Include:</h3>
      <ul>
        <li>Thermal energy consumption measurement</li>
        <li>Chilled and hot water metering</li>
        <li>Tenant submetering systems</li>
        <li>Remote data collection and reporting</li>
        <li>Billing system integration</li>
        <li>Energy usage analytics</li>
      </ul>
      
      <p>We provide comprehensive metering solutions that accurately measure heating and cooling energy usage throughout your facility. Our systems enable detailed tracking of thermal energy consumption for specific zones, tenants, or systems, supporting fair cost allocation and identifying opportunities for energy efficiency improvements.</p>
    `,
    image: "/bms/btu-metering/bm.jpg",
    heroBackground: "/bms/btu-metering/bm-hero.webp",
    features: [
      "Precise energy measurement",
      "Equitable cost allocation",
      "Consumption trend analysis",
      "Leak and waste detection",
      "Optimization opportunity identification"
    ],
    metaDescription: "Accurate BTU metering systems for thermal energy measurement and management in commercial and residential properties by SmartTech.",
    relatedServices: ["bms/intelligent-building", "home-automation/hvac-control"]
  },

  "bms/internet-of-things": {
    title: "Internet of Things (IoT)",
    description: "Connected device ecosystems for intelligent automation and data-driven insights.",
    content: `
      <p>SmartTech implements comprehensive Internet of Things (IoT) solutions that connect devices, systems, and environments to create intelligent, responsive ecosystems. Our IoT implementations enable advanced automation, detailed analytics, and enhanced decision-making capabilities.</p>
      
      <h3>Our IoT Solutions Include:</h3>
      <ul>
        <li>Sensor network deployments</li>
        <li>Connected device ecosystems</li>
        <li>Edge computing implementations</li>
        <li>Data collection and analysis</li>
        <li>Machine learning integration</li>
        <li>Custom IoT application development</li>
      </ul>
      
      <p>We design scalable IoT solutions that address specific operational challenges and create opportunities for optimization. By connecting devices and systems throughout your environment, our solutions gather valuable data that drives automation, preventive maintenance, and strategic insights for continuous improvement.</p>
    `,
    image: "/bms/internet-of-things/io.jpg",
    heroBackground: "/bms/internet-of-things/io-hero.jpg",
    features: [
      "Comprehensive device connectivity",
      "Real-time data collection and analysis",
      "Automated system responses",
      "Predictive maintenance capabilities",
      "Scalable IoT architecture"
    ],
    metaDescription: "Advanced Internet of Things (IoT) solutions with connected devices and intelligent automation for data-driven operations by SmartTech.",
    relatedServices: ["bms/intelligent-building", "home-automation/smart-city-systems"]
  }
};
export function getServiceBySlug(slug: string[]): ServiceData | null {
    const path = slug.join('/');
    return services[path] || null;
  }
  
  // Helper function to get all service slugs (useful for static generation)
  export function getAllServiceSlugs(): string[][] {
    return Object.keys(services).map(slug => slug.split('/'));
  }