import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full mx-4 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 animate-pulse">
            404
          </h1>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn!
          </p>
        </div>
        
        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
            <div className="relative">
              {/* Floating elements */}
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-bounce"></div>
              <div className="absolute top-2 left-2 w-12 h-12 border-2 border-purple-200 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-4 left-4 w-8 h-8 border border-pink-200 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🏠 Take Me Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-block w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            ← Go Back
          </button>
        </div>
        
        {/* Additional Help */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? Try one of these popular pages:</p>
          <div className="mt-2 space-x-4">
            <Link to="/about-us" className="text-blue-600 hover:text-blue-800 underline">About Us</Link>
            <Link to="/contact-us" className="text-blue-600 hover:text-blue-800 underline">Contact</Link>
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800 underline">Blogs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
