import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import InfraProjectCard from "@components/ui/InfraProjectCard";
import { infraProjects } from "@data/projectsData";
import BackgroundElements from "@components/ui/BackgroundElements";

const InfraProjectsList = () => {
  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50">
         <BackgroundElements variant="minimal" opacity="opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative floating dots */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse hidden lg:block"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-2/4 w-5 h-5 bg-primary/60 rounded-full animate-pulse hidden lg:block"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Infrastructure"
          title="Portfolio"
          description="Explore our diverse range of infrastructure projects including industrial, institutional, and residential developments."
          className="text-center mb-12"
        />

        {/* Projects Layout */}
        {infraProjects?.length > 0 ? (
          <div className="space-y-10">
            {infraProjects.map((project, index) => (
              <InfraProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Projects Available</h3>
            <p className="text-gray-500">Check back soon for new infrastructure projects.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default InfraProjectsList;

