import React from "react";
import { portfolioImages } from "../data";
import PageTransition from "../components/PageTransition";

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="py-20 px-8 sm:px-6 md:px-12 lg:px-24 bg-white mt-20">
        {/* Header */}
        <div className="text-center mb-12 max-w-7xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl  font-bold text-brand-black mb-1">
            Our Portfolio
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Take a look at some of the beautiful events we've brought to life.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="w-full max-w-2xl sm:max-w-4xl md:max-w-7xl lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {portfolioImages.map((image, idx) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-[10px] shadow-md transition-all duration-300 hover:shadow-xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both`,
              }}
            >
              {/* Image Wrapper for Aspect Ratio */}
              <div className="aspect-square flex items-center justify-center overflow-hidden">
               <img
  src={image.url}
  alt={image.alt}
  className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-80"
/>
              </div>

              {/* Optional Overlay Effect on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
