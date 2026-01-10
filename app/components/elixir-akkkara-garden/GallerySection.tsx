"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import MotionWrapper from "../common/MotionWrapper";


const categories = [
  "Landscape & community spaces",
  "World-Class Common Amenities",
  "Premium Infrastructure & Safety",
  "Eco Friendly Living",
];

const images = [

  { src: "/blog/g5.webp", category: 0 },
  { src: "/blog/g6.webp", category: 0 },


  { src: "/gallery/a9.webp", category: 1 },
  { src: "/gallery/a6.webp", category: 1 },
  { src: "/gallery/a4.webp", category: 1 },
  { src: "/gallery/a7.webp", category: 1 },

  { src: "/gallery/a5.webp", category: 2 },
  { src: "/gallery/a3.webp", category: 2 },


  { src: "/gallery/a1.webp", category: 3 },
  { src: "/gallery/a8.webp", category: 3 },
  { src: "/gallery/a2.webp", category: 3 },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const activeColor = "#FFFFFF";       // Pure white
  const disabledColor = "#ffffff80";     // Visible dark grey


  const updateButtons = () => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;

    // Disable prev when at start
    setIsPrevDisabled(el.scrollLeft <= 0);

    // Disable next when end is reached
    setIsNextDisabled(
      el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10
    );
  };


  const imageWidth = 600;

  const updateActiveCategory = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / imageWidth);
    const safeIndex = Math.min(Math.max(index, 0), images.length - 1);
    setActiveCategory(images[safeIndex].category);
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: imageWidth, behavior: "smooth" });

    setTimeout(() => {
      updateActiveCategory();
      updateButtons();
    }, 300);
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -imageWidth, behavior: "smooth" });

    setTimeout(() => {
      updateActiveCategory();
      updateButtons();
    }, 300);
  };


  const handleImageClick = (index: number) => {
    const element = imageRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(updateActiveCategory, 400);
  };

  const rotatedCategories = [
    ...categories.slice(activeCategory),
    ...categories.slice(0, activeCategory),
  ];

  return (
    <section className="w-full elixir-black-bg text-white pt-[6.3rem] pb-142">
      {/* ----------------------- TOP SECTION ----------------------- */}
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-14">
          <div className=" lg:max-w-md">
            <MotionWrapper>
              <p className="taghead-text text-[#8B8E72] font-inter">Elixir Akkara Gardens</p>
            </MotionWrapper>
            <MotionWrapper>
              <h2 className="font-cormorant section-title text-white mt-[1.4rem]">
                Gallery
              </h2>
            </MotionWrapper>
            <MotionWrapper>
              <p className="normal-text font-inter text-white lg:w-[80%] mt-[1.6rem]">
                The Elixir Akkara Gardens is all about luxury and comfort. We had put all our focus to provide extreme comfort as well as luxury
              </p>
            </MotionWrapper>
          </div>

          {/* CATEGORY LIST */}
          <MotionWrapper className="space-y-3 pr-2 -mt-[0.3rem]">
            {rotatedCategories.map((cat, idx) => {
              const originalIndex = categories.indexOf(cat);

              const opacityLevels = [
                "text-white",
                "text-white/50",
                "text-white/40",
                "text-white/30",
                "text-white/20",
              ];

              return (
                <p
                  key={idx}

                  className={`cursor-pointer text-[28px] font-cormorant transition-all 
                    ${opacityLevels[idx]}
                  `}
                >
                  {cat}
                </p>
              );
            })}
          </MotionWrapper>
        </div>
      </div>

      {/* ----------------------- IMAGE SLIDER (FULL WIDTH RIGHT) ----------------------- */}
      {/* IMAGE SLIDER */}
      <MotionWrapper className="mt-[4.8rem] w-full relative">

        {/* 1) Get container left offset */}
        <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">
          <div id="gallery-anchor"></div>
        </div>

        {/* 2) SCROLLER OUTSIDE the container, but MATCH left offset */}
        <div
          className="
    absolute left-0 right-0

    /* LEFT OFFSET BASED ON CONTAINER */
    pl-[calc((100vw/2)-((95vw)/2))]
    sm:pl-[calc((100vw/2)-((90vw)/2))]
    xl:pl-[calc((100vw/2)-((87vw)/2))]
    2xl:pl-[calc((100vw-1400px)/2)]

    pr-0
    overflow-hidden
  "
        >

          <div
            ref={scrollRef}
            onScroll={() => {
              if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
              scrollTimeout.current = setTimeout(() => {
                updateActiveCategory();
                updateButtons();
              }, 100);
            }}

            className="
        flex gap-5 lg:gap-10
        overflow-x-auto scrollbar-hide
        snap-x snap-mandatory
        scroll-smooth
        pb-3
        pr-0
      "
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}

                onClick={() => handleImageClick(index)}
                className="
            relative 
            min-w-[85%] sm:min-w-[60%] lg:min-w-[49%]
            h-75 lg:h-97.25
            overflow-hidden cursor-pointer snap-start
          "
              >
                <Image
                  src={img.src}
                  alt="Gallery"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-3 pl-2">
            {/* PREV */}
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`${isPrevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"} transition`}
            >
              <ArrowLeftIcon
                className="size-10"
                strokeWidth={0.5}
                stroke={isPrevDisabled ? disabledColor : activeColor}
              />
            </button>

            {/* NEXT */}
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`${isNextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"} transition`}
            >
              <ArrowRightIcon
                className="size-10"
                strokeWidth={0.5}
                stroke={isNextDisabled ? disabledColor : activeColor}
              />
            </button>
          </div>

        </div>

      </MotionWrapper>

    </section>
  );
}
