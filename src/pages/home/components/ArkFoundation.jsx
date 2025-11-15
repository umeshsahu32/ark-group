import React, { useState } from "react";
import SectionHeader from "@components/ui/SectionHeader";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import SectionDivider from "@components/ui/SectionDivider";
import OptimizedImage from "@components/ui/OptimizedImage";
import { 
  foundationImages, 
  foundationStats, 
  foundationInitiatives, 
  foundationContent 
} from "@data/arkFoundationData";

const ArkFoundation = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <Section 
      className="bg-linear-to-br from-blue-50 to-purple-50"
      backgroundVariant="default"
      backgroundOpacity="opacity-10"
    >
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-20">
          {/* Left Side - Stacked Images */}
          <div className="relative order-2 lg:order-1">
            {/* Image Stack Container */}
            <div className="relative h-80 lg:h-[500px]">
              {/* First Image (Bottom) */}
              <div
                className={`absolute bottom-0 left-0 w-3/4 h-3/4 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 cursor-pointer ${
                  hoveredImage === 1
                    ? "rotate-0 z-50 scale-105"
                    : "rotate-3 z-10"
                }`}
                onMouseEnter={() => handleImageHover(1)}
                onMouseLeave={handleImageLeave}
                onTouchStart={() => handleImageHover(1)}
                onTouchEnd={handleImageLeave}
              >
                <OptimizedImage
                  src={foundationImages[0].image}
                  alt={foundationImages[0].alt}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Second Image (Middle) */}
              <div
                className={`absolute bottom-8 right-0 w-3/4 h-3/4 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 cursor-pointer ${
                  hoveredImage === 2
                    ? "rotate-0 z-50 scale-105"
                    : "-rotate-2 z-20"
                }`}
                onMouseEnter={() => handleImageHover(2)}
                onMouseLeave={handleImageLeave}
                onTouchStart={() => handleImageHover(2)}
                onTouchEnd={handleImageLeave}
              >
                <OptimizedImage
                  src={foundationImages[1].image}
                  alt={foundationImages[1].alt}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Third Image (Top) */}
              <div
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-2/3 h-2/3 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  hoveredImage === 3
                    ? "rotate-0 z-50 scale-105"
                    : "rotate-1 z-30"
                }`}
                onMouseEnter={() => handleImageHover(3)}
                onMouseLeave={handleImageLeave}
                onTouchStart={() => handleImageHover(3)}
                onTouchEnd={handleImageLeave}
              >
                <OptimizedImage
                  src={foundationImages[2].image}
                  alt={foundationImages[2].alt}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-6 w-4 h-4 bg-green-500 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Floating Stats */}
            {foundationStats.map((stat, index) => (
              <div key={index} className={`absolute ${stat.position} bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-40`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-secondary font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <SectionHeader
              subtitle="Making a Difference"
              title="Ark"
              titleAccent="Foundation"
              className="text-left mb-6!"
            />

            {/* Description */}
            <div className="space-y-6">
              {foundationContent.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Initiatives */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {foundationInitiatives.map((initiative, index) => {
                const IconComponent = initiative.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl px-2 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Icon Container */}
                    <div
                      className={`relative w-16 h-16 mx-auto mb-4 rounded-2xl ${initiative.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`text-2xl text-gray-700 group-hover:text-white transition-colors duration-300 relative z-10`}
                      />
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${initiative.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {initiative.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {initiative.description}
                      </p>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-linear-to-r ${initiative.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <Button
                to="/ark-foundation"
                variant="primary"
                size="md"
                showArrow={true}
                className="shadow-xl hover:shadow-2xl"
              >
                Learn More About Our Impact
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-24 text-center">
          <div className="max-w-5xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic leading-relaxed mb-4">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </blockquote>
            <div className="text-lg text-gray-600 font-medium">
              — Mahatma Gandhi
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <SectionDivider />
    </Section>
  );
};

export default ArkFoundation;
