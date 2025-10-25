import React from 'react';
import ArkFoundationBanner from './components/ArkFoundationBanner';
import ArkFoundationIntro from './components/ArkFoundationIntro';
import StarBeneficiaries from './components/StarBeneficiaries';
import AllBeneficiaries from './components/AllBeneficiaries';
import FoundationGallery from './components/FoundationGallery';

const ArkFoundation = () => {
  return (
    <div className="min-h-screen">
      <ArkFoundationBanner />
      <ArkFoundationIntro />
      <StarBeneficiaries />
      <AllBeneficiaries />
      <FoundationGallery />
    </div>
  );
};

export default ArkFoundation;