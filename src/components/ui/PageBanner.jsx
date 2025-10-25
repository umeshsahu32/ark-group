import React from "react";
import OptimizedImage from "./OptimizedImage";

const PageBanner = ({
  title,
  subtitle,
  description,
  backgroundColor = "slate",
  accentColor = "primary",
  showScrollIndicator = true,
  className = "",
  backgroundImage = null,
  imageOverlay = "from-black/60 via-black/40 to-black/60",
}) => {
  const scrollToNextSection = () => {
    // Find the next section after this banner
    const nextSection =
      document.querySelector("section:nth-of-type(2)") ||
      document.querySelector("main > div:not(:first-child)") ||
      document.querySelector(".container:not(:first-child)");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // If no next section found, scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Color variants
  const colorVariants = {
    slate: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    blue: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
    green: "bg-gradient-to-br from-green-900 via-green-800 to-green-900",
    purple: "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900",
    orange: "bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900",
    red: "bg-gradient-to-br from-red-900 via-red-800 to-red-900",
    indigo: "bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900",
    teal: "bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900",
  };

  const backgroundClass = colorVariants[backgroundColor] || colorVariants.slate;

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${backgroundClass} ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <OptimizedImage
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Image Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${imageOverlay}`}></div>
        </div>
      )}

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute top-20 left-20 w-72 h-72 bg-${accentColor}/30 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-${accentColor}/20 rounded-full blur-3xl animate-pulse delay-500`}
        ></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-10 left-10 w-4 h-4 bg-${accentColor} rotate-45 animate-spin`}
        ></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-secondary rotate-12 animate-bounce"></div>
        <div
          className={`absolute bottom-20 left-1/4 w-3 h-3 bg-${accentColor}/60 rotate-45 animate-pulse`}
        ></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-secondary/60 rotate-45 animate-spin"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-6 text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hover:scale-105 transition-transform duration-300">
              <span className="text-white">{title}</span>
              {subtitle && (
                <>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
                    {subtitle}
                  </span>
                </>
              )}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>

            {/* Description */}
            {description && (
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={scrollToNextSection}
          title="Scroll to next section"
        >
          <div className="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform duration-300">
            <div className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">
              Scroll
            </div>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/80 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PageBanner;
