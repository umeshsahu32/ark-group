import React from 'react';
import OptimizedImage from './OptimizedImage';

const HeroImage = ({ 
  src, 
  alt, 
  title, 
  subtitle, 
  description, 
  stats = [], 
  gradientFrom = 'from-green-400', 
  gradientTo = 'to-emerald-400',
  className = "h-96 sm:h-[500px] lg:h-[600px]"
}) => {
  return (
    <div className="relative group">
      <div className={`absolute -inset-6 bg-gradient-to-r ${gradientFrom}/20 ${gradientTo}/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <OptimizedImage
          src={src}
          alt={alt}
          className={`w-full ${className} object-cover group-hover:scale-105 transition-transform duration-1000`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Overlay Content */}
        <div className="absolute bottom-2 left-8 right-8 text-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-2">
              {title}
              {subtitle && (
                <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                  {subtitle}
                </span>
              )}
            </h2>
            {description && (
              <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl">
                {description}
              </p>
            )}
            
            {/* Stats Grid */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-300">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
