import React, { useState } from "react";
import ResidentialProjectsBanner from "./components/ResidentialProjectsBanner";
import ProjectInfo from "./components/ProjectInfo";
import ProjectStats from "./components/ProjectStats";

const ResidentialProjects = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <div className="min-h-screen">
      <ResidentialProjectsBanner />
      <ProjectInfo activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectStats />
    </div>
  );
};

export default ResidentialProjects;
