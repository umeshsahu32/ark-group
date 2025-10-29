import React from "react";
import InfraProjectsBanner from "./components/InfraProjectsBanner";
import InfraProjectsList from "./components/InfraProjectsList";

const InfraProjects = () => {
  return (
    <div className="min-h-screen">
      <InfraProjectsBanner />
      <InfraProjectsList />
    </div>
  );
};

export default InfraProjects;