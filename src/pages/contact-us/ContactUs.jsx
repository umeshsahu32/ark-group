import React from 'react';
import ContactUsBanner from './components/ContactUsBanner';
import ContactForm from './components/ContactForm';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactUsBanner />
      <ContactForm />
    </div>
  );
};

export default ContactUs;