import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import SectionDivider from "@components/ui/SectionDivider";
import OptimizedImage from "@components/ui/OptimizedImage";
import { FaLinkedinIn, FaAward, FaHandshake, FaLightbulb, FaHeart } from 'react-icons/fa';

// Import image
import gmrImage from "@assets/management/gmr.jpg";

const LeadershipLegacy = () => {
  const achievements = [
    {
      icon: FaAward,
      title: "36+ Years",
      description: "Of Excellence in Leadership"
    },
    {
      icon: FaHandshake,
      title: "CREDAI National",
      description: "President-Elect 2025-27"
    },
    {
      icon: FaLightbulb,
      title: "Founder",
      description: "Ark Group (1989)"
    },
    {
      icon: FaHeart,
      title: "Philanthropist",
      description: "Empowering India's Youth"
    }
  ];

  return (
    <Section 
      className="bg-linear-to-br from-secondary/5 to-primary/10"
      backgroundVariant="default"
      backgroundOpacity="opacity-10"
    >
      {/* Section Header */}
      <SectionHeader
        subtitle="Our Leadership"
        title="Leadership"
        titleAccent="& Legacy"
        description="Discover the vision and values that drive Ark Group forward"
      />

      {/* First Row - Image and Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
        {/* Left Column - Image */}
        <div className="relative order-2 lg:order-1">
          {/* Image with Decorative Elements */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-3xl transform rotate-3 opacity-20 -z-10"></div>
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-2 opacity-30 -z-10"></div>
            
            {/* Image Container */}
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl">
              <OptimizedImage
                src={gmrImage}
                alt="Shri Gummi Ram Reddy - Chairman & Managing Director"
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Decorative Badge */}
              {/* <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-full shadow-xl transform rotate-12">
                <span className="text-xs sm:text-sm font-bold">CMD</span>
              </div> */}
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Right Column - Name, Description & Leadership Philosophy */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Name and Title */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
              Shri Gummi Ram Reddy
            </h3>
            <p className="text-lg sm:text-xl text-primary font-semibold">
              Chairman & Managing Director
            </p>
            <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Born in 1963, Ram is a successful entrepreneur, philanthropist, and the current CMD of Ark Group. With an impressive <strong className="text-secondary">36+ years of career</strong>, he is a respected and influential leader within his organization, industry, and community.
            </p>
            <p>
              In 1989, Ram founded Ark Group and has since grown the company into a formidable organization with a presence in real estate, construction, infrastructure development, agriculture, and philanthropy. As a passionate civil engineer, Ram has guided the company through numerous successful, challenging, and prestigious projects, establishing a strong footprint in <strong className="text-secondary">Hyderabad, Bengaluru and many other places of India</strong>.
            </p>
          </div>

          {/* Key Principles Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h4 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
              <FaHandshake className="text-primary" />
              Leadership Philosophy
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Ram is a firm believer in the <strong className="text-primary">'Trust, Train & Track'</strong> model of employee performance, which emphasises the importance of building trust with employees, providing them with comprehensive training, and consistently tracking their progress. This approach fosters a supportive and growth-oriented work environment, empowering employees to reach their full potential.
            </p>
          </div>

       
        </div>
      </div>

      {/* Second Row - Achievements (4 Columns) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="text-xl sm:text-2xl text-white" />
                </div>
                <h5 className="text-sm sm:text-base font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Bottom Element */}
      <SectionDivider />
    </Section>
  );
};

export default LeadershipLegacy;
