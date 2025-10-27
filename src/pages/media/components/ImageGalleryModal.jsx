import React from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OptimizedImage from "@components/ui/OptimizedImage";

const ImageGalleryModal = ({ images, selectedIndex, isOpen, onClose, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedIndex || 0);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(selectedIndex || 0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-3xl flex items-center justify-between z-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{currentIndex + 1} / {images.length}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-2xl text-gray-500" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative h-[70vh] flex items-center justify-center bg-gray-50">
          <OptimizedImage
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            sizes="90vw"
            onLoad={() => setIsLoading(false)}
          />

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-primary animate-spin"></div>
            </div>
          )}

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
              >
                <FaChevronLeft className="text-gray-700 group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
              >
                <FaChevronRight className="text-gray-700 group-hover:text-primary transition-colors" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="px-6 py-4 bg-white border-t border-gray-200 rounded-b-3xl overflow-x-auto">
            <div className="flex space-x-3 justify-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsLoading(true);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    index === currentIndex
                      ? 'border-primary scale-110'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <OptimizedImage
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
