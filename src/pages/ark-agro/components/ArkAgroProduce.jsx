import React from 'react';
import Section from '@components/ui/Section';
import SectionHeader from '@components/ui/SectionHeader';
import OptimizedImage from '@components/ui/OptimizedImage';
import BackgroundElements from '@components/ui/BackgroundElements';
import HeroImage from '@components/ui/HeroImage';
import FeatureCard from '@components/ui/FeatureCard';
import ProduceCategoryCard from '@components/ui/ProduceCategoryCard';
import { FaAppleAlt, FaCarrot, FaSeedling, FaLeaf, FaRecycle, FaHeart } from 'react-icons/fa';
import ArgoVegImage from '@assets/ark-agro/argo-veg.jpg';
import { arkAgroProduceData } from '@data/arkAgroData';

const ArkAgroProduce = () => {
  const { fruits, vegetables, greens, seasonalCrops, farmingPractices } = arkAgroProduceData;

  const heroStats = [
    { value: "9+", label: "Fruit Varieties" },
    { value: "15+", label: "Vegetables" },
    { value: "4+", label: "Greens" },
    { value: "17+", label: "Seasonal Crops" }
  ];

  const produceCategories = [
    {
      category: { title: "Fresh Fruits", subtitle: "Sweet & Juicy" },
      items: fruits,
      icon: FaAppleAlt,
      colorScheme: {
        bg: "from-orange-50 to-red-50",
        border: "border-orange-100",
        decorative: "from-orange-400/30 to-red-400/30",
        icon: "from-orange-500 to-red-500",
        text: "text-orange-600",
        itemText: "text-orange-800"
      },
      showMoreCount: 3
    },
    {
      category: { title: "Fresh Vegetables", subtitle: "Nutritious & Healthy" },
      items: vegetables,
      icon: FaCarrot,
      colorScheme: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-100",
        decorative: "from-green-400/30 to-emerald-400/30",
        icon: "from-green-500 to-emerald-500",
        text: "text-green-600",
        itemText: "text-green-800"
      },
      showMoreCount: 9
    },
    {
      category: { title: "Seasonal Crops", subtitle: "Traditional & Staple" },
      items: seasonalCrops,
      icon: FaRecycle,
      colorScheme: {
        bg: "from-yellow-50 to-orange-50",
        border: "border-yellow-100",
        decorative: "from-yellow-400/30 to-orange-400/30",
        icon: "from-yellow-500 to-orange-500",
        text: "text-yellow-600",
        itemText: "text-yellow-800"
      },
      showMoreCount: 11
    }
  ];

  return (
    <Section className="bg-linear-to-br from-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements
        variant="agro"
        opacity="opacity-5"
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Produce & Practices"
          title="Fresh & Healthy"
          titleAccent="Produce"
          description="Discover our diverse range of organic produce and natural farming practices"
          className="text-center mb-12 sm:mb-16"
        />

        {/* Hero Section */}
        <div className="mb-16 sm:mb-20">
          <HeroImage
            src={ArgoVegImage}
            alt="Fresh organic produce collection"
            title="Our Fresh & Healthy"
            subtitle=" Produce"
            description="Naturally grown fruits, vegetables, greens, and seasonal crops without harmful chemicals"
            stats={heroStats}
            gradientFrom="from-green-400"
            gradientTo="to-emerald-400"
            className="h-96 sm:h-[500px] lg:h-[600px]"
          />
        </div>

        {/* Produce Categories Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Produce
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Categories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From fresh fruits to seasonal crops, we cultivate a diverse range of organic produce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {produceCategories.map((category, index) => (
              <ProduceCategoryCard
                key={index}
                category={category.category}
                items={category.items}
                icon={category.icon}
                colorScheme={category.colorScheme}
                showMoreCount={category.showMoreCount}
              />
            ))}
          </div>
        </div>

        {/* Farming Practices Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Natural Farming
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Practices</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our approach focuses on three key pillars of sustainable agriculture
            </p>
          </div>

          {/* Farming Practices Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {farmingPractices.map((practice, index) => (
              <FeatureCard
                key={practice.id}
                feature={practice}
                variant="default"
                layout="vertical"
                showDescription={true}
              />
            ))}
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

export default ArkAgroProduce;
