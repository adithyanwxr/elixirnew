"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const slides = [
  {
    id: 1,
    text: `“ Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance, functional Elixir Homes stands as a symbol of refined architecture and uncompromised quality. ”`,
    name: "Vijith Nambiar",
    role: "Film Director",
    img: "/home/test-man.webp",
    bg: "/home/test-bg.png",
  },
  {
    id: 2,
    text: `“ Home is where your story begins. Elixir made ours unforgettable — elegant spaces, timeless design, and excellent craftsmanship. ”`,
    name: "Ananya Rao",
    role: "Architect",
    img: "/home/test-man.webp",
    bg: "/home/test-bg.png",
  },
  {
    id: 3,
    text: `“ Quality, precision, and trust. Elixir Homes delivered more than a house — they built comfort. ”`,
    name: "Rahul Menon",
    role: "Entrepreneur",
    img: "/home/test-man.webp",
    bg: "/home/test-bg.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 250);
  };

  const handlePrev = () => {
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, 250);
  };

  // ---- MOBILE SWIPE LOGIC ----
  const touchStartX = useRef(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < touchStartX.current - 50) handleNext();
    if (endX > touchStartX.current + 50) handlePrev();
  };

  const slide = slides[index];

  return (
    <>
      <div className="w-full elixir-black-bg pb-20 md:pb-0">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-20 pb-[30px] lg:pt-20 lg:pb-[50px] xl:pt-[158px] xl:pb-[77px]">
          <div className="w-full h-fit flex justify-between">
            <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-[760px] 2xl:w-[760px] mb-10 md:mb-0">
              <h5 className="taghead-text text-[#8B8E72] font-inter xl:mt-0.5">
                testimonials
              </h5>
              <h2 className="font-cormorant section-title text-white mt-4 xl:w-[80%] lg:mt-[23px] xl:mt-[23px]">
                Trusted by Those Who Call It Home
              </h2>
              <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-[42px]">
                Elixir Homes stands as a symbol of refined architecture and
                uncompromised quality. With every project, we aim to create
                living spaces that embody elegance, functional Elixir Homes
                stands as a symbol of refined architecture and uncompromised
                quality.
              </p>
            </div>
            <div className="hidden relative md:flex items-end justify-end min-h-full md:w-[48%] lg:w-[50%] xl:w-[418.5px]  ">
              <div className="flex">
                <button onClick={handlePrev}>
                  <ArrowLeftIcon
                    className="text-white/50 size-10"
                    strokeWidth={0.7}
                  />
                </button>
                <button onClick={handleNext}>
                  <ArrowRightIcon
                    className="text-white size-10"
                    strokeWidth={0.7}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Showcase Section */}
        <div
          className="w-[95%] mx-auto md:w-full flex elixir-olive-bg h-auto"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[25%] md:w-1/2 min-h-full md:h-[790px] relative"
          >
            <Image
              key={slide.bg}
              src={slide.bg}
              alt="Hero Image"
              fill
              className={`object-cover transition-opacity duration-300 `}
            />
          </motion.div>

          <div className="w-[75%] md:w-1/2 h-fit pt-[30px] pb-[30px] md:min-h-full flex items-start justify-center px-6 md:px-0">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col md:pt-[114px] transition-opacity duration-300`}
            >
              <Image
                className="w-[50px] h-[35px] md:w-[79.16px] md:h-[58.33px]"
                src="/home/QuoteIcon.webp"
                alt="ICON FOR QUOTATION"
                width={80}
                height={60}
              />

              <p className="font-[350] text-[18px] mt-[30px] leading-6 md:text-[24px] md:leading-[34px] font-cormorant italic text-white/80 md:mt-[139px] max-w-[400px]">
                {slide.text}
              </p>

              <div className="flex items-center mt-[30px] md:mt-[125px]">
                <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden relative">
                  <Image
                    className="object-cover"
                    src={slide.img}
                    fill
                    alt="Client profile"
                  />
                </div>
                <div className="flex flex-col ml-2 md:ml-4 md:mt-2.5">
                  <p
                    className={`${poppins.className} text-white font-normal text-[15px] md:text-[18px] leading-7`}
                  >
                    {slide.name}
                  </p>
                  <p className="font-inter text-[#CACACA] para-text">
                    {slide.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
