import React from 'react';
import MediaBanner from './components/MediaBanner';
import MediaSection from './components/MediaSection';

const Media = () => {
  return (
    <div className="min-h-screen">
      <MediaBanner />
      <MediaSection />
    </div>
  );
};

export default Media;