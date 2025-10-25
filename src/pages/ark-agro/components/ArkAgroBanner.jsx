import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const ArkAgroBanner = () => {
  return (
    <PageBanner
      title="Ark"
      subtitle="Agro"
      description="Producing high-quality and nutritious produce while preserving the soil for future generations. Fresh, healthy, and sustainable agriculture."
      backgroundColor="blue"
      accentColor="primary"
      showScrollIndicator={true}
      // backgroundImage="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      // imageOverlay="from-purple-900/80 via-purple-800/60 to-purple-900/80"
    />
  );
};

export default ArkAgroBanner;
