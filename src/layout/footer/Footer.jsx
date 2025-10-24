import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import arkGroupLogo from "../../assets/ark-group-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Ark Agro", path: "/ark-agro" },
    { name: "Ark Foundation", path: "/ark-foundation" },
    { name: "Blogs", path: "/blogs" },
    // { name: 'Careers', path: '/careers' },
    // { name: 'Contact Us', path: '/contact-us' },
    // { name: 'Infra Projects', path: '/infra-projects' },
    // { name: 'Media', path: '/media' },
    // { name: 'Residential Projects', path: '/residential-projects' }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/arkgroup",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/arkgroup",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/company/arkgroup",
      color: "hover:text-blue-700",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/arkgroup",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src={arkGroupLogo}
                alt="Ark Group Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building tomorrow's infrastructure with innovative solutions in
              sustainable development, residential projects, and community
              initiatives.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    4-51/SLNT/L 6-03-02, Level 6, Gachibowli, Hyderabad – 500
                    032 Telangana, India.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+91 40 29880313 "
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +91 40 29880313
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:info@arkgroup.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  info@arkgroup.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ark Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
