import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@components/ui/Button";
import OptimizedImage from "@components/ui/OptimizedImage";
import { heroCarouselData } from "@data/heroData";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % heroCarouselData.length;
        console.log(`Auto-scroll: ${prev} -> ${nextSlide}`);
        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Navigation functions
  const goToSlide = (index) => {
    console.log(`Manual navigation: ${currentSlide} -> ${index}`);
    setCurrentSlide(index);
    // Pause auto-scroll temporarily, then resume
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => {
      const newSlide =
        (prev - 1 + heroCarouselData.length) % heroCarouselData.length;
      console.log(`Previous: ${prev} -> ${newSlide}`);
      return newSlide;
    });
    // Pause auto-scroll temporarily, then resume
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % heroCarouselData.length;
      console.log(`Next: ${prev} -> ${newSlide}`);
      return newSlide;
    });
    // Pause auto-scroll temporarily, then resume
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {/* Background Images Container */}
        <div className="absolute inset-0">
          {heroCarouselData.map((slide, index) => {
            const isActive = index === currentSlide;
            console.log(
              `Slide ${index}: ${slide.heading} - Active: ${isActive}`
            );

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <OptimizedImage
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-cover"
                  sizes="100vw"
                  onError={(e) => {
                    console.error("Failed to load image:", slide.image);
                    e.target.style.display = "none";
                  }}
                  onLoad={() => console.log(`Image loaded: ${slide.heading}`)}
                />
              </div>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full">
          {heroCarouselData.map((slide, index) => (
            <div
              key={`content-${slide.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Left Side Content */}
              <div className="absolute left-20 top-0 bottom-0 w-full lg:w-1/2 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-2xl">
                  {/* Heading */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight animate-fade-in-delay whitespace-nowrap text-ellipsis">
                    <span className="text-white drop-shadow-lg">
                      {slide.heading.split(" ").slice(0, -1).join(" ")}
                    </span>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary drop-shadow-lg ml-2">
                      {slide.heading.split(" ").slice(-1)[0]}
                    </span>
                  </h1>

                  {/* Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-white/90 drop-shadow-lg animate-fade-in-delay-2  line-clamp-2">
                    {slide.paragraph}
                  </p>

                  {/* Button */}
                  <div className="animate-fade-in-delay-2">
                    <Button
                      to={slide.link}
                      variant="primary"
                      size="md"
                      className="relative z-20 shadow-2xl"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-primary bg-opacity-20 hover:bg-opacity-30 hover:bg-primary/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-primary/80 bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroCarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:scale-110 ${
              index === currentSlide
                ? "w-8 h-3 bg-primary rounded-full shadow-lg"
                : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full backdrop-blur-sm"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
