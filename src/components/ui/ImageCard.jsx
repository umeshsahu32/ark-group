import React from 'react';
import OptimizedImage from './OptimizedImage';

const ImageCard = ({
  src,
  alt,
  title,
  subtitle,
  className = "",
  imageClassName = "w-full h-80 object-cover",
  overlayClassName = "from-black/20 to-transparent",
  contentPosition = "bottom-6 left-6",
  hoverScale = true,
  showGlow = true
}) => {
  return (
    <div className={`relative group ${className}`}>
      {showGlow && (
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      )}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
        <OptimizedImage
          src={src}
          alt={alt}
          className={`${imageClassName} ${hoverScale ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayClassName}`}></div>
        <div className={`absolute ${contentPosition} text-white`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/90 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
