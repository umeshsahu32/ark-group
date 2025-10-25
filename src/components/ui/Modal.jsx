import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title = "",
  className = "",
  showCloseButton = true,
  closeOnBackdropClick = true 
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group/close"
          >
            <FaTimes className="text-gray-600 group-hover/close:text-primary group-hover/close:scale-110 transition-all duration-300" />
          </button>
        )}

        {/* Title */}
        {title && (
          <div className="px-6 pt-6 pb-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
