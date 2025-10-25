import React from 'react';
import OptimizedImage from './OptimizedImage';

const ImageGallery = ({ 
  images, 
  columns = 3, 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: {
      glow: 'from-green-400/20 to-emerald-400/20',
      overlay: 'from-black/40 via-transparent to-transparent'
    },
    amber: {
      glow: 'from-amber-400/20 to-orange-400/20',
      overlay: 'from-black/40 via-transparent to-transparent'
    },
    yellow: {
      glow: 'from-yellow-400/20 to-amber-400/20',
      overlay: 'from-black/40 via-transparent to-transparent'
    }
  };

  const currentVariant = variants[variant] || variants.default;
  const gridCols = columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <div className={`absolute -inset-4 bg-gradient-to-r ${currentVariant.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${currentVariant.overlay}`}></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold mb-1">{image.title}</h4>
              {image.subtitle && (
                <p className="text-white/90 text-sm">{image.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
