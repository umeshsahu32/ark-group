import React, { useState } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import Button from "@components/ui/Button";
import BackgroundElements from "@components/ui/BackgroundElements";
import OptimizedImage from "@components/ui/OptimizedImage";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import contactImage from "@assets/foundation/foundation-4.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Contact info data
  const contactInfo = [
    {
      id: 1,
      icon: FaPhone,
      title: "Phone",
      details: ["+91 123 456 7890", "+91 987 654 3210"],
    },
    {
      id: 2,
      icon: FaEnvelope,
      title: "Email",
      details: ["info@arkgroup.com", "contact@arkgroup.com"],
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "Location",
      details: ["Hyderabad, Telangana", "Bangalore, Karnataka"],
    },
  ];

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(value.replace(/[\s\-\(\)]/g, ""))) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundElements variant="minimal" opacity="opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative floating dots */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse hidden lg:block"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-2/4 w-5 h-5 bg-primary/60 rounded-full animate-pulse hidden lg:block"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Section Header */}
        <SectionHeader
          subtitle="Connect With Us"
          title="Get In"
          titleAccent="Touch"
          description="Have a question or want to work with us? Send us a message and we'll get back to you as soon as possible."
          className="text-center mb-16"
        />

        {/* Modern Two-Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Image Section */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <OptimizedImage
                  src={contactImage}
                  alt="Get in Touch with Ark Group"
                  className="w-full h-70 object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-white/90 text-base">
                    We're here to help you bring your vision to life
                  </p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="w-10 h-10 bg-linear-to-r from-primary to-secondary rounded-xl flex items-center justify-center shrink-0 shadow-md">
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          {item.title}
                        </h4>
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Success Message */}
                  {isSuccess && (
                    <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center space-x-4 animate-fade-in">
                      <FaCheckCircle className="text-green-600 text-3xl shrink-0" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mb-1">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-green-700">
                          Thank you for contacting us. We'll get back to you
                          soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaUser />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:opacity-50 ${
                            errors.name
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <div className="flex items-center space-x-2 mt-2 text-red-600">
                          <FaExclamationCircle className="text-sm" />
                          <span className="text-sm">{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaPhone />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:opacity-50 ${
                            errors.phone
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                          placeholder="Enter your 10-digit phone number"
                        />
                      </div>
                      {errors.phone && (
                        <div className="flex items-center space-x-2 mt-2 text-red-600">
                          <FaExclamationCircle className="text-sm" />
                          <span className="text-sm">{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaEnvelope />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:opacity-50 ${
                            errors.email
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                          placeholder="Enter your email address"
                        />
                      </div>
                      {errors.email && (
                        <div className="flex items-center space-x-2 mt-2 text-red-600">
                          <FaExclamationCircle className="text-sm" />
                          <span className="text-sm">{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-gray-400">
                          <FaComment />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={6}
                          style={{ resize: "none" }}
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:opacity-50 ${
                            errors.message
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:border-primary"
                          }`}
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>
                      {errors.message && (
                        <div className="flex items-center space-x-2 mt-2 text-red-600">
                          <FaExclamationCircle className="text-sm" />
                          <span className="text-sm">{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
