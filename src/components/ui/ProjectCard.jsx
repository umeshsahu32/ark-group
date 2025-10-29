import React from "react";
import OptimizedImage from "@components/ui/OptimizedImage";
import Button from "@components/ui/Button";
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaCheckCircle } from "react-icons/fa";

const ProjectCard = ({ 
  project, 
  index, 
  showProjectList = false, 
  showButton = true,
  customContent = null
}) => {
  const renderDefaultDetails = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {project.location && (
        <div className="flex items-center p-2.5 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
          <FaMapMarkerAlt className="text-primary mr-3 text-lg" />
          <span className="text-sm text-gray-700 font-medium">{project.location}</span>
        </div>
      )}
      {project.bhk && (
        <div className="flex items-center p-2.5 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
          <FaBed className="text-secondary mr-3 text-lg" />
          <span className="text-sm text-gray-700 font-medium">{project.bhk}</span>
        </div>
      )}
      {project.size && (
        <div className="flex items-center p-2.5 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
          <FaRulerCombined className="text-primary mr-3 text-lg" />
          <span className="text-sm text-gray-700 font-medium">{project.size}</span>
        </div>
      )}
    </div>
  );

  const renderProjectList = () => (
    <div className="space-y-2 mt-4">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">Project List:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {project.projectList?.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
          >
            <FaCheckCircle className="text-primary mr-3 mt-1 shrink-0" />
            <span className="text-sm text-gray-700 font-medium">{item}</span>
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
      <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
        {/* Image Section */}
        <div className="relative lg:w-1/2 h-64 lg:h-auto lg:self-stretch overflow-hidden">
          <OptimizedImage
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-linear-to-r' : 'bg-linear-to-l'} lg:bg-linear-to-b from-black/15 via-transparent to-transparent`}></div>
          
          {/* Badge */}
          {project.category && (
            <div className={`${index % 2 === 0 ? 'left-4' : 'right-4'} absolute top-4`}>
              <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-5 lg:p-6 px-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
              {project.name}
            </h3>
            {project.description && (
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
            )}

            {/* Custom Content or Default Details or Project List */}
            {customContent ? customContent : (
              showProjectList ? renderProjectList() : renderDefaultDetails()
            )}
          </div>

          {/* Button - Only show if showButton is true */}
          {showButton && project.link && (
            <Button
              to={project.link}
              variant="outline"
              size="md"
              className="w-full lg:w-auto mt-6 group-hover:scale-105 transition-transform duration-300"
            >
              View Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

