import React from 'react';

const SectionHeader = ({ 
  subtitle, 
  title, 
  titleAccent, 
  description, 
  className = '',
  subtitleColor = 'text-primary',
  titleColor = 'text-secondary',
  accentGradient = 'from-primary to-secondary',
  dividerColor = 'from-primary to-secondary',
  descriptionColor = 'text-gray-600',
  maxWidth = 'max-w-3xl'
}) => {
  return (
    <div className={`text-center mb-16 md:mb-20 ${className}`}>
      <div className="inline-block">
        {subtitle && (
          <span className={`text-sm font-semibold ${subtitleColor} uppercase tracking-wider mb-4 block`}>
            {subtitle}
          </span>
        )}
        
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${titleColor} mb-6 leading-tight`}>
          {title}
          {titleAccent && (
            <span className={`text-transparent bg-clip-text bg-linear-to-r ${accentGradient}`}>
          {' '}{titleAccent}
            </span>
          )}
        </h2>
        
        <div className={`w-16 sm:w-20 md:w-24 h-1 bg-linear-to-r ${dividerColor} mx-auto rounded-full`}></div>
      </div>
      
      {description && (
        <p className={`text-lg sm:text-xl ${descriptionColor} mt-6 sm:mt-8 ${maxWidth} mx-auto leading-relaxed px-4`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
