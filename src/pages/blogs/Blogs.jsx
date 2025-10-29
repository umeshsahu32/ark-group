import React from 'react';
import BlogsBanner from './components/BlogsBanner';
import BlogsList from './components/BlogsList';

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <BlogsBanner />
      <BlogsList />
    </div>
  );
};

export default Blogs;