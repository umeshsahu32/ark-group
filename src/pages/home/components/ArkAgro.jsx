import React from "react";
import SectionHeader from "../../../components/ui/SectionHeader";
import Button from "../../../components/ui/Button";
import { FaAppleAlt, FaCarrot, FaSeedling, FaLeaf } from "react-icons/fa";

// Import product images
import fruitsImage from "../../../assets/ark-agro/ark-agro-1.jpg";
import vegetablesImage from "../../../assets/ark-agro/ark-agro-2.jpg";
import cropsImage from "../../../assets/ark-agro/ark-agro-3.jpg";
import gheeImage from "../../../assets/ark-agro/ark-agro-4.jpg";

// vegetablesImage

const ArkAgro = () => {
  const products = [
    {
      id: 1,
      name: "ArkD3 Pure Gir Cow Ghee",
      description: "Premium quality ghee made from pure Gir cow milk, rich in nutrients and traditional goodness",
      image: gheeImage,
      icon: FaSeedling,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      featured: true,
      benefits: ["Pure Gir Cow Milk", "Traditional Process", "Rich in Nutrients", "Premium Quality"]
    },
    {
      id: 2,
      name: "Fresh Fruits",
      description: "Seasonal fruits grown with natural farming methods, packed with vitamins and minerals",
      image: fruitsImage,
      icon: FaAppleAlt,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      featured: false,
      benefits: ["Natural Farming", "Seasonal Variety", "Rich in Vitamins", "Fresh Daily"]
    },
    {
      id: 3,
      name: "Organic Vegetables",
      description: "Fresh vegetables grown without harmful chemicals, ensuring maximum nutrition and taste",
      image: vegetablesImage,
      icon: FaCarrot,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      featured: false,
      benefits: ["Chemical Free", "Maximum Nutrition", "Fresh Harvest", "Natural Taste"]
    },
    {
      id: 4,
      name: "Seasonal Crops",
      description: "Traditional seasonal crops grown using sustainable farming practices for optimal yield",
      image: cropsImage,
      icon: FaLeaf,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      featured: false,
      benefits: ["Sustainable Farming", "Seasonal Variety", "Optimal Yield", "Traditional Methods"]
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-green-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  Our signature product made from pure Gir cow milk using traditional methods. 
                  Rich in nutrients and packed with the goodness of authentic Indian ghee.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {products[0].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button
                  to="/ark-agro"
                  variant="primary"
                  size="sm"
                 
                >
                  Learn More About Our Ghee
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className="w-full h-80 object-cover rounded-2xl"
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
          {products.slice(1).map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 left-4 w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-xl ${product.textColor} group-hover:text-white transition-colors duration-300 relative z-10`} />
                    <div className={`absolute inset-0 bg-linear-to-r ${product.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
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
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-linear-to-r ${product.color} rounded-full`}></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-linear-to-r ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
};

export default ArkAgro;
