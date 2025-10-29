import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-6">
        {/* Main spinner with gradient and shadow */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
          <div className="absolute top-1 left-1 w-14 h-14 border-2 border-transparent border-t-blue-300 border-r-blue-200 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
        
        {/* Loading dots animation */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
        
        {/* Loading text with fade effect */}
        <div className="text-gray-600 text-sm font-medium animate-pulse">
          Loading content...
        </div>
        
       
      </div>
    </div>
  );
};

export default Loader;
