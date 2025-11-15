import React from 'react';
// To switch between hero variants:
// - Use HeroSection for the original variant (with button and description)
// - Use HeroSectionVariant for the new variant (centered heading with "Ark Group | Heading" format)
import HeroSection from './components/HeroSection';
import HeroSectionVariant from './components/HeroSectionVariant';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import HomeProjectSection from './components/HomeProjectSection';
import OurClient from './components/OurClient';
import ArkFoundation from './components/ArkFoundation';
import ArkAgro from './components/ArkAgro';
import ArkReflections from './components/ArkReflections';
import LeadershipLegacy from './components/LeadershipLegacy';

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* Uncomment the line below and comment out the line above to use the variant: */}
      <HeroSectionVariant />
      <AboutUs />
      <LeadershipLegacy />
      <HomeProjectSection />
      <ServicesSection />
      <OurClient />
      <ArkFoundation />
      <ArkReflections />
      <ArkAgro />
    </div>
  );
};

export default Home;