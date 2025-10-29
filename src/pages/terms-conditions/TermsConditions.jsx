import React from "react";
import Section from "@components/ui/Section";
import PageBanner from "@components/ui/PageBanner";
import DecorativeElements from "@components/ui/DecorativeElements";
import Button from "@components/ui/Button";

const TermsConditions = () => {
  const termsContent = `1. General Notice
Information provided on this site (e.g., illustrations, plans, pricing, specifications) is for general guidance only and subject to change without notice. Nothing constitutes a legal offer. arkgroup.in

2. Offers & Participation
Participation in any offers is voluntary. Detailed terms will be communicated separately. Ark Group may modify or withdraw offers at any time without prior notice. arkgroup.in

3. No Warranty for Offers
Ark Group does not guarantee the utility or value of any discount or promotional benefit. It is not liable for any deficiency or loss arising from availing such offers. arkgroup.in

4. No Liability for Delays
Ark Group will not be responsible for postal or courier delays or any related liability. arkgroup.in

5. Taxes & Liabilities
Any applicable taxes, duties, or charges related to an offer are the sole responsibility of the customer. arkgroup.in

6. Disclaimer
Content is provided "as is" and for general information purposes only.
Ark Group makes no warranties and disclaims liability for any loss or damage arising from the use of the information.
Visuals such as layouts, colour schemes, and designs are artists' impressions and may vary. Final offerings may differ as required by architects or regulatory authorities. arkgroup.in

7. Accuracy & Updates
The company endeavours to keep content up to date and accurate, but variations may occur. Verification by users is recommended before making decisions. arkgroup.in

8. Modification Clause
Ark Group reserves the right to modify any terms at its discretion, without prior notice or reason. arkgroup.in

9. Authorisation for Communication
By submitting contact details, visitors authorise Ark Group to reach out via calls, SMS, or emails—even if listed on DND registries. arkgroup.in`;

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Terms &"
        subtitle="Conditions"
        description="Please read these terms and conditions carefully before using our website and services."
        backgroundColor="primary"
        accentColor="secondary"
        showScrollIndicator={true}
      />
      <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative Elements */}
          <DecorativeElements variant="background" />
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative border border-gray-100">
              {/* Decorative Elements on Content Box */}
              <DecorativeElements variant="team" />
              
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {termsContent}
                </div>
              </div>
              
              {/* Back to Home Button */}
              <div className="mt-8 text-center">
                <Button
                  to="/"
                  variant="primary"
                  size="md"
                  className="inline-flex items-center gap-2"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TermsConditions;
