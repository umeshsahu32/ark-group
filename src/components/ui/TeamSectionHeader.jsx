import React from 'react';

const TeamSectionHeader = ({ 
  icon: Icon, 
  title, 
  gradientFrom = "from-primary", 
  gradientTo = "to-secondary" 
}) => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div className="flex items-center justify-center mb-4">
        <Icon className={`text-2xl mr-3 ${gradientFrom.includes('primary') ? 'text-primary' : 'text-secondary'}`} />
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      <div className={`w-20 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} mx-auto rounded-full`}></div>
    </div>
  );
};

export default TeamSectionHeader;
