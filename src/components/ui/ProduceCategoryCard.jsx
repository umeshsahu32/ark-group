import React from 'react';

const ProduceCategoryCard = ({ 
  category, 
  items, 
  icon, 
  colorScheme,
  showMoreCount = 0,
  className = ''
}) => {
  const IconComponent = icon;
  
  return (
    <div className={`group relative bg-gradient-to-br ${colorScheme.bg} rounded-3xl p-8 shadow-xl border ${colorScheme.border} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}>
      {/* Decorative Elements */}
      <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${colorScheme.decorative} rounded-full animate-pulse`}></div>
      <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r ${colorScheme.decorative.replace('/30', '/20')} rounded-full animate-bounce`}></div>
      
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${colorScheme.icon} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
          <IconComponent className="text-white text-2xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
          <p className={`${colorScheme.text} font-medium`}>{category.subtitle}</p>
        </div>
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {items.slice(0, 6).map((item, index) => (
          <span
            key={index}
            className={`px-3 py-2 bg-white/80 ${colorScheme.itemText} rounded-lg text-sm font-medium text-center shadow-sm`}
          >
            {item}
          </span>
        ))}
      </div>
      
      {/* More Count */}
      {showMoreCount > 0 && (
        <div className="text-center">
          <span className={`${colorScheme.text} font-semibold`}>+{showMoreCount} More Varieties</span>
        </div>
      )}
    </div>
  );
};

export default ProduceCategoryCard;
