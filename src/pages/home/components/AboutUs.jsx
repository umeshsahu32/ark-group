import React from "react";
import Button from "../../../components/ui/Button";
import SectionHeader from "../../../components/ui/SectionHeader";
// Import your images here
import arkGroupImage from "../../../assets/about-us-banner.jpeg";
import founderImage from "../../../assets/management/gmr.jpg";


const AboutUs = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-600 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-600 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Heading with Animation */}
            <div className="space-y-4">
              <SectionHeader
                subtitle="About Us"
                title="Ark"
                titleAccent="Group"
                className="text-left mb-0!"
               
              />
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in-delay-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ark Group, we are pioneers in sustainable development,
                committed to building tomorrow's infrastructure with innovative
                solutions that shape communities for generations to come.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our diverse portfolio spans across infrastructure projects,
                residential developments, agricultural innovations, and
                community foundation initiatives, all driven by our vision of
                creating a better, more sustainable future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of expertise and a commitment to excellence, we
                continue to lead the industry in delivering projects that not
                only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>

            {/* Know More Button */}
            <div className="animate-fade-in-delay-2">
              <Button
                to="/about-us"
                variant="primary"
                size="md"
                className="shadow-xl hover:shadow-2xl"
              >
                Know More
              </Button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            {/* Company Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-delay">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={arkGroupImage}
                    alt="Ark Group Office Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-delay-2 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* Founder Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <img
                    src={founderImage}
                    alt="Gummi Ram Reddy - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Founder Info */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">
                  Gummi Ram Reddy
                  </h4>
                  <p className="text-sm text-secondary font-medium">
                    Founder & CEO
                  </p>
                  <p className="text-xs text-gray-600 max-w-xs">
                  Ram is a successful entrepreneur, philanthropist, and the current CMD of Ark Group. With an impressive 36+ years of career, he is a respected and influential leader within his organization, industry, and community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Cities Served" },
            { number: "15+", label: "Years Experience" },
            { number: "1000+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-delay-2"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
