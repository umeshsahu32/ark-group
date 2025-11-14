import React from 'react';
import Section from '@components/ui/Section';
import SectionHeader from '@components/ui/SectionHeader';
import OptimizedImage from '@components/ui/OptimizedImage';
import BackgroundElements from '@components/ui/BackgroundElements';
import HeroImage from '@components/ui/HeroImage';
import FeatureCard from '@components/ui/FeatureCard';
import ImageGallery from '@components/ui/ImageGallery';
import { FaHeart, FaLeaf, FaSeedling, FaPaw, FaTint, FaRecycle } from 'react-icons/fa';
import Gaushala1 from '@assets/ark-agro/gaushala-1.jpg';
import Gaushala2 from '@assets/ark-agro/gaushala-2.jpg';
import Gaushala3 from '@assets/ark-agro/gaushala-3.webp';
import Gaushala4 from '@assets/ark-agro/gaushala-4.webp';
import { arkGaushalaData } from '@data/arkGaushalaData';

const ArkGaushala = () => {
  const { heroContent, features: gaushalaFeatures, commitmentStatement } = arkGaushalaData;

  const galleryImages = [
    {
      src: Gaushala2,
      alt: "Gir Cows grazing in natural environment",
      title: "Natural Grazing",
      subtitle: "Ample space to roam and graze"
    },
    {
      src: Gaushala3,
      alt: "Expert care and attention for Gir Cows",
      title: "Expert Care",
      subtitle: "Dedicated caretakers"
    },
    {
      src: Gaushala4,
      alt: "Healthy and happy Gir Cows",
      title: "Healthy Cows",
      subtitle: "Thriving in natural environment"
    }
  ];

  return (
    <Section className="bg-linear-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements
        variant="agro"
        opacity="opacity-5"
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Sustainable Livestock"
          title="Ark Gir Cow"
          titleAccent="Gaushala"
          description="Nurturing the invaluable relationship between humans and animals through compassionate care"
          className="text-center mb-12 sm:mb-16"
        />

        {/* Hero Section */}
        <div className="mb-16 sm:mb-20">
          <HeroImage
            src={Gaushala1}
            alt="Ark Gir Cow Gaushala - Gentle care and natural environment"
            title={heroContent.title}
            subtitle=" Gentle Giants"
            description={heroContent.description}
            stats={heroContent.stats}
            gradientFrom="from-amber-400"
            gradientTo="to-orange-400"
            className="h-96 sm:h-[500px] lg:h-[600px]"
          />
        </div>

        {/* Features Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Gaushala
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Features</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {commitmentStatement}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gaushalaFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                variant="amber"
                layout="horizontal"
                showDescription={true}
              />
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Life at Our
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Gaushala</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into the daily life and care of our beloved Gir Cows
            </p>
          </div>

          <ImageGallery
            images={galleryImages}
            columns={3}
            variant="amber"
          />
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

export default ArkGaushala;
