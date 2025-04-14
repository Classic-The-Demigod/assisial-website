"use client";
import { useEffect } from "react";
import { testimonials } from "../utils";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  // Update slidesPerView based on screen size
 

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

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
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full bg-white border-2 border-gray-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
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
            onClick={scrollNext}
            className="w-10 h-10 rounded-full bg-white border-2 border-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
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

      {/* Testimonial Slider using Embla with unique class names */}
      <div className="testimonial-embla">
        <div className="testimonial-embla__viewport" ref={emblaRef}>
          <div className="testimonial-embla__container p-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-embla__slide">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="-mb-10 z-1"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="flex flex-col items-center text-center justify-between gap-2 px-6 pb-6 pt-16 rounded-2xl border border-[#0D0D0D] h-full w-full  md:min-w-[500px] min-h-[300px]">
                    <p className="font-medium text-base">
                      "{testimonial.quote}"
                    </p>

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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="md:hidden flex justify-center mt-6 gap-4">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full bg-white border-2 border-gray-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
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
            onClick={scrollNext}
            className="w-10 h-10 rounded-full bg-white border-2 border-[#0D0D0D] flex items-center justify-center hover:bg-gray-50 transition-colors"
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
