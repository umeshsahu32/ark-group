import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const ArkFoundationBanner = () => {
  return (
    <PageBanner
      title="Ark"
      subtitle="Foundation"
      description="Making a positive impact in communities through education, healthcare, and social initiatives. Building a better tomorrow together."
      backgroundColor="purple"
      accentColor="secondary"
      showScrollIndicator={true}
    />
  );
};

export default ArkFoundationBanner;
