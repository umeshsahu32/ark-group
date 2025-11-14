import React from 'react';
import Section from '@components/ui/Section';
import SectionHeader from '@components/ui/SectionHeader';
import ImageCard from '@components/ui/ImageCard';
import BackgroundElements from '@components/ui/BackgroundElements';
import { arkVisionData } from '@data/arkVisionData';

const ArkVision = () => {
  const { missionStatement, visionStatement, visionPillars, stats, quote, images } = arkVisionData;

  return (
    <Section className="bg-linear-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <BackgroundElements 
        variant="minimal" 
        opacity="opacity-5" 
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Mission & Vision"
          title="Ark"
          titleAccent="Purpose"
          description="Our mission drives us forward, our vision guides our future"
          className="text-center mb-12 sm:mb-16"
        />

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Top Row - Mission Statement */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-secondary/30 rounded-full animate-pulse"></div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg sm:text-xl font-bold">M</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{missionStatement.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{missionStatement.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {missionStatement.mainText}
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {missionStatement.missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row - Vision Statement and Image */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Vision Statement */}
            <div className="relative order-2 lg:order-1">
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-secondary/20 rounded-full animate-spin"></div>
              
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg sm:text-xl font-bold">V</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{visionStatement.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{visionStatement.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {visionStatement.mainText}
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {visionStatement.supportingText}
                  </p>
                </div>
              </div>
            </div>

            {/* First Image */}
            <div className="order-1 lg:order-2">
              <ImageCard
                src={images.main}
                alt={images.alt}
                title="Future-Ready"
                subtitle="Sustainable construction practices"
                overlayClassName="from-black/30 to-transparent"
                imageClassName="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>

          {/* Bottom Row - Vision Pillars, Second Image, and Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Vision Pillars */}
            <div className="space-y-3 sm:space-y-4 order-1">
              {visionPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="text-xl sm:text-2xl text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{pillar.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second Image */}
            <div className="lg:col-span-1 flex order-2">
              <ImageCard
                src={images.secondary}
                alt={images.secondaryAlt}
                title="Excellence"
                subtitle="Quality construction"
                overlayClassName="from-black/30 to-transparent"
                imageClassName="w-full h-full object-cover"
                className="flex-1"
              />
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-1 order-3">
              <div className="relative group h-full">
                {/* Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary/20 rounded-full animate-pulse"></div>
                
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <blockquote className="text-center">
                    <p className="text-base sm:text-lg font-light text-gray-800 italic leading-relaxed mb-3 sm:mb-4">
                      "{quote.text}"
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                      <span className="text-gray-600 font-medium text-xs sm:text-sm">{quote.author}</span>
                      <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ArkVision;