import React from 'react';
import Section from '@components/ui/Section';
import SectionHeader from '@components/ui/SectionHeader';
import ImageCard from '@components/ui/ImageCard';

const AboutUsIntro = () => {
  return (
    <Section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Expertise"
          title="Ark Group"
          accentTitle="Excellence"
          description="With over 36 years of experience in construction, Ark Group has established itself as a leading player in Hyderabad and Bengaluru."
          className="text-center mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ark Group's expertise in multi-dwelling spaces is evident in the exceptional industrial projects and residential homes we have delivered, ensuring a spellbinding experience for our clients and customers every time.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on our exceptional craftsmanship, unique design language, and valuable solutions that cater to the diverse needs of our clients and customers.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Ark Group, we strive for excellence in every aspect of our work, from design and planning to execution and delivery. We are dedicated to creating innovative and sustainable living spaces that cater to the evolving needs of our clients and customers.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">36+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-linear-to-br from-secondary/5 to-primary/5 rounded-xl border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">2</div>
                <div className="text-sm text-gray-600 font-medium">Major Cities</div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <ImageCard
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Ark Group Construction Project"
              title="Industrial Excellence"
              subtitle="Modern industrial facilities"
            />

            {/* Secondary Image */}
            <ImageCard
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="Ark Group Residential Project"
              title="Residential Mastery"
              subtitle="Sustainable living spaces"
              imageClassName="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Trusted by clients across Hyderabad & Bangalore</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsIntro;
