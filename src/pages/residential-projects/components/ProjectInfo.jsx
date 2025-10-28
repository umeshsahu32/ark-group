import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import Tabs from "@components/ui/Tabs";
import OptimizedImage from "@components/ui/OptimizedImage";
import Button from "@components/ui/Button";
import { FaBuilding, FaCheckCircle, FaClock, FaHome, FaMapMarkerAlt, FaBed, FaRulerCombined } from "react-icons/fa";
import { ongoingProjects, completedProjects, upcomingProjects } from "@data/projectsData";

const ProjectInfo = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "ongoing", label: "Ongoing Projects", icon: FaBuilding, data: ongoingProjects },
    { id: "completed", label: "Completed Projects", icon: FaCheckCircle, data: completedProjects },
    { id: "upcoming", label: "Upcoming Projects", icon: FaClock, data: upcomingProjects },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab)?.data;
  const isUpcoming = activeTab === "upcoming";

  const renderUpcomingCard = (project) => (
    <div
      key={project.id}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          {project.location && (
            <div className="flex items-center text-white/90 text-sm">
              <FaMapMarkerAlt className="mr-2 text-primary" />
              <span>{project.location}</span>
            </div>
          )}
        </div>

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            COMING SOON
          </span>
        </div>
      </div>
    </div>
  );

  const renderDetailedCard = (project, index) => (
    <div
      key={project.id}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} h-auto`}>
        {/* Image Section */}
        <div className="relative lg:w-1/2 h-64 lg:h-84  overflow-hidden">
          <OptimizedImage
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-linear-to-r' : 'bg-linear-to-l'} lg:bg-linear-to-b from-black/15 via-transparent to-transparent`}></div>
          
          {/* Badge */}
          <div className={`${index % 2 === 0 ? 'left-4' : 'right-4'} absolute top-4`}>
            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {project.category}
            </span>
          </div>
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

            {/* Details */}
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
          </div>

          <Button
            to={project.link}
            variant="outline"
            size="md"
            className="w-full lg:w-auto mt-6 group-hover:scale-105 transition-transform duration-300"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );

  

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Residential"
          title="Portfolio"
          description="Explore our diverse range of residential projects from completed success stories to exciting upcoming developments."
          className="text-center mb-12"
        />

        {/* Tabs Navigation */}
        <div className="max-w-3xl mx-auto mb-16">
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Projects Layout */}
        {activeTabData?.length > 0 ? (
          <div className={isUpcoming ? "grid grid-cols-1 md:grid-cols-3 gap-8" : "space-y-10"}>
            {activeTabData.map((project, index) =>
              isUpcoming ? renderUpcomingCard(project) : renderDetailedCard(project, index)
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <FaHome className="mx-auto text-6xl text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Projects Available</h3>
            <p className="text-gray-500">Check back soon for new residential projects.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectInfo;
