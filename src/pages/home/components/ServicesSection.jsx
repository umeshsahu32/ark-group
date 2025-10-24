import React from 'react';
import { FaBuilding, FaHome, FaIndustry, FaUniversity, FaSeedling } from 'react-icons/fa';
import Button from '../../../components/ui/Button';
import SectionHeader from '../../../components/ui/SectionHeader';

const ServicesSection = () => {
  const services = [
    {
      title: "Residential",
      description: "Creating modern, sustainable living spaces that blend comfort with innovation. We design residential communities that prioritize quality of life and environmental responsibility.",
      icon: FaHome,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Institutional",
      description: "Building educational and healthcare facilities that serve communities. Our institutional projects focus on creating spaces that enhance learning and healing experiences.",
      icon: FaUniversity,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Industrial",
      description: "Developing state-of-the-art industrial facilities and business parks. We create efficient, sustainable industrial spaces that drive economic growth and innovation.",
      icon: FaIndustry,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      title: "Agricultural",
      description: "Developing state-of-the-art agricultural facilities and business parks. We create efficient, sustainable agricultural spaces that drive economic growth and innovation.",
      icon: FaSeedling,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
   
  ];

  return (
    <section className="py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          subtitle="What We Excel At"
          title="Our"
          titleAccent="Forte"
          description="We specialize in delivering exceptional projects across multiple sectors, combining innovation with expertise to create lasting value for communities."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
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
      </div>
    </section>
  );
};

export default ServicesSection;
