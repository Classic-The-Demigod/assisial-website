
"use client"
import  { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { slides } from "../utils";

const ResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate maximum index based on screen size
  const getMaxIndex = () => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      return isMobile ? slides.length - 1 : slides.length - 2;
    }
    return slides.length - 2; // Default to desktop view
  };

  const goToNext = () => {
    const maxIndex = getMaxIndex();
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    const maxIndex = getMaxIndex();
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goToNext();
    }
    if (touchEndX - touchStartX > 50) {
      goToPrev();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / (window.innerWidth < 768 ? 1 : 2))
            }%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-[350px] px-4">
              <div className="bg-white rounded-lg overflow-hidden border-3 border-[#0D0D0D47]">
                <div className="relative h-48 w-full">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex space-x-4 mb-3">
                    <button className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                      {slide.appLabel}
                    </button>
                    <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded-full">
                      {slide.buttonText}
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-gray-700 text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Dots indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => {
          // For mobile: show one dot per slide
          // For desktop: show one dot per two slides (with max of slides.length / 2 dots)
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          if (isMobile || index % 2 === 0) {
            const dotIndex = isMobile ? index : index / 2;
            const isActive = isMobile
              ? index === currentIndex
              : index === currentIndex || index === currentIndex + 1;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  isActive ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ResponsiveSlider;
