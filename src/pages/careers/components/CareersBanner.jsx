import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const CareersBanner = () => {
  return (
    <PageBanner
      title="Join Our"
      subtitle="Team"
      description="Be part of our mission to build tomorrow's infrastructure today. Explore exciting career opportunities and grow with us."
      backgroundColor="blue"
      accentColor="primary"
      showScrollIndicator={true}
    />
  );
};

export default CareersBanner;
