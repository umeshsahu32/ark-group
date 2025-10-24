import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '@components/ui/SectionHeader';
import Section from '@components/ui/Section';
import OptimizedImage from '@components/ui/OptimizedImage';
import { clientsData } from '@data/clientsData';

const OurClient = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Continuous sliding animation
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let translateX = 0;
    const slideWidth = 100 / 6; // 6 items visible at once
    const totalSlides = clientsData.length;

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
  }, [isPaused, clientsData.length]);

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
    <Section 
      className="bg-linear-to-br from-gray-50 to-white"
      backgroundVariant="default"
      backgroundOpacity="opacity-10"
    >
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
            {[...clientsData, ...clientsData, ...clientsData].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 w-1/6 px-3"
                onMouseEnter={handleClientHover}
                onMouseLeave={handleClientLeave}
              >
                <div className="group relative h-24 flex items-center justify-center">
                  <OptimizedImage
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
                    sizes="(max-width: 768px) 16vw, (max-width: 1024px) 12vw, 8vw"
                  />
                </div>
              </div>
            ))}
          </div>

         
        </div>
    </Section>
  );
};

export default OurClient;