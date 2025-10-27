import React, { useState } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import Button from "@components/ui/Button";
import BackgroundElements from "@components/ui/BackgroundElements";
import { jobListings } from "@data/index";
import JobDetailsModal from "./JobDetailsModal";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaBuilding, 
  FaLaptopCode, 
  FaUserTie, 
  FaChartLine, 
  FaRupeeSign 
} from "react-icons/fa";

const JobOpenings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Get unique departments and locations
  const departments = [...new Set(jobListings.map(job => job.department))];
  const locations = [...new Set(jobListings.flatMap(job => job.location.split(',').map(l => l.trim())))];

  // Filter jobs
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || 
                           job.location.split(',').some(l => l.trim() === selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const getDepartmentIcon = (department) => {
    const iconMap = {
      'Technology': FaLaptopCode,
      'Projects': FaChartLine,
      'Sales & Marketing': FaRupeeSign,
      'Human Resources': FaUserTie,
      'Construction': FaBuilding,
      'Finance & Accounting': FaRupeeSign,
    };
    return iconMap[department] || FaBriefcase;
  };

  const getDepartmentColor = (department) => {
    const colorMap = {
      'Technology': 'bg-blue-500',
      'Projects': 'bg-green-500',
      'Sales & Marketing': 'bg-purple-500',
      'Human Resources': 'bg-pink-500',
      'Construction': 'bg-orange-500',
      'Finance & Accounting': 'bg-yellow-500',
    };
    return colorMap[department] || 'bg-primary';
  };

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50 relative overflow-hidden">
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
          className="absolute top-70 left-2/4 w-5 h-5 bg-primary/60 rounded-full animate-pulse hidden lg:block"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Section Header */}
        <SectionHeader
          subtitle="Opportunities"
          title="Current Job"
          titleAccent="Openings"
          description="Join our team and be part of building the future. Find the perfect role that matches your skills and passion."
          className="text-center mb-12"
        />

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="all">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredJobs.length} of {jobListings.length} positions
            </div>
          </div>
        </div>

        {/* Job Listings Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => {
              const IconComponent = getDepartmentIcon(job.department);
              const colorClass = getDepartmentColor(job.department);

              return (
                <div
                  key={job.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer overflow-hidden"
                  onClick={() => handleJobClick(job)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center shadow-md`}>
                        <IconComponent className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600">{job.department}</p>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-primary" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaBriefcase className="mr-2 text-primary" />
                      <span className="text-sm">{job.experience}</span>
                    </div>
                    <div className="flex items-center text-primary font-semibold">
                      <FaRupeeSign className="mr-2" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                  </div>

                  {/* Description Preview */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
                    {job.description}
                  </p>

                  {/* Apply Button */}
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      className="w-4/5"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJobClick(job);
                      }}
                    >
                      View Details & Apply
                    </Button>
                  </div>

                  {/* Bottom accent */}
                  <div className="w-full h-1 bg-linear-to-r from-primary to-secondary rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <FaBriefcase className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Positions Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Section>
  );
};

export default JobOpenings;
