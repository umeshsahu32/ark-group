import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

// Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-pink-100">
      <div className="max-w-lg w-full mx-4 text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-red-200 rounded-full animate-pulse"></div>
              <div className="absolute top-2 left-2 w-16 h-16 border-2 border-red-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-4 left-4 w-12 h-12 border border-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-6 left-6 w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
          </p>
          <p className="text-gray-600 text-sm">
            Error ID: {Date.now().toString(36)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            onClick={resetErrorBoundary}
            className="inline-block w-full bg-linear-to-r from-red-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🔄 Try Again
          </button>
          
          <button 
            onClick={handleGoHome}
            className="inline-block w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            🏠 Go Home
          </button>
        </div>

        {/* Development Error Details */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-8 text-left bg-white p-4 rounded-lg shadow-md">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
              Error Details (Development Only)
            </summary>
            <div className="text-xs text-gray-600 space-y-2">
              <div>
                <strong>Error:</strong>
                <pre className="mt-1 p-2 bg-gray-100 rounded text-red-600 overflow-auto">
                  {error.toString()}
                </pre>
              </div>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

// Error Logger Function
function logErrorToService(error, errorInfo) {
  console.error('ErrorBoundary caught an error:', error, errorInfo);
  // Here you could send error to a logging service like Sentry, LogRocket, etc.
}

// Main ErrorBoundary Component
const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logErrorToService}
      onReset={() => {
        // Optional: clear any error state or perform cleanup
        console.log('Error boundary was reset');
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
