import React from 'react';
import Button from '@components/ui/Button';
import SectionHeader from '@components/ui/SectionHeader';
import Section from '@components/ui/Section';
import SectionDivider from '@components/ui/SectionDivider';
import { servicesData } from '@data/servicesData';

const ServicesSection = () => {
  return (
    <Section 
      className="bg-linear-to-br from-gray-50 to-white"
      backgroundVariant="default"
    >
        {/* Section Header */}
        <SectionHeader
          subtitle="What We Excel At"
          title="Our"
          titleAccent="Forte"
          description="We specialize in delivering exceptional projects across multiple sectors, combining innovation with expertise to create lasting value for communities."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl px-4 py-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon Container */}
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`text-3xl ${service.textColor} group-hover:text-white transition-colors duration-300 relative z-10`} />
                  <div className={`absolute inset-0 bg-linear-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-linear-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            to="/about-us" 
            variant="cta"
            size="lg"
            className="group"
            showArrow={true}
          >
            Explore Our Expertise
          </Button>
        </div>

        {/* Decorative Bottom Element */}
        <SectionDivider />
    </Section>
  );
};

export default ServicesSection;
