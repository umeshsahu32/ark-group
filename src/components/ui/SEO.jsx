import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Ark Group - Building Tomorrow\'s Infrastructure',
  description = 'Leading sustainable development with innovative infrastructure, residential projects, agricultural innovations, and community initiatives.',
  keywords = 'Ark Group, infrastructure, residential projects, agriculture, sustainable development, community initiatives',
  image = '/ark-group-logo.png',
  url = '',
  type = 'website'
}) => {
  const fullTitle = title.includes('Ark Group') ? title : `${title} | Ark Group`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ark Group" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ark Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#c4a37f" />
      
      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ark Group",
          "description": "Leading sustainable development with innovative infrastructure solutions",
          "url": "https://arkgroup.com",
          "logo": "https://arkgroup.com/ark-group-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-40-29880313",
            "contactType": "customer service",
            "email": "info@arkgroup.in"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4-51/SLNT/L 6-03-02, Level 6, Gachibowli",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500032",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
