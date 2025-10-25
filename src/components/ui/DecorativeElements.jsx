import React from 'react';

const DecorativeElements = ({ 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    management: [
      { position: '-top-4 -right-4', size: 'w-8 h-8', color: 'from-primary/20 to-secondary/20', animation: 'animate-pulse' },
      { position: '-bottom-4 -left-4', size: 'w-6 h-6', color: 'from-secondary/20 to-primary/20', animation: 'animate-bounce' }
    ],
    team: [
      { position: '-top-3 -right-3', size: 'w-6 h-6', color: 'from-secondary/30 to-primary/30', animation: 'animate-pulse' },
      { position: '-bottom-3 -left-3', size: 'w-4 h-4', color: 'from-primary/20 to-secondary/20', animation: 'animate-bounce' }
    ],
    background: [
      { position: 'top-10 left-10', size: 'w-32 h-32', color: 'bg-secondary', animation: 'blur-3xl' },
      { position: 'bottom-10 right-10', size: 'w-40 h-40', color: 'bg-primary', animation: 'blur-3xl' }
    ]
  };

  return (
    <>
      {variants[variant].map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} ${
            variant === 'background' ? element.color : `bg-gradient-to-r ${element.color}`
          } ${
            variant === 'background' ? element.animation : `rounded-full ${element.animation}`
          } ${className}`}
        />
      ))}
    </>
  );
};

export default DecorativeElements;
