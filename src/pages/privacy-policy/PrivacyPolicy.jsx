import React from "react";
import Section from "@components/ui/Section";
import PageBanner from "@components/ui/PageBanner";
import DecorativeElements from "@components/ui/DecorativeElements";
import Button from "@components/ui/Button";

const PrivacyPolicy = () => {
  const privacyContent = `Ark Group customers are not bound in any way to participate in any offers, if/ when they are made available. Any such participation is voluntary. The events conducted by Ark are a way of a unique facility for limited customers. The terms mentioned here shall be in addition to and not in derogation of the terms contained in the agreement.
By accepting/availing any existing/upcoming offer, the customer information may be shared with third-party contractors and agents without being liable to pay any compensation and Ark Group hereby consents to the same.
    
Detailed terms and conditions of the offer will be communicated by the associated partners to the interested customers while availing of the offer.

Ark Group reserves the right at any time, without prior notice to add, alter, modify, change or vary all or any of these terms and conditions or to replace wholly or in part, the above offer by another offer, whether similar to above offer or not, or to withdraw it altogether.

Ark Group does not guarantee and makes any representation about the usefulness, worthiness and/or character of the discount/benefit or of the Products/Services under the offer provided.

Ark Group shall not be responsible or liable in any manner for deficiency or inadequacy of the offer or any loss whatsoever of any nature in the course of or after availing the offer. Ark Group is not responsible for any postal / courier delays that may happen. Any tax or other liabilities or charges payable to the government or any other statutory authority/body or any participating establishment — related to the offer— shall be to the sole account of the customer. Tax deducted at source, if any, on the monetary value of the offer is payable by the Ark Group customer.

The existence of a dispute, if any, regarding the offer shall not constitute a claim against Ark Group. The offer is not available wherever prohibited and/or on products/services for which such offers cannot be made available for any reason whatsoever.

Ark Group reserves the right to modify/ change all or any of the terms applicable to the offer without assigning any reasons or without any prior intimation whatsoever. Ark Group also reserves the right to discontinue the offer without assigning any reasons or without any prior intimation whatsoever.`;

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Privacy"
        subtitle="Policy"
        description="Ark Group is committed to protecting your privacy and ensuring the security of your personal information."
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
                  {privacyContent}
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

export default PrivacyPolicy;
