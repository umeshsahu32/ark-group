import React, { useEffect, useRef } from 'react';
import SectionHeader from '@components/ui/SectionHeader';
import Section from '@components/ui/Section';
import SectionDivider from '@components/ui/SectionDivider';
import OptimizedImage from '@components/ui/OptimizedImage';
import { clientsData } from '@data/clientsData';

const OurClient = () => {
  const carouselRef = useRef(null);

  // Continuous sliding animation with increased speed
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let translateX = 0;
    const slideWidth = 100 / 5; // 6 items visible at once
    const totalSlides = clientsData.length;

    const animate = () => {
      translateX -= 0.2; // Increased scroll speed (from 0.1 to 0.3)
      
      // Reset position when we've moved through all slides
      if (Math.abs(translateX) >= slideWidth * totalSlides) {
        translateX = 0;
      }
      
      carousel.style.transform = `translateX(${translateX}%)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [clientsData.length]);

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
          >
            {/* Create infinite loop by duplicating clients */}
            {[...clientsData, ...clientsData, ...clientsData].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 w-1/6 px-3"
              >
                <div className="relative h-24 flex items-center justify-center">
                  <OptimizedImage
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-80"
                    sizes="(max-width: 768px) 16vw, (max-width: 1024px) 12vw, 8vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <SectionDivider />
    </Section>
  );
};

export default OurClient;