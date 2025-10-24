import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';

// Import client images
import client1 from "../../../assets/clients/client-1.jpg";
import client2 from '../../../assets/clients/client-2.jpg';
import client3 from '../../../assets/clients/client-3.jpg';
import client4 from '../../../assets/clients/client-4.jpg';
import client5 from '../../../assets/clients/client-5.jpg';
import client6 from '../../../assets/clients/client-6.jpg';
import client7 from '../../../assets/clients/client-7.jpg';
import client8 from '../../../assets/clients/client-8.jpg';

const OurClient = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const clients = [
    { id: 1, logo: client1, name: 'Client 1' },
    { id: 2, logo: client2, name: 'Client 2' },
    { id: 3, logo: client3, name: 'Client 3' },
    { id: 4, logo: client4, name: 'Client 4' },
    { id: 5, logo: client5, name: 'Client 5' },
    { id: 6, logo: client6, name: 'Client 6' },
    { id: 7, logo: client7, name: 'Client 7' },
    { id: 8, logo: client8, name: 'Client 8' },
  ];

  // Continuous sliding animation
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let translateX = 0;
    const slideWidth = 100 / 6; // 6 items visible at once
    const totalSlides = clients.length;

    const animate = () => {
      if (!isPaused) {
        translateX -= 0.1; // Continuous slow movement
        
        // Reset position when we've moved through all slides
        if (Math.abs(translateX) >= slideWidth * totalSlides) {
          translateX = 0;
        }
        
        carousel.style.transform = `translateX(${translateX}%)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, clients.length]);

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle individual client hover
  const handleClientHover = () => {
    setIsPaused(true);
  };

  // Handle individual client leave
  const handleClientLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          subtitle="Trusted By"
          title="Our"
          titleAccent="Clients"
          description="We are proud to work with industry leaders and innovative companies that share our vision of excellence and sustainable development."
        />

        {/* Client Carousel */}
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Create infinite loop by duplicating clients */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 w-1/6 px-3"
                onMouseEnter={handleClientHover}
                onMouseLeave={handleClientLeave}
              >
                <div className="group relative h-24 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

         
        </div>

       
      </div>
    </section>
  );
};

export default OurClient;