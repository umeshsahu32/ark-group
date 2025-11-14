import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import BackgroundElements from "@components/ui/BackgroundElements";
import HeroImage from "@components/ui/HeroImage";
import FeatureCard from "@components/ui/FeatureCard";
import { FaLeaf, FaSeedling, FaRecycle, FaHeart } from "react-icons/fa";
import ArkAgroLogo from "@assets/ark-agro/ark-agro-logo.png";
import FarmField from "@assets/ark-agro/ark-agro-3.jpg";
import SoilConservation from "@assets/ark-agro/ark-agro-5.jpg";
import FreshProduce from "@assets/ark-agro/fresh-product.webp";
import { arkAgroIntroData } from "@data/arkAgroData";

const ArkAgroIntro = () => {
  const { missionStatement, commitmentStatement, keyFeatures } = arkAgroIntroData;

  const missionCard = {
    icon: 'FaSeedling',
    title: 'Our Mission',
    description: missionStatement,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-white/80',
    borderColor: 'border-green-100'
  };

  const commitmentCard = {
    icon: 'FaHeart',
    title: 'Our Commitment',
    description: commitmentStatement,
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-white/80',
    borderColor: 'border-green-100'
  };

  const galleryImages = [
    {
      src: FreshProduce,
      alt: "Fresh organic vegetables",
      title: "Fresh Produce",
      subtitle: "Organic & Healthy"
    },
    {
      src: SoilConservation,
      alt: "Soil conservation practices",
      title: "Soil Health",
      subtitle: "Sustainable Practices"
    }
  ];

  return (
    <Section className="bg-linear-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements
        variant="agro"
        opacity="opacity-10"
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Sustainable Agriculture"
          title="Ark"
          titleAccent="Agro"
          description="Committed to environmental conservation and innovative farming techniques"
          className="text-center mb-12 sm:mb-16"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="relative">
                <OptimizedImage
                  src={ArkAgroLogo}
                  alt="Ark Agro Logo"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
                {/* Decorative Elements around Logo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Mission and Commitment Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <FaSeedling className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {missionStatement}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <FaHeart className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Our Commitment
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {commitmentStatement}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => {
                const featureCard = {
                  icon: feature.icon,
                  title: feature.title,
                  description: feature.description,
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'bg-white/60',
                  borderColor: 'border-green-100'
                };
                return (
                  <FeatureCard
                    key={index}
                    feature={featureCard}
                    showDescription={false}
                    className="p-4"
                  />
                );
              })}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <HeroImage
              src={FarmField}
              alt="Sustainable farming practices"
              title="Sustainable Farming"
              subtitle=""
              description="Innovative techniques for healthy crops"
              gradientFrom="from-green-400"
              gradientTo="to-emerald-400"
              className="h-80 sm:h-96"
            />

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

export default ArkAgroIntro;
