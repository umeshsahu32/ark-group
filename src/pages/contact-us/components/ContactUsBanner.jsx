import React from 'react';
import PageBanner from '@components/ui/PageBanner';

const ContactUsBanner = () => {
  return (
    <PageBanner
      title="Get In"
      subtitle="Touch"
      description="Ready to start your next project? Contact us today and let's discuss how we can bring your vision to life."
      backgroundColor="indigo"
      accentColor="secondary"
      showScrollIndicator={true}
    />
  );
};

export default ContactUsBanner;
