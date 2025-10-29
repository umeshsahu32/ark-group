import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const BlogsBanner = () => {
  return (
    <PageBanner
      title="Latest"
      subtitle="News & Insights"
      description="Stay updated with our latest news, insights, and industry trends. Read our blogs to learn more about our projects, services, and the latest developments in the construction industry."
      backgroundColor="primary"
      accentColor="secondary"
      showScrollIndicator={true}
    />
  );
};

export default BlogsBanner;
