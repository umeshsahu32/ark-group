import React from 'react';
import BackgroundElements from './BackgroundElements';

const Section = ({ 
  children, 
  className = '', 
  backgroundVariant = 'default',
  backgroundOpacity = 'opacity-5',
  containerClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  relative = true
}) => {
  return (
    <section className={`py-10 ${className} ${relative ? 'relative overflow-hidden' : ''}`}>
      {relative && (
        <BackgroundElements 
          variant={backgroundVariant} 
          opacity={backgroundOpacity} 
        />
      )}
      <div className={`${containerClass} ${relative ? 'relative z-10' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
