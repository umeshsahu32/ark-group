import React from "react";
import Button from "@components/ui/Button";
import SectionHeader from "@components/ui/SectionHeader";
import Section from "@components/ui/Section";
import OptimizedImage from "@components/ui/OptimizedImage";
import { aboutUsStats, aboutUsContent } from "@data/aboutUsData";


const AboutUs = () => {
  return (
    <Section 
      className="bg-linear-to-br from-gray-50 to-blue-50"
      backgroundVariant="default"
    >
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Heading with Animation */}
            <div className="space-y-4">
              <SectionHeader
                subtitle="About Us"
                title="Ark"
                titleAccent="Group"
                className="text-left mb-0!"
               
              />
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in-delay-2">
              {aboutUsContent.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Know More Button */}
            <div className="animate-fade-in-delay-2">
              <Button
                to="/about-us"
                variant="primary"
                size="md"
                className="shadow-xl hover:shadow-2xl"
              >
                Know More
              </Button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            {/* Company Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-delay">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={aboutUsContent.companyImage}
                    alt="Ark Group Office Building"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-delay-2 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* Founder Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <OptimizedImage
                    src={aboutUsContent.founder.image}
                    alt={`${aboutUsContent.founder.name} - ${aboutUsContent.founder.designation}`}
                    className="w-full h-full object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Founder Info */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">
                    {aboutUsContent.founder.name}
                  </h4>
                  <p className="text-sm text-secondary font-medium">
                    {aboutUsContent.founder.designation}
                  </p>
                  <p className="text-xs text-gray-600 max-w-xs">
                    {aboutUsContent.founder.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutUsStats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-delay-2"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default AboutUs;
