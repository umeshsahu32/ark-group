import React from 'react';

const BackgroundElements = ({ 
  variant = 'default',
  opacity = 'opacity-5',
  className = ''
}) => {
  const variants = {
    default: [
      { position: 'top-20 left-10', size: 'w-32 h-32', color: 'bg-blue-600', delay: '0s' },
      { position: 'bottom-20 right-10', size: 'w-40 h-40', color: 'bg-green-600', delay: '1s' },
      { position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', size: 'w-60 h-60', color: 'bg-purple-600', delay: '2s' }
    ],
    minimal: [
      { position: 'top-20 left-10', size: 'w-32 h-32', color: 'bg-primary', delay: '0s' },
      { position: 'bottom-20 right-10', size: 'w-40 h-40', color: 'bg-secondary', delay: '1s' }
    ],
    agro: [
      { position: 'top-20 left-10', size: 'w-32 h-32', color: 'bg-green-500', delay: '0s' },
      { position: 'bottom-20 right-10', size: 'w-40 h-40', color: 'bg-emerald-500', delay: '1s' },
      { position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', size: 'w-60 h-60', color: 'bg-green-400', delay: '0.5s' }
    ]
  };

  return (
    <div className={`absolute inset-0 ${opacity} ${className}`}>
      {variants[variant].map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: element.delay }}
        />
      ))}
    </div>
  );
};

export default BackgroundElements;
