import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import HomeProjectSection from './components/HomeProjectSection';
import OurClient from './components/OurClient';
import ArkFoundation from './components/ArkFoundation';
import ArkAgro from './components/ArkAgro';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <HomeProjectSection />
      <ServicesSection />
      <OurClient />
      <ArkFoundation />
      <ArkAgro />
    </div>
  );
};

export default Home;