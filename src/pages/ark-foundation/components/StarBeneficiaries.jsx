import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import { beneficiariesData } from "@data/arkFoundationData";

const StarBeneficiaries = () => {
  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-secondary/5 to-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Success Stories"
          title="Our Star"
          titleAccent="Beneficiaries"
          description="Meet the exceptional individuals whose lives have been transformed through Ark Foundation's support. Their achievements inspire us to continue making a difference."
          className="text-center mb-16"
        />

        {/* Timeline Style Layout */}
        <div className="relative">
          {/* Beneficiaries Timeline */}
          <div className="space-y-16 lg:space-y-24">
            {beneficiariesData.map((beneficiary, index) => {
              const IconComponent = beneficiary.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={beneficiary.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-10 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/11 ${
                      isEven ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <div
                      className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ring-2 ring-primary ring-opacity-50 scale-105`}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {beneficiary.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {beneficiary.title}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Achievement Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                          <IconComponent className="text-primary text-sm mr-2" />
                          <span className="text-sm font-semibold text-gray-800">
                            {beneficiary.achievement}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-sm ">
                        {beneficiary.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="w-full h-1 bg-linear-to-r from-primary to-secondary rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:pl-8" : "lg:pr-8"
                    }`}
                  >
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <OptimizedImage
                          src={beneficiary.image}
                          alt={beneficiary.name}
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                        {/* Year badge on image */}
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                            <span className="text-xs font-bold text-gray-700">
                              {beneficiary.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-6 w-4 h-4 bg-primary/50 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 bg-secondary/50 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Empowering Dreams, Creating Impact
            </span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StarBeneficiaries;
