import React from "react";
import SectionHeader from "@components/ui/SectionHeader";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import OptimizedImage from "@components/ui/OptimizedImage";
import { arkAgroProducts, arkAgroMission } from "@data/arkAgroData";
import { FaStar, FaAppleAlt, FaCarrot, FaLeaf } from 'react-icons/fa';

const ArkAgro = () => {
  // Direct icon mapping
  const iconMap = {
    'FaStar': FaStar,
    'FaAppleAlt': FaAppleAlt,
    'FaCarrot': FaCarrot,
    'FaLeaf': FaLeaf
  };

  return (
    <Section
      className="bg-linear-to-br from-green-50 to-yellow-50"
      backgroundVariant="agro"
    >
      {/* Section Header */}
      <SectionHeader
        subtitle="Farm Fresh Excellence"
        title="Ark"
        titleAccent="Agro"
        description="Producing high-quality and nutritious produce while preserving the soil for future generations through sustainable farming practices."
      />

      {/* Featured Product - ArkD3 Pure Gir Cow Ghee */}
      <div className="mb-16">
        <div className="bg-linear-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-2xl border border-yellow-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block">
                <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-4 block">
                  Premium Product
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ArkD3 Pure Gir Cow Ghee
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our signature product made from pure Gir cow milk using
                traditional methods. Rich in nutrients and packed with the
                goodness of authentic Indian ghee.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {arkAgroProducts[0].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Button to="/ark-agro" variant="primary" size="sm">
                Learn More About Our Ghee
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                  <OptimizedImage
                    src={arkAgroProducts[0].image}
                    alt={arkAgroProducts[0].name}
                    className="w-full h-80 object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {arkAgroProducts.slice(1).map((product, index) => {
          const IconComponent = iconMap[product.icon] || FaStar;
          return (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>

                {/* Icon Overlay */}
                <div
                  className={`absolute top-4 left-4 w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`text-xl ${product.textColor} group-hover:text-white transition-colors duration-300 relative z-10`}
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${product.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
                  ></div>
                </div>
              </div>

              {/* Product Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-linear-to-r ${product.color} rounded-full`}
                      ></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-r ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ArkAgro;
