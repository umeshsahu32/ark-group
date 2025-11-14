import React from 'react';
import Section from '@components/ui/Section';
import SectionHeader from '@components/ui/SectionHeader';
import OptimizedImage from '@components/ui/OptimizedImage';
import BackgroundElements from '@components/ui/BackgroundElements';
import Button from '@components/ui/Button';
import HeroImage from '@components/ui/HeroImage';
import FeatureCard from '@components/ui/FeatureCard';
import ImageGallery from '@components/ui/ImageGallery';
import { FaAward, FaLeaf, FaHeart, FaStar, FaGlassWhiskey, FaShieldAlt } from 'react-icons/fa';
import D3Ghee from '@assets/ark-agro/arkd3-3.webp';
import D3Ghee2 from '@assets/ark-agro/ark-agro-4.jpg';
import D3Ghee3 from '@assets/ark-agro/arkd3-4.avif';
import { arkD3GheeData } from '@data/arkD3GheeData';

const ArkD3Ghee = () => {
  const { productInfo, features: productFeatures, keyBenefits } = arkD3GheeData;

  const galleryImages = [
    {
      src: D3Ghee3,
      alt: "ArkD3 Ghee Glass Bottle Packaging",
      title: "Glass Bottle",
      subtitle: "Premium Packaging"
    },
    {
      src: D3Ghee2,
      alt: "ArkD3 Ghee Traditional Process",
      title: "Traditional Process",
      subtitle: "Authentic Methods"
    }
  ];

  return (
    <Section className="bg-linear-to-br from-yellow-50 to-amber-100 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements
        variant="agro"
        opacity="opacity-5"
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Premium Product"
          title="ArkD3 Pure Gir Cow"
          titleAccent="Ghee"
          description="Nutrient-rich, healthy, and pure ghee made from cows with a 365-year lineage"
          className="text-center mb-12 sm:mb-16"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Side - Product Description */}
          <div className="space-y-8">
            {/* Product Highlight */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <FaStar className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Premium Quality</h3>
                  <p className="text-yellow-600 font-medium">Traditional Authenticity</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong>{productInfo.title}</strong> {productInfo.description}
                </p>
                {productInfo.benefits.map((benefit, index) => (
                  <p key={index}>{benefit}</p>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {keyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon === 'FaShieldAlt' ? FaShieldAlt : FaHeart;
                return (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-100">
                    <IconComponent className={`${benefit.color} text-2xl mx-auto mb-2`} />
                    <p className="text-sm font-semibold text-gray-800">{benefit.title}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button
                as="a"
                href={productInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="group/cta"
                showArrow={true}
              >
                Shop ArkD3 Ghee
              </Button>
              <p className="text-sm text-gray-600 mt-3">
                {productInfo.source}
              </p>
            </div>
          </div>

          {/* Right Side - Product Images */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <HeroImage
              src={D3Ghee}
              alt="ArkD3 Pure Gir Cow Ghee - Premium Product"
              title="ArkD3 Pure Ghee"
              subtitle=""
              description="365-Year Lineage"
              gradientFrom="from-yellow-400"
              gradientTo="to-amber-400"
              className="h-80 sm:h-96"
            />

            {/* Secondary Images Grid */}
            <ImageGallery
              images={galleryImages}
              columns={2}
              variant="yellow"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"> ArkD3 Ghee?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference of premium quality and traditional authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                variant="yellow"
                layout="vertical"
                showDescription={true}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

export default ArkD3Ghee;
