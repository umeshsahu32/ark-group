import React from 'react';
import { 
  FaAward, FaLeaf, FaHeart, FaStar, FaGlassWhiskey, FaShieldAlt,
  FaSeedling, FaRecycle, FaAppleAlt, FaCarrot, FaPaw, FaTint
} from 'react-icons/fa';

// Icon mapping object for efficient lookup
const iconMap = {
  FaAward,
  FaLeaf,
  FaHeart,
  FaStar,
  FaGlassWhiskey,
  FaShieldAlt,
  FaSeedling,
  FaRecycle,
  FaAppleAlt,
  FaCarrot,
  FaPaw,
  FaTint
};

const FeatureCard = ({ 
  feature, 
  variant = 'default',
  layout = 'vertical',
  showDescription = true,
  className = ''
}) => {
  const IconComponent = iconMap[feature.icon];
  
  const variants = {
    default: {
      card: 'rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2',
      glow: 'from-green-400/20 to-emerald-400/20',
      decorative: 'from-green-400/30 to-emerald-400/30',
      hover: 'hover:border-green-300',
      overlay: 'from-green-400/10'
    },
    amber: {
      card: 'rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2',
      glow: 'from-amber-400/20 to-orange-400/20',
      decorative: 'from-amber-400/30 to-orange-400/30',
      hover: 'hover:border-amber-300',
      overlay: 'from-amber-400/10'
    },
    yellow: {
      card: 'rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2',
      glow: 'from-yellow-400/20 to-amber-400/20',
      decorative: 'from-yellow-400/30 to-amber-400/30',
      hover: 'hover:border-yellow-300',
      overlay: 'from-yellow-400/10'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div
      className={`group relative ${feature.bgColor} ${currentVariant.card} overflow-hidden border ${feature.borderColor} ${currentVariant.hover} ${className}`}
    >
      {/* Decorative Elements */}
      <div className={`absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r ${currentVariant.decorative} rounded-full animate-pulse`}></div>
      <div className={`absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r ${currentVariant.decorative.replace('/30', '/20')} rounded-full animate-bounce`}></div>
      
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${currentVariant.glow} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative p-6 sm:p-8">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-400/5 to-green-400/5 rounded-tr-3xl"></div>
        
        <div className="relative z-10">
          {layout === 'horizontal' ? (
            // Horizontal layout (for ArkGaushala)
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4"></div>
                {showDescription && (
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ) : (
            // Vertical layout (default)
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="text-white text-2xl sm:text-3xl" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Divider */}
              <div className="w-12 h-1 sm:w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
              
              {/* Description */}
              {showDescription && (
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${currentVariant.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
    </div>
  );
};

export default FeatureCard;
