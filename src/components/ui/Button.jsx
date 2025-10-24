import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  disabled = false,
  className = '',
  showArrow = false,
  ...props 
}) => {
  // Base button styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  // Variant styles
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-2xl focus:ring-primary/50 button-shimmer',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white shadow-md hover:shadow-lg focus:ring-secondary/50',
    outline: 'bg-transparent hover:bg-primary/10 text-primary border-2 border-primary hover:border-primary/80 focus:ring-primary/50',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
    cta: 'bg-transparent hover:bg-transparent text-gray-600 hover:text-primary focus:ring-primary/50 transform-none hover:scale-100'
  };
  
  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Arrow component
  const ArrowIcon = () => (
    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Button content with optional arrow
  const buttonContent = (
    <>
      <span className={showArrow ? 'mr-2' : ''}>{children}</span>
      {showArrow && <ArrowIcon />}
    </>
  );
  
  // If it's a Link (React Router)
  if (to) {
    return (
      <Link
        to={to}
        className={buttonStyles}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }
  
  // If it's a regular anchor link
  if (href) {
    return (
      <a
        href={href}
        className={buttonStyles}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }
  
  // Regular button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
