import React, { useEffect } from "react";
import { FaTimes, FaMapMarkerAlt, FaClock, FaBriefcase, FaCalendarAlt, FaRupeeSign  } from "react-icons/fa";
import Button from "@components/ui/Button";

const JobDetailsModal = ({ job, isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary font-semibold text-sm">{job.department}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-primary" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaBriefcase className="mr-2 text-primary" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center text-primary font-semibold">
                  <FaRupeeSign className="mr-2" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="text-2xl text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-8">
          {/* Job Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
            <div className="grid grid-cols-2 gap-3">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-primary text-xl" />
                <div>
                  <span className="text-sm text-gray-600">Published:</span>
                  <p className="font-semibold text-gray-900">{job.publishedDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-primary text-xl" />
                <div>
                  <span className="text-sm text-gray-600">Deadline:</span>
                  <p className="font-semibold text-gray-900">{job.applicationDeadline}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  // TODO: Implement email application or form
                  window.location.href = `mailto:careers@arkgroup.com?subject=Application for ${job.title}&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in applying for the position of ${job.title} at Ark Group.%0D%0A%0D%0ARegards`;
                }}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
