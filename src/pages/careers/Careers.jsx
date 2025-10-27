import React from 'react';
import CareersBanner from './components/CareersBanner';
import JobOpenings from './components/JobOpenings';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CareersBanner />
      <JobOpenings />
    </div>
  );
};

export default Careers;