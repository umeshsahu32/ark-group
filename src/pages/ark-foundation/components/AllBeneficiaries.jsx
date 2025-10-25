import React, { useState, useEffect, useRef, useCallback } from "react";
import Section from "@components/ui/Section";
import SectionHeader from "@components/ui/SectionHeader";
import OptimizedImage from "@components/ui/OptimizedImage";
import { otherBeneficiariesData } from "@data/arkFoundationData";

const AllBeneficiaries = () => {
  const [visibleBeneficiaries, setVisibleBeneficiaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const loadingRef = useRef();

  const ITEMS_PER_PAGE = 12; // Load 12 items at a time

  // Load more beneficiaries
  const loadMoreBeneficiaries = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setCurrentPage((prevPage) => {
        const startIndex = prevPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const newBeneficiaries = otherBeneficiariesData.slice(
          startIndex,
          endIndex
        );

        if (newBeneficiaries.length === 0) {
          setHasMore(false);
          setIsLoading(false);
          return prevPage;
        }

        setVisibleBeneficiaries((prev) => {
          // Filter out any duplicates based on ID
          const existingIds = new Set(prev.map(item => item.id));
          const uniqueNewBeneficiaries = newBeneficiaries.filter(item => !existingIds.has(item.id));
          return [...prev, ...uniqueNewBeneficiaries];
        });
        setIsLoading(false);
        return prevPage + 1;
      });
    }, 500);
  }, [isLoading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreBeneficiaries();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [loadMoreBeneficiaries, hasMore, isLoading]);

  // Load initial data
  useEffect(() => {
    if (visibleBeneficiaries.length === 0) {
      loadMoreBeneficiaries();
    }
  }, [loadMoreBeneficiaries, visibleBeneficiaries.length]);

  return (
    <Section className="py-16 lg:py-24 bg-linear-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-tr from-secondary/5 to-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Community"
          title="All"
          titleAccent="Beneficiaries"
          description="Meet all the talented individuals we're supporting on their journey to success. Each one has unique dreams and aspirations."
          className="text-center mb-16"
        />

        {/* Beneficiaries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {visibleBeneficiaries.map((beneficiary, index) => (
            <div
              key={beneficiary.id}
              className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
            >
              {/* Image Container */}
              <div className="relative mb-4">
                <div className="relative overflow-hidden rounded-xl">
                  <OptimizedImage
                    src={beneficiary.image}
                    alt={beneficiary.name}
                    className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-linear-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {beneficiary.name}
                </h4>

                {/* Current Status */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Current:
                    </span>
                    <span className="text-xs text-gray-700 font-semibold">
                      {beneficiary.current}
                    </span>
                  </div>

                  {/* Goal */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Goal:
                    </span>
                    <span className="text-xs text-primary font-bold">
                      {beneficiary.goal}
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="w-full h-1 bg-linear-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-linear-to-r from-primary to-secondary rounded-full animate-bounce"></div>
              <div
                className="w-4 h-4 bg-linear-to-r from-primary to-secondary rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-4 h-4 bg-linear-to-r from-primary to-secondary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <span className="text-gray-600 font-medium ml-4">
                Loading more beneficiaries...
              </span>
            </div>
          </div>
        )}

        {/* End of list indicator */}
        {!hasMore && visibleBeneficiaries.length > 0 && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-4 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-gray-700 font-medium">
                All {otherBeneficiariesData.length} beneficiaries loaded
              </span>
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>
          </div>
        )}

        {/* Intersection Observer Target */}
        <div ref={loadingRef} className="h-4"></div>
      </div>
    </Section>
  );
};

export default AllBeneficiaries;
