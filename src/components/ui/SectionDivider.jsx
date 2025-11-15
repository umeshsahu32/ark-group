import React from 'react';

const SectionDivider = ({ className = '' }) => {
  return (
    <div className={`mt-16 ${className}`}>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-1 bg-linear-to-r from-transparent to-primary rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-12 h-1 bg-linear-to-l from-transparent to-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
