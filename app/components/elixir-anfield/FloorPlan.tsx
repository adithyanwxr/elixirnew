"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { motion, AnimatePresence } from "framer-motion";
import RedButtonProject from "../common/RedButtonProject";
import MotionWrapper from "../common/MotionWrapper";

const floorPlans = [
  {
    image: "/anfield/type-a.webp",
    title: "3 BHK Floor Plan",
    desc: "Type A, (1st to 4th Floor), 1604 SQ.FT",
  },
  {
    image: "/anfield/type-b.webp",
    title: "3 BHK Floor Plan",
    desc: "Type B, (1st to 4th Floor), 1556 SQ.FT ",
  },
  {
    image: "/anfield/type-c.webp",
    title: "2 BHK Floor Plan",
    desc: "Type C, (2nd to 8th Floor), 1248 SQ.FT",
  },
  {
    image: "/anfield/type-d.webp",
    title: "2 BHK Floor Plan",
    desc: "Type D, (1st to 8th Floor), 1199 SQ.FT",
  },
  {
    image: "/anfield/type-e.webp",
    title: "4 BHK Floor Plan",
    desc: "Type E, (5th Floor), 2653 SQ.FT + 430 SQ.FT Open Terrace",
  },
  {
    image: "/anfield/type-f.webp",
    title: "4 BHK Floor Plan",
    desc: "Type F, (6th to 8th Floor), 2653 SQ.FT",
  },

  {
    image: "/anfield/basement.webp",
    title: "Basement Floor Plate Plan",
    desc: " ",
  },
  {
    image: "/anfield/ground.webp",
    title: "Ground Floor Plate Plan",
    desc: "",
  },

  {
    image: "/anfield/firstfloor.webp",
    title: "First Floor Plate Plan ",
    desc: "",
  },
  {
    image: "/anfield/typical1.webp",
    title: "Typical Floor Plate Plan (2nd to 4th Floor)",
    desc: "",
  },
  {
    image: "/anfield/fifthfloor.webp",
    title: "5th Floor Plate Plan",
    desc: "",
  },
  {
    image: "/anfield/typical2.webp",
    title: "Typical Floor Plate Plan (6th to 8th Floor)",
    desc: "",
  },
  {
    image: "/anfield/terrace.webp",
    title: "Terrace Floor Plate Plan",
    desc: "",
  },
];

export default function FloorPlan() {
  const [index, setIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const next = () => {
    if (index + 2 < floorPlans.length) setIndex(index + 2);
  };

  const prev = () => {
    if (index - 2 >= 0) setIndex(index - 2);
  };

  return (
    <div className="w-full bg-white">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-0 xl:pt-0 pb-10 xl:pb-12">
        {/* HEADER */}
        <div className="w-full h-fit flex flex-col xl:flex-row justify-between">
          {/* LEFT SECTION */}
          <div className="w-full xl:w-190 2xl:w-190 mb-10 xl:mb-0">
            <MotionWrapper>
              <h5 className="taghead-text elixir-red font-inter">
                FLOOR PLANS
              </h5>
            </MotionWrapper>

            <MotionWrapper>
              <h2 className="font-cormorant section-title elixir-gray mt-4 xl:mt-5.75">
                Designed for efficiency, comfort, and livability.
              </h2>
            </MotionWrapper>

            <MotionWrapper>
              <p className="para-text font-inter text-[#7B7B7B] mt-8 xl:mt-10.5 xl:w-[93%]">
                Every great home begins with thoughtful planning. Our floor
                plans are carefully designed to offer the perfect balance of
                space, comfort, and functionality-so you can visualize a life
                that flows beautifully in every corner.
              </p>
            </MotionWrapper>

            {/* MOBILE BUTTON (below XL only) */}
            {/* <MotionWrapper className="flex xl:hidden mt-10 md:w-[48%]">
              <RedButtonProject
                text="DOWNLOAD ALL FLOOR PLANS"
                isWidthFull
                textSize="text-[16px]"
                padding="px-4 py-3"
              />
            </MotionWrapper> */}
          </div>

          {/* RIGHT SECTION (XL AND ABOVE ONLY) */}
          {/* <MotionWrapper className="hidden xl:flex items-end justify-end w-[300px] xl:w-[418.5px]">
                        <RedButtonProject
                            text="DOWNLOAD ALL FLOOR PLANS"
                            isWidthFull
                            textSize="text-[16px]"
                            padding="px-4 py-3"
                            paddingResponsive="px-3 lg:px-4 xl:px-12 xl:py-[1.1rem]"
                        />
                    </MotionWrapper> */}
        </div>

        {/* ARROWS */}
        <MotionWrapper className="hidden md:flex gap-4 mt-20.5">
          <button
            onClick={prev}
            className="focus:outline-none active:outline-none focus:ring-0 active:ring-0"
          >
            <ArrowLeftIcon
              className="text-[#7B7B7B] size-10 pointer-events-none"
              strokeWidth={0.7}
            />
          </button>

          <button
            onClick={next}
            className="focus:outline-none active:outline-none focus:ring-0 active:ring-0"
          >
            <ArrowRightIcon
              className="text-[#7B7B7B] size-10 pointer-events-none"
              strokeWidth={0.7}
            />
          </button>
        </MotionWrapper>

        {/* SLIDER — SHOW EXACTLY 2 ITEMS */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex gap-x-9.5 mt-9"
            >
              {floorPlans.slice(index, index + 2).map((item, idx) => (
                <div key={idx} className="flex flex-col w-1/2">
                  <MotionWrapper
                    className="group w-full h-100 xl:h-150 relative cursor-pointer overflow-hidden"
                    onClick={() => setActiveImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm tracking-wide uppercase font-inter">
                        Click to Zoom
                      </span>
                    </div>
                  </MotionWrapper>

                  <MotionWrapper>
                    <h6 className="font-cormorant text-[40px] font-medium mt-3 text-[#2c2c2c]">
                      {item.title}
                    </h6>
                  </MotionWrapper>

                  <MotionWrapper>
                    <p className="text-[#7B7B7B] normal-text mt-3 xl:w-[76%] font-inter">
                      {item.desc}
                    </p>
                  </MotionWrapper>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* MOBILE HORIZONTAL SCROLL (ONLY < md) */}
        <MotionWrapper className="flex md:hidden gap-6 mt-10 overflow-x-auto pb-4 scrollbar-hide">
          {floorPlans.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col min-w-[90%] shrink-0 w-[70%]"
            >
              <div
                className="relative w-full h-80 overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Mobile Tap Hint */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wide uppercase font-inter">
                    Tap to Zoom
                  </span>
                </div>
              </div>

              <h6 className="font-cormorant text-[28px] font-medium mt-3 text-[#2c2c2c]">
                {item.title}
              </h6>

              {/* DESCRIPTION 60% WIDTH WORKS NOW */}
              <p className="text-[#7B7B7B] normal-text mt-3 font-inter ">
                {item.desc}
              </p>
            </div>
          ))}
        </MotionWrapper>
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)} // ✅ outside tap closes
          >
            <motion.div
              className="relative w-full max-w-5xl h-[80vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // ✅ prevents inside tap closing
            >
              {/* Close Button (optional but good UX) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(null);
                }}
                className="absolute top-4 right-4 text-white text-3xl z-10"
              >
                ✕
              </button>

              <Image
                src={activeImage}
                alt="Floor Plan"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
