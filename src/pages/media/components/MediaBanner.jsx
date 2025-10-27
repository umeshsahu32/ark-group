import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const MediaBanner = () => {
  return (
    <PageBanner
      title="Media &"
      subtitle="Recognition"
      description="Discover our achievements, press coverage, and insights through awards, press releases, and video content."
      backgroundColor="primary"
      accentColor="secondary"
      showScrollIndicator={true}
    />
  );
};

export default MediaBanner;
