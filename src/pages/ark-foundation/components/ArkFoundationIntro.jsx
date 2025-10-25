import React from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import ImageCard from "@components/ui/ImageCard";
import {
  FaHeart,
  FaHandshake,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import foundationImage from "@assets/foundation/foundation-4.jpeg";

const ArkFoundationIntro = () => {
  return (
    <Section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          subtitle="Philanthropic Initiative"
          title="Ark"
          titleAccent="Foundation"
          description="Making a positive impact in communities through education, healthcare, and social initiatives. Building a better tomorrow together."
          className="text-center mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-primary">Ark Foundation</strong>, a
                philanthropic initiative by Ark Group, is dedicated to creating
                a brighter and more inclusive future for all. With a strong
                commitment to social responsibility and a motto of{" "}
                <em className="text-primary font-semibold">
                  "Step Towards a Better Future"
                </em>
                , we focus on lifting the lives of the underprivileged and
                bringing positive change in society.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Rooted in the principles of{" "}
                <strong className="text-secondary">
                  Openness, Accountability, Trust and Happiness
                </strong>
                . Ark Foundation addresses the most pressing issues faced by the
                needy. Our support through financial aid, mentorship, and
                comprehensive training to young talent gives them the tools they
                need to succeed in their chosen fields, creating a supportive
                environment to achieve and encourage bright minds.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through our various initiatives, we aim to empower deserving
                individuals, strengthen communities, and promote a culture of
                giving. By working together, we strive to create a world where
                everyone has the opportunity to thrive and contribute to the
                greater good.
              </p>
            </div>

            <div className="text-left mt-8">
              <div className="inline-flex items-center space-x-4 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">
                  Step Towards a Better Future
                </span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-8">
            {/* Main Image */}
            <ImageCard
              src={foundationImage}
              alt="Ark Foundation - Building a Better Future"
              title="Making Impact"
              subtitle="Empowering communities"
            />

            {/* Secondary Image */}
            <ImageCard
              src={foundationImage}
              alt="Ark Foundation Initiatives"
              title="Social Responsibility"
              subtitle="Creating positive change"
              imageClassName="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </Section>
  );
};

export default ArkFoundationIntro;
