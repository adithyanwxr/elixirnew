"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { ArrowUpRight } from "../icons/ArrowUpRight";
import { ProjectGallery } from "@/app/data/projectData";
import MotionWrapper from "../common/MotionWrapper";

interface Props {
  project: ProjectGallery;
}

export default function GallerySection({ project }: Props) {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const categories = project.categories;
  const images = project.images;

  const [activeCategory, setActiveCategory] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const imageWidth = 600;

  const updateActiveCategory = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const index = Math.round(container.scrollLeft / imageWidth);
    const safeIndex = Math.min(Math.max(index, 0), images.length - 1);
    setActiveCategory(images[safeIndex].category);

    // --- update disabled states ---
    setIsPrevDisabled(container.scrollLeft <= 0);
    setIsNextDisabled(
      container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5
    );
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: imageWidth, behavior: "smooth" });

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(updateActiveCategory, 400);
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -imageWidth, behavior: "smooth" });

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(updateActiveCategory, 400);
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

  const handleCategoryClick = (categoryIndex: number) => {
    if (!scrollRef.current) return;

    // Find first image index of that category
    const imageIndex = images.findIndex(
      (img) => img.category === categoryIndex
    );

    if (imageIndex === -1) return;

    // Scroll to that image
    scrollRef.current.scrollTo({
      left: imageIndex * imageWidth,
      behavior: "smooth",
    });

    // Update active category after scroll
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(updateActiveCategory, 400);
  };

  return (
    <section
      className={`w-full ${project.bgColor} ${project.textColor} pt-[6.3rem] pb-120 lg:pb-[11.3rem]`}
    >
      {/* ----------------------- TOP SECTION ----------------------- */}
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-14">
          <div className="lg:max-w-md">
            <MotionWrapper>
              <p className="taghead-text text-[#8B8E72] font-inter">
                {project.label}
              </p>
            </MotionWrapper>

            <MotionWrapper>
              <h2 className="font-cormorant section-title mt-[1.4rem]">
                {project.title}
              </h2>
            </MotionWrapper>

            <MotionWrapper>
              <p className="normal-text font-inter lg:w-[80%] mt-[1.6rem]">
                {project.description}
              </p>
            </MotionWrapper>
          </div>

          {/* CATEGORY LIST */}
          <MotionWrapper className="space-y-3 pr-2 -mt-[0.3rem]">
            {rotatedCategories.map((cat, idx) => {
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
                  onClick={() => handleCategoryClick(activeCategory + idx)}
                  className={`
    cursor-pointer
    text-[28px]
    font-cormorant
    transition-all
    hover:text-white
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

      {/* ----------------------- IMAGE SLIDER ----------------------- */}
      <div className="mt-[4.8rem] w-full">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-[25%_75%] xl:grid-cols-[21%_76.3%] 
          xl:gap-10 items-start xl:pl-0 2xl:pl-[5%]
        "
        >
          {/* LEFT — VIEW FULL PROJECT */}
          <MotionWrapper className="flex lg:justify-end lg:pt-[22.2rem] pb-12 lg:pb-0 pl-4 md:pl-10 lg:pl-0">
            <a
              href={project.route}
              className="inline-flex items-center gap-3 xl:gap-8 
                         font-inter text-[16px] font-light 
                         border-b pb-2 underline-offset-4 transition"
            >
              VIEW FULL PROJECT
              <ArrowUpRight strokeWidth={1.2} />
            </a>
          </MotionWrapper>

          {/* RIGHT — SLIDER */}
          <MotionWrapper className="relative w-full">
            {/* 1) Get container left offset */}
            <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">
              <div id="gallery-anchor"></div>
            </div>

            {/* 2) SCROLLER OUTSIDE the container, but MATCH left offset */}
            <div
              className="
                absolute left-0 right-0
                pl-[calc((100vw/2)-((95vw)/2))]
                sm:pl-[calc((100vw/2)-((90vw)/2))]
                xl:pl-[calc((100vw/2)-((98vw)/2))]
                2xl:pl-[calc((100vw-1400px)/2)]
                pr-0
                overflow-hidden
              "
            >
              <div
                ref={scrollRef}
                onScroll={() => {
                  if (scrollTimeout.current)
                    clearTimeout(scrollTimeout.current);
                  scrollTimeout.current = setTimeout(updateActiveCategory, 100);
                }}
                className="
                  flex gap-5 xl:gap-10
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
                      min-w-[85%] sm:min-w-[60%] lg:min-w-[60.6%]
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

              {/* SLIDER BUTTONS */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={handlePrev}
                  disabled={isPrevDisabled}
                  className={`${
                    isPrevDisabled
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                >
                  <ArrowLeftIcon
                    className="size-10"
                    strokeWidth={0.5}
                    color={isPrevDisabled ? "#ffffff80" : "#ffffff"} // gray white vs pure white
                  />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isNextDisabled}
                  className={`${
                    isNextDisabled
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                >
                  <ArrowRightIcon
                    className="size-10"
                    strokeWidth={0.5}
                    color={isNextDisabled ? "#ffffff80" : "#ffffff"} // gray white vs pure white
                  />
                </button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
