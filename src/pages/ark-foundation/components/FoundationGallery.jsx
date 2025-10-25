import React, { useState } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import { galleryImages } from "@data/arkFoundationData";



const FoundationGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getSizeClasses = (size) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'extra-large':
        return 'col-span-3 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-secondary/10 to-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Visual Journey"
          title="Foundation"
          titleAccent="Gallery"
          description="Explore the moments and memories that define our foundation's journey. Each image tells a story of impact, growth, and positive change."
          className="text-center mb-16"
        />

        {/* Masonry Gallery Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-[200px]">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${getSizeClasses(item.size)}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <OptimizedImage
                  src={item.src}
                  alt={`Foundation Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125" style={{ transitionDelay: '0.1s' }}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Hover Animation Overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FoundationGallery;
