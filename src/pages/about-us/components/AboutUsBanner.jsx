import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const AboutUsBanner = () => {
  return (
    <PageBanner
      title="About"
      subtitle="Ark Group"
      description="Pioneering the future of infrastructure development with innovative solutions, sustainable practices, and unwavering commitment to excellence."
      backgroundColor="slate"
      accentColor="primary"
      showScrollIndicator={true}
    //   backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    //   imageOverlay="from-black/70 via-black/50 to-black/70"
    />
  );
};

export default AboutUsBanner;
