"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { SlideProps } from "../utils";
import Image from "next/image";
import ButtonSecondary from "./ui/buttonSecondary";

type PropType = {
  slides: SlideProps[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mt-8">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="embla__slide" // Add this class for proper spacing
            >
              <div className="flex flex-col gap-4 px-4 py-6 border-3 border-[#0D0D0D]/28 rounded-3xl">
                <Image src={slide.imageSrc} alt="blog-img" />
                <div className="flex items-center gap-2">
                  <ButtonSecondary>Mobile App</ButtonSecondary>
                  <button className="p-3 text-white bg-gradient-to-r min-w-[180px] from-[#160F92] to-[#AF47AA] rounded-4xl font-bold">
                    19th March, 2025
                  </button>
                </div>
                <h1 className="text-2xl font-extrabold">{slide.title}</h1>
                <p className="text-[#9B9B9B]">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
