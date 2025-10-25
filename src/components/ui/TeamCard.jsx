import React from 'react';
import OptimizedImage from './OptimizedImage';
import DecorativeElements from './DecorativeElements';

const TeamCard = ({ member, index }) => {
  return (
    <div 
      key={member.id} 
      className={`group relative ${
        index % 3 === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
      } ${
        index === 0 ? 'lg:row-span-2' : ''
      }`}
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/20 transform hover:-translate-y-2">
        {/* Decorative Elements */}
        <DecorativeElements variant="team" />
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Image Section */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <OptimizedImage
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/90 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-3xl"></div>
          
          <div className="relative z-10">
            {/* Name with Decorative Line */}
            <div className="mb-4">
              <h4 className="text-lg sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-300">
                {member.name}
              </h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            </div>
            
            {/* Position with Icon */}
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                {member.position}
              </p>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default TeamCard;
