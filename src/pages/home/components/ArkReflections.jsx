import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import SectionDivider from "@components/ui/SectionDivider";
import Button from "@components/ui/Button";
import OptimizedImage from "@components/ui/OptimizedImage";
import { FaHandshake, FaGraduationCap, FaChartLine, FaEye, FaBullseye } from 'react-icons/fa';

// Import images
import threeTsImage from "@assets/ark-reflections/3ts.png";
import studentImage from "@assets/ark-reflections/student-img-1.png";

const ArkReflections = () => {
  // Features data
  const features = [
    {
      icon: FaHandshake,
      title: "Trust",
      description: "We build a strong foundation of trust with every aspirant by offering transparent guidance and consistent support."
    },
    {
      icon: FaGraduationCap,
      title: "Train",
      description: "Our expert-led training equips students with the knowledge, skills, and strategies to crack the UPSC exam with confidence."
    },
    {
      icon: FaChartLine,
      title: "Track",
      description: "We continuously monitor progress through regular assessments and mentorship, ensuring every student stays on the path to success."
    }
  ];

  // Vision and Mission data
  const visionMission = [
    {
      icon: FaEye,
      title: "Our Vision",
      description: "Ark Reflections IAS Academy is driven by a single, powerful mission: \"150 IAS, 150 IPS by 2030\" — creating a generation of dedicated civil servants who come from humble backgrounds but dream big for India."
    },
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "Democratize UPSC preparation — making it accessible, affordable, and resultoriented."
    }
  ];

  return (
    <Section 
      className="bg-linear-to-br from-primary/10 to-primary/5"
      backgroundVariant="default"
      backgroundOpacity="opacity-10"
    >
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        {/* Left Side - Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <OptimizedImage
                src={threeTsImage}
                alt="3T's Approach - Trust, Train & Track"
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <SectionHeader
            subtitle="Empowering Future Leaders"
            title="Shaping Future"
            titleAccent="Bureaucrats with 3T's"
            className="text-left mb-6"
          />
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              At Ark Reflections IAS Academy, we're on a mission to make top-tier UPSC coaching accessible and affordable to every aspiring civil servant, especially those from underprivileged backgrounds. We believe that true success lies in nurturing leaders who are not only capable but also ethical, compassionate, and driven by integrity.
            </p>
            <p>
              With personalized mentorship, cuttingedge training, and unwavering support, we empower our students to unlock their full potential and turn their dreams into reality. Our bold vision is to shape the future of India by producing 150 IAS and 150 IPS officers by 2030 leaders who will lead with vision, purpose, and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* 3T Features Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Our Philosophy: The 3T Approach – Trust, Train & Track
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build trust with every aspirant, offer high-quality training, and track progress at every step. Our goal is to make UPSC coaching accessible and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Container */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="text-2xl md:text-3xl text-white relative z-10" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Call to Action Button */}
      <div className="text-center pt-6">
        <Button
          href="https://arkreflectionsias.com/"
          variant="primary"
          size="lg"
          showArrow={true}
          className="shadow-xl hover:shadow-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Ark Reflections IAS
        </Button>
      </div>

      {/* Decorative Bottom Element */}
      <SectionDivider />
    </Section>
  );
};

export default ArkReflections;
