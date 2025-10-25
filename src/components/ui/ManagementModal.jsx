import React, { useEffect, useState } from 'react';
import OptimizedImage from './OptimizedImage';
import Button from './Button';
import { FaLinkedin } from 'react-icons/fa';

const ManagementModal = ({ member, isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle loading state properly
  useEffect(() => {
    if (isOpen) {
      // Reset loading state when modal opens
      setIsLoaded(false);
      
      // Simulate loading delay
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 800); // Reduced to 800ms for better UX
      
      return () => clearTimeout(timer);
    } else {
      // Reset when modal closes
      setIsLoaded(false);
    }
  }, [isOpen]);

  if (!member) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full h-[90vh] overflow-hidden ${
          isOpen ? 'scale-100' : 'scale-0'
        } transition-transform duration-300 ease-out`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section - Full Height */}
          <div className="relative lg:w-2/5 h-64 lg:h-full overflow-hidden bg-gray-200">
            {/* Loading Skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}
            
            {/* Actual Image */}
            <OptimizedImage
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* LinkedIn Button */}
            <div className="absolute top-4 right-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaLinkedin className="text-primary text-xl" />
              </a>
            </div>

            {/* Position Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-primary">{member.position}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 p-6 sm:p-8 overflow-y-auto">
            {/* Loading Skeleton for Content */}
            {!isLoaded && (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-1 bg-gray-200 rounded animate-pulse w-16"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                </div>
                <div className="flex gap-4 mt-8">
                  <div className="h-12 bg-gray-200 rounded-xl animate-pulse flex-1"></div>
                  <div className="h-12 bg-gray-200 rounded-xl animate-pulse w-24"></div>
                </div>
              </div>
            )}

            {/* Actual Content */}
            <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">{member.name}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              
              {/* Full Description */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: member.description }}
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  as="a"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="group/linkedin-btn"
                  size='sm'
                >
                 
                  Connect on LinkedIn
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  size='sm'
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementModal;
