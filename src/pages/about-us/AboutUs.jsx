import React from 'react';
import AboutUsBanner from './components/AboutUsBanner';
import AboutUsIntro from './components/AboutUsIntro';
import ArkVision from './components/ArkVision';
import ManagementTeam from './components/ManagementTeam';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <AboutUsBanner />
      <AboutUsIntro />
      <ArkVision />
      <ManagementTeam />
    </div>
  );
};

export default AboutUs;