"use client";
import { useState, useEffect } from "react";
import { testimonials } from "../utils";
import Image from "next/image";

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  // Update slidesPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxSlide = Math.ceil(testimonials.length / slidesPerView) - 1;

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  // Calculate slide width as a percentage based on slidesPerView
  const slideWidth = 100 / slidesPerView;

  return (
    <div className="relative overflow-hidden">
      {/* Heading Section with Gradient Text */}
      <div className="mb-8 p-4 flex justify-between items-center">
        <div className="space-y-4">
          <h2 className="md:text-5xl text-3xl font-extrabold mt-10">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-[#160F92] to-[#AF47AA] bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-[#0D0D0D] text-lg md:text-xl">
            Their stories of success and satisfaction is a testimony of our
            dedication and expertise
          </p>
        </div>

        <div className="md:flex items-center justify-center mt-6 gap-4 hidden">
          <button
            onClick={prevSlide}
            className=" w-10 h-10 rounded-full bg-white border-2 border-gray-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className=" w-10 h-10 rounded-full bg-white border-2 border-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 items-center p-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center justify-center"
                style={{
                  flexBasis: `${slideWidth}%`,
                  flexShrink: 0,
                  flexGrow: 0,
                }}
              >
                <Image
                  className="-mb-10 z-1"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="flex flex-col items-center text-center justify-between gap-2 px-6 pb-6 pt-16 rounded-2xl border  border-[#0D0D0D] h-full w-full md:min-w-[500px] ">
                  <p className="font-medium text-base">"{testimonial.quote}"</p>

                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-indigo-600">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Positioned differently for mobile vs desktop */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevSlide}
            className=" w-10 h-10 rounded-full bg-white border-2 border-gray-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className=" w-10 h-10 rounded-full bg-white border-2 border-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
