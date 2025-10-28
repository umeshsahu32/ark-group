import React from "react";
import Section from "@components/ui/Section";
import { FaBuilding, FaCheckCircle, FaClock, FaHome } from "react-icons/fa";

const ProjectStats = () => {
  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "25+", label: "Active Projects", icon: FaBuilding, color: "text-primary" },
            { number: "15+", label: "Completed", icon: FaCheckCircle, color: "text-secondary" },
            { number: "10+", label: "Upcoming", icon: FaClock, color: "text-primary" },
            { number: "1000+", label: "Happy Families", icon: FaHome, color: "text-secondary" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  <stat.icon className="text-3xl" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectStats;

