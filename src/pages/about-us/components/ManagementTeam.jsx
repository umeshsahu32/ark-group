import React, { useState } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import BackgroundElements from "@components/ui/BackgroundElements";
import ManagementModal from "@components/ui/ManagementModal";
import TeamSectionHeader from "@components/ui/TeamSectionHeader";
import DecorativeElements from "@components/ui/DecorativeElements";
import TeamCard from "@components/ui/TeamCard";
import {
  FaLinkedin,
  FaChevronDown,
  FaQuoteLeft,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";
import { managementTeamData } from "@data/managementTeamData";

const ManagementTeam = () => {
  const { management, team } = managementTeamData;
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <Section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements
        variant="minimal"
        opacity="opacity-3"
        className="overflow-hidden pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Leadership"
          title="Management &"
          titleAccent="Core Team"
          description="Meet the visionary leaders and dedicated professionals driving Ark Group's success"
          className="text-center mb-12 sm:mb-16"
        />

        {/* Management Section */}
        <div className="mb-16 sm:mb-20">
          <TeamSectionHeader 
            icon={FaBuilding} 
            title="Management Team" 
            gradientFrom="from-primary" 
            gradientTo="to-secondary" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {management.map((member, index) => (
              <div
                key={member.id}
                className={`group ${index % 2 === 0 ? "lg:pr-6" : "lg:pl-6"}`}
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Decorative Elements */}
                  <DecorativeElements variant="management" />

                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

                      {/* LinkedIn Button */}
                      <div className="absolute top-4 right-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group/linkedin backdrop-blur-sm"
                        >
                          <FaLinkedin className="text-primary text-xl group-hover/linkedin:scale-110 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 p-6 sm:p-8">
                      <div className="mb-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h4>
                        <p className="text-primary font-semibold text-sm sm:text-base">
                          {member.position}
                        </p>
                      </div>

                      {/* Description Preview */}
                      <div className="relative">
                        <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-h-16 overflow-hidden">
                          <p>{member.description}</p>
                        </div>

                        {/* Gradient Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={() => openModal(member)}
                        className="mt-3 flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-semibold group/btn"
                      >
                        <FaQuoteLeft className="mr-2 text-xs group-hover/btn:scale-110 transition-transform duration-300" />
                        <span>Read More</span>
                        <FaChevronDown className="ml-2 text-xs group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div>
          <TeamSectionHeader 
            icon={FaUsers} 
            title="Core Team" 
            gradientFrom="from-secondary" 
            gradientTo="to-primary" 
          />

          {/* Unique Team Layout - Hexagonal Grid */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <DecorativeElements variant="background" />
            </div>

            {/* Team Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>

            {/* Bottom Decorative Element */}
            <div className="flex justify-center mt-12">
              <div className="w-32 h-1 bg-linear-to-r from-transparent via-secondary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Modal */}
      <ManagementModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={closeModal}
      />
    </Section>
  );
};

export default ManagementTeam;
