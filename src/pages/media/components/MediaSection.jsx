import React, { useState } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import BackgroundElements from "@components/ui/BackgroundElements";
import { FaTrophy, FaNewspaper, FaPlay } from "react-icons/fa";
import AwardsGallery from "./AwardsGallery";
import PressReleaseGallery from "./PressReleaseGallery";
import VideosGallery from "./VideosGallery";

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const tabs = [
    { id: "awards", label: "Awards & Accolades", icon: FaTrophy, component: <AwardsGallery /> },
    { id: "press", label: "Press Release", icon: FaNewspaper, component: <PressReleaseGallery /> },
    { id: "videos", label: "Videos", icon: FaPlay, component: <VideosGallery /> },
  ];

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundElements variant="minimal" opacity="opacity-5" />
      
      {/* Decorative floating dots */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-secondary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Media"
          title="Gallery"
          description="Explore our achievements, press coverage, and insights."
          className="text-center mb-12"
        />

        {/* Tabs Navigation */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4 bg-white p-2 py-4 rounded-2xl shadow-lg border border-gray-100">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-primary to-secondary text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="text-lg" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </Section>
  );
};

export default MediaSection;
