"use client";

import React, { useState } from "react";
import RedButton from "../common/RedButton";
import Image from "next/image";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import MotionWrapper from "../common/MotionWrapper";

// PROJECT SLIDES (ADD AS MANY AS YOU WANT)
const slides = [
  { img: "/projects/Elixir-Anfeild.webp", title: "Elixir Anfield" },
  { img: "/about/Orchid.webp", title: "The Orchid" },
  { img: "/about/Elixir-Akkara-Gardens.webp", title: "Elixir Akkara Gardens" },
  { img: "/projects/Elixir-Manavath-Heights1.webp", title: "Elixir Manavath Heights" },
  { img: "/home/Elixir-Super-Luxury-Villas11.webp", title: "Elixir Super Luxury Villas " },
];

const OurProjects = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + 2 < slides.length) {
      setIndex(index + 2);
    }
  };

  const handlePrev = () => {
    if (index - 2 >= 0) {
      setIndex(index - 2);
    }
  };

  // Get the two slides to show (desktop)
  const currentSlides = slides.slice(index, index + 2);

  return (
    <div className="w-full bg-white">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-24 lg:pt-20 lg:pb-32 xl:pt-50 xl:pb-[11.8rem]">

        {/* TOP SECTION */}
        <div className="w-full h-fit flex justify-between">
          <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-185 mb-10 md:mb-0">
             <MotionWrapper>
            <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
              our projects
            </h5>
             </MotionWrapper>
              <MotionWrapper>
            <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-5.75 xl:mt-5.75">
              A Glimpse Into Elegance
            </h2>
             </MotionWrapper>
              <MotionWrapper>
            <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10.5">
              Explore the portfolio of Elixir Homes, featuring premium residential projects in Thrissur that combine modern design, quality construction, and trusted delivery. Find the home that perfectly fits your lifestyle.
            </p>
             </MotionWrapper>
          </div>

          <MotionWrapper className="hidden md:flex items-end justify-end md:w-[48%] lg:w-[50%] xl:w-[418.5px]">
            <RedButton text="VIEW PROJECTS" link="/projects" />
          </MotionWrapper>
        </div>

        {/* DESKTOP BUTTONS */}
        <MotionWrapper className="hidden md:flex gap-4 mt-20.5">
          {/* PREV BUTTON */}
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`${index === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            <ArrowLeftIcon
              className="text-[#7B7B7B] size-10"
              strokeWidth={0.7}
            />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            disabled={index + 2 >= slides.length}
            className={`${index + 2 >= slides.length
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer"
              }`}
          >
            <ArrowRightIcon
              className="text-[#7B7B7B] size-10"
              strokeWidth={0.7}
            />
          </button>
        </MotionWrapper>


        {/* DESKTOP SLIDER — ALWAYS 2 */}
        <MotionWrapper className="hidden md:flex gap-x-7.5 mt-6">
          {currentSlides.map((slide, i) => (
            <div key={i} className="flex flex-col w-1/2 transition-all duration-300">
              <div className="w-full aspect-square relative">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h6 className="font-cormorant regular-heading mt-5 text-[#1b1a1f]">
                {slide.title}
              </h6>
            </div>
          ))}
        </MotionWrapper>

        {/* MOBILE SCROLLABLE ROW */}
        <MotionWrapper
          className="
    md:hidden 
    flex 
    gap-x-5 
    mt-10 
    overflow-x-auto 
    scrollbar-hide 
    snap-x 
    snap-mandatory 
    scroll-smooth
    whitespace-nowrap
    pr-5
  "
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="inline-block min-w-[90%] snap-center"

            >
              <div className="w-full h-95 relative overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>


              <h6 className="font-cormorant regular-heading mt-3 text-[#1b1a1f]">
                {slide.title}
              </h6>
            </div>
          ))}
        </MotionWrapper>


      </div>
    </div>
  );
};

export default OurProjects;
