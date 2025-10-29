import React, { useState, useMemo } from 'react';
import Button from '@components/ui/Button';
import SectionHeader from '@components/ui/SectionHeader';
import OptimizedImage from '@components/ui/OptimizedImage';
import { FaCalendarAlt, FaUser, FaArrowRight, FaFilter, FaSort } from 'react-icons/fa';
import { blogsDataList } from '@data/blogs';

const BlogsList = () => {
  // Get unique categories from blogs data
  const categories = useMemo(() => {
    return [...new Set(blogsDataList.map(blog => blog.category))].sort();
  }, []);

  // State for filters and sorting
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('date-desc'); // date-desc, date-asc, a-z, z-a
  const [showFilters, setShowFilters] = useState(false);

  const handleReadMore = (blogId) => {
    // TODO: Navigate to blog detail page
    console.log('Navigate to blog:', blogId);
  };

  // Handle category toggle
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  // Parse date string to Date object for sorting
  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = blogsDataList;

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(blog => selectedCategories.includes(blog.category));
    }

    // Sort blogs
    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'date-desc':
          return parseDate(b.date) - parseDate(a.date);
        case 'date-asc':
          return parseDate(a.date) - parseDate(b.date);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategories, sortOption]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="Latest"
          titleAccent="Blogs"
          description="Stay informed with our latest insights, news, and updates from the world of infrastructure, residential development, and community initiatives."
          className="mb-8 md:mb-10"
        />

        {/* Filter and Sort Controls */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md border border-gray-100">
            {/* Filter Toggle Button - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors"
            >
              <FaFilter />
              <span>Filters</span>
              {selectedCategories.length > 0 && (
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedCategories.length}
                </span>
              )}
            </button>

            {/* Filter Section */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block space-y-4 md:space-y-0`}>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <FaFilter className="text-primary hidden md:block" />
                <span className="text-sm font-semibold text-gray-700">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer"
                    />
                    <span className={`text-sm transition-colors ${
                      selectedCategories.includes(category)
                        ? 'text-primary font-semibold'
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Section */}
            <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
              <FaSort className="text-primary" />
              <label htmlFor="sort-select" className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
              >
                <option value="date-desc">Date: Newest First</option>
                <option value="date-asc">Date: Oldest First</option>
                <option value="a-z">Title: A-Z</option>
                <option value="z-a">Title: Z-A</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {selectedCategories.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {category}
                  <span className="text-primary">×</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedCategories([])}
                className="text-sm text-gray-600 hover:text-primary font-medium"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Modern Magazine-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredAndSortedBlogs.map((blog, index) => {
            // Create varying card sizes for visual interest
            // First 3 cards get special treatment: large, then two side-by-side
            const isLarge = index === 0; // First card - larger on desktop
            const isFeatured = index === 3 || index === 7 || index === 11; // Every 4th after first gets wider
            
            return (
              <article
                key={blog.id}
                className={`group relative bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/30 flex flex-col ${
                  isLarge ? 'lg:col-span-2' : 
                  isFeatured ? 'lg:col-span-2' : 
                  ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image Section - Compact size */}
                <div className={`relative overflow-hidden bg-gray-100 ${
                  isLarge ? 'h-48 sm:h-52 md:h-56' : 
                  isFeatured ? 'h-48 sm:h-56' : 
                  'h-40 sm:h-44'
                }`}>
                  <OptimizedImage
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={
                      isLarge ? "(max-width: 768px) 100vw, 50vw" : 
                      isFeatured ? "(max-width: 1024px) 100vw, 50vw" : 
                      "(max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 text-[10px] sm:text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-primary" />
                      <span className="truncate max-w-[100px] sm:max-w-none">{blog.date.split(' ').slice(0, 3).join(' ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaUser className="text-primary" />
                      <span className="truncate">{blog.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                    isLarge ? 'text-lg sm:text-xl md:text-2xl' : 
                    isFeatured ? 'text-base sm:text-lg md:text-xl' : 
                    'text-sm sm:text-base'
                  }`}>
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-gray-600 leading-relaxed mb-3 sm:mb-4 grow line-clamp-2 ${
                    isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}>
                    {blog.excerpt}
                  </p>

                  {/* Footer with Read More */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      {blog.readTime}
                    </span>
                    <Button
                      onClick={() => handleReadMore(blog.id)}
                      variant="outline"
                      size="sm"
                      className="group/btn px-3 py-1.5 text-xs"
                      showArrow={false}
                    >
                      <span className="flex items-center gap-1">
                        Read
                        <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Subtle hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            );
          })}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-10 md:mt-12">
          {filteredAndSortedBlogs.length === 0 ? (
            <div className="py-12">
              <p className="text-base md:text-lg text-gray-600">
                No blogs found matching your filters.
              </p>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Clear filters to see all blogs
                </button>
              )}
            </div>
          ) : (
            <p className="text-sm md:text-base text-gray-600">
              Showing <span className="font-semibold text-primary">{filteredAndSortedBlogs.length}</span> of{' '}
              <span className="font-semibold text-gray-700">{blogsDataList.length}</span> blogs
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
