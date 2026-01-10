"use client";
import RedButton from "../common/RedButton";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";

const Insights: React.FC = () => {
  return (
    <>
      <div className="w-full bg-white relative">
        {/* LEFT CONTENT */}
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-30 md:pb-12.5 lg:pt-20 lg:pb-52.5 xl:pt-49.75 xl:pb-105">
          <div className="w-full h-fit flex">
            <div className="w-full h-auto md:w-full lg:w-full xl:w-97.5 2xl:w-97.5 mb-10">
              <MotionWrapper>
                <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
                  INSIGHTS & BLOGS
                </h5>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-5.75 xl:mt-5.75">
                  Stories That Inspire Spaces
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="para-text font-inter text-[#7B7B7B] mt-8 mb-8 lg:mt-7 lg:mb-8 xl:max-w-90 xl:w-auto xl:mt-10.5 xl:mb-16">
                  Welcome to our blog, where homes, lifestyles, and inspiration meet. Explore stories, ideas, and insights that shape better living. Let every read bring you closer to your dream home
                </p>
              </MotionWrapper>
              <MotionWrapper>
                <RedButton text="VIEW ALL" link="/insights" />
              </MotionWrapper>
            </div>
          </div>

          {/*  MOBILE + TABLET CAROUSEL — BELOW CONTENT  */}
          <MotionWrapper className="block xl:hidden w-full mt-5">
            <DraggableCarousel />
          </MotionWrapper>
        </div>

        {/*  DESKTOP CAROUSEL — RIGHT SIDE (Your original design)  */}
        <MotionWrapper
          className="
            hidden xl:flex
            absolute 
            top-49.75
            right-0
            xl:w-[61.6vw]
            h-auto
            overflow-visible
            z-5
        ">
          <DraggableCarousel />
        </MotionWrapper>
      </div>
    </>
  );
};

export default Insights;

/* -----------------------------------------------------------
   DRAGGABLE CAROUSEL
----------------------------------------------------------- */
const DraggableCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollStart = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollStart.current = el.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el || !isDown.current) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    el.scrollLeft = scrollStart.current - walk;
  };

  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      ref={containerRef}
      className="
        flex gap-8 xl:gap-10
        overflow-x-auto no-scrollbar
        cursor-grab
        h-full
        w-full
        pr-10
      "
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Link href="/insights/best-flats-in-thrissur-what-to-look-for-before-you-buy">
        <div className="w-fit cursor-pointer">
          <div className=" w-[320px] md:w-82.5 lg:w-78.75 h-100 lg:h-115 
                    xl:w-112.5 xl:h-149.5 relative overflow-hidden">
            <Image
              src="/blog/blog1.webp"
              alt="Luxury Living"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <p className="lg:mt-4.5 xl:mt-5.5 font-cormorant mt-4 text-[24px] 
                lg:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] 
                leading-[117%] text-[#1B1A1F]">
            Best Flats in Thrissur: What to Look for Before You Buy
          </p>
        </div>
      </Link>


      <Link href="/insights/apartment-vs-independent-home-2025-buyers-guide">
        <div className="w-fit cursor-pointer">
          <div className=" w-[320px] md:w-82.5 lg:w-78.75 h-100 lg:h-115 
                    xl:w-112.5 xl:h-149.5 relative overflow-hidden">
            <Image
              src="/blog/blog2.webp"
              alt="Luxury Living"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <p className="lg:mt-4.5 xl:mt-5.5 font-cormorant mt-4 text-[24px] 
                lg:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] 
                leading-[117%] text-[#1B1A1F]">
            Apartment vs Independent Home: The Ultimate 2025 Buyer’s Guide (November Edition)
          </p>
        </div>
      </Link>

      <Link href="/insights/apartments-for-sale-in-thrissur-elixir-homes">
        <div className="w-fit cursor-pointer">
          <div className=" w-[320px] md:w-82.5 lg:w-78.75 h-100 lg:h-115 
                    xl:w-112.5 xl:h-149.5 relative overflow-hidden">
            <Image
              src="/blog/blog3.webp"
              alt="Luxury Living"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <p className="lg:mt-4.5 xl:mt-5.5 font-cormorant mt-4 text-[24px] 
                lg:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] 
                leading-[117%] text-[#1B1A1F]">
            Apartments for Sale in Thrissur — Discover Your Dream Home with Elixir Homes
          </p>
        </div>
      </Link>


      <Link href="/insights/expert-checklist-construction-company-thrissur">
        <div className="w-fit cursor-pointer">
          <div className=" w-[320px] md:w-82.5 lg:w-78.75 h-100 lg:h-115 
                    xl:w-112.5 xl:h-149.5 relative overflow-hidden">
            <Image
              src="/blog/blog4.webp"
              alt="Luxury Living"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <p className="lg:mt-4.5 xl:mt-5.5 font-cormorant mt-4 text-[24px] 
                lg:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] 
                leading-[117%] text-[#1B1A1F]">
            Expert Checklist to Choose the Best Construction Company in Thrissur
          </p>
        </div>
      </Link>

    </div>
  );
};
