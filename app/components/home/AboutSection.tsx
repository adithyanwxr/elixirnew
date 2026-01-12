"use client";

import React from "react";
import RotatingTextLogo from "../icons/ElixirBadge";
import RedButton from "../common/RedButton";
import SmoothCounter from "../common/Counter";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";


const AboutSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-20 lg:pt-25 lg:pb-25 xl:pt-37.5 xl:pb-51.25">
        <div className="w-full flex justify-between">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[48%] lg:w-142.5 xl:w-182.25 2xl:w-180">
            <MotionWrapper>
              <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
                About Us
              </h5>
            </MotionWrapper>

            <MotionWrapper>
              <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-5.75 xl:mt-5.75 2xl:w-[90%] ">
                Inspired by Vision, Built with Precision
              </h2>
            </MotionWrapper>

            <MotionWrapper className="text-[#7B7B7B] flex flex-col mt-8 justify-between gap-y-4 lg:flex-row lg:gap-x-10 lg:mt-7 xl:gap-x-22.5 2xl:gap-x-19.25 xl:mt-24.25 ">
              <p className="para-text font-inter ">
                Our power comes in the form of our values. We call ourselves “The Ethical Builder” not as a slogan, but as a guarantee. We are not trying to be the largest, we work on being the most trustworthy. Our team proudly delivers what we guarantee, on schedule, with durability.
              </p>

              <p className="para-text font-inter">
                Our commitment to precision, sustainability, and attention to
                detail has shaped us into one of the most trusted ones. Our
                commitment to precision, sustainability, and attention
              </p>
            </MotionWrapper>

            {/* Desktop Counters */}
            <MotionWrapper className="hidden md:flex justify-between mt-[1.8rem] lg:mt-7 mb-12 lg:mb-12.5 xl:mt-13.75 xl:mb-17 2xl:w-[98%] md:gap-12 gap-0">
              <div className="flex flex-col items-start justify-start">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={4} />+
                </p>
                <p className="para-text xl:mt-3.5 text-[#7B7B7B] font-inter">
                  Projects Completed
                </p>
              </div>

              <div className="flex flex-col items-start justify-start">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={7} />+
                </p>
                <p className="para-text xl:mt-3.5 text-[#7B7B7B] font-inter">
                  Builders Award
                </p>
              </div>

              <div className="flex flex-col items-start justify-start">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={15} />+
                </p>
                <p className="para-text xl:mt-3.5 text-[#7B7B7B] font-inter">
                  Years of Experience
                </p>
              </div>
            </MotionWrapper>

            {/* Mobile Counters */}
            <MotionWrapper className="md:hidden grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-10 mt-[1.8rem] mb-10">

              {/* Years of Experience */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={15} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter md:w-[80%]">
                  Years of Experience
                </p>
              </div>

              {/* Projects Completed */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={4} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter md:w-[50%] ">
                  Projects Completed
                </p>
              </div>

              {/* Builders Award */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={7} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter md:w-[50%]">
                  Builders Award
                </p>
              </div>

            </MotionWrapper>

            <MotionWrapper>
              <RedButton text="KNOW MORE" link="/about" />
            </MotionWrapper>
          </div>

          {/* RIGHT SECTION IMAGE */}
          <MotionWrapper className="hidden relative md:block md:w-[48%] lg:w-[35%] xl:w-[418.5px] xl:h-192.5 xl:right-18 2xl:right-16">
            <Image
              src="/home/about.webp"
              alt="About Us Image"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />


            <div className="w-28 h-28 absolute bottom-26 lg:-bottom-12.5 xl:-bottom-19.75 -right-6  lg:-right-10 2xl:-right-14 2xl:-bottom-20">
              <RotatingTextLogo />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
