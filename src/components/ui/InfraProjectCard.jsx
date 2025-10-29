import React from "react";
import OptimizedImage from "@components/ui/OptimizedImage";
import DecorativeElements from "@components/ui/DecorativeElements";
import { FaCheckCircle } from "react-icons/fa";

const InfraProjectCard = ({ project, index }) => {
  const isOdd = index % 2 === 0; // 0-indexed, so even = odd card
  
  // Content section with image, title, and description
  const renderContentSection = () => (
    <div className="relative flex flex-col h-full">
      {/* Image */}
      <div className="relative h-64 md:h-80 lg:flex-1 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-transparent"></div>
      </div>
      
      {/* Title and Description */}
      <div className="p-4 bg-white">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        {project.description && (
          <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );

  // Project list section
  const renderProjectList = () => (
    <div className="p-4 md:p-6 bg-gray-50 h-full flex flex-col">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Project List:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto flex-1">
        {project.projectList?.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-2 bg-white rounded-lg hover:bg-primary/5 transition-colors duration-300"
          >
            <FaCheckCircle className="text-primary mr-2 mt-1 shrink-0 text-sm" />
            <span className="text-xs md:text-sm text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      key={project.id}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative Elements */}
      <DecorativeElements variant="management" />
      
      <div className={`flex flex-col lg:flex-row ${isOdd ? '' : 'lg:flex-row-reverse'}`}>
        {/* Content Section - Image, Title, Description */}
        <div className="lg:w-1/2 lg:min-h-[500px]">
          {renderContentSection()}
        </div>

        {/* Project List Section */}
        <div className="lg:w-1/2 lg:min-h-[500px]">
          {renderProjectList()}
        </div>
      </div>
    </div>
  );
};

export default InfraProjectCard;

