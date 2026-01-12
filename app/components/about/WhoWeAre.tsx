"use client";
import React from "react";
import SmoothCounter from "../common/Counter";
import MotionWrapper from "../common/MotionWrapper";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-20 lg:pt-25 lg:pb-15 xl:pt-24.75 xl:pb-33.25">
        <div className="w-full flex flex-col lg:flex-row h-full justify-between">
          <div className="w-full  lg:w-[90%] xl:w-[50%] 2xl:w-[65%]">
            <MotionWrapper>
              <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
                who we are
              </h5>
            </MotionWrapper>
            <MotionWrapper>
              <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-5.75 xl:mt-5.75 2xl:w-[90%] ">
                Building Refined Homes for Modern Lifestyle
              </h2>
            </MotionWrapper>
            {/* IMAGE UNDER HEADING */}
            <MotionWrapper>
              <div className="relative lg:w-[90%] 2xl:w-[76%] h-100 md:h-150 lg:h-150 mt-10 lg:mt-20">
                <Image
                  src="/about/image.webp" // change to your image path
                  alt="Who We Are"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative md:w-full lg:w-[75%] xl:w-150 2xl:w-178.5 xl:h-fit ">
            <MotionWrapper>
              <p className="normal-text text-[#7B7B7B] mt-8 md:mt-12 lg:mt-100 xl:mt-75 2xl:mt-80 font-inter">
                Elixir Homes, one of Thrissur’s most trusted builders, stands
                for quality living and reliability. Led by a dynamic team and
                guided by our Managing Director & CEO, Mr. Tito Varghese Akkara,
                we blend innovation, integrity, and excellence in every project.
                Today, we are proud to be among Thrissur’s leading builders,
                offering premium flats, villas, and apartments for elevated
                living.
                <br /> <br /> At Elixir Homes, we believe a home is more than
                just a structure - it is a foundation for better living. Our
                projects are thoughtfully planned with attention to location,
                lifestyle needs, and future value, ensuring every space reflects
                comfort, functionality, and elegance. From concept to
                completion, we maintain uncompromising quality standards and
                transparent processes, creating homes that our customers can
                trust and take pride in.
              </p>
            </MotionWrapper>

            {/* Desktop Counters */}
            <MotionWrapper className="hidden md:flex justify-between mt-[1.8rem] lg:mt-7 lg:mb-12.5 xl:mt-17.5 xl:mb-17 2xl:w-full ">
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
                  Builders Awards
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
            <MotionWrapper className="md:hidden grid grid-cols-2 gap-y-8 gap-x-1 mt-[1.8rem] mb-10">
              {/* Years of Experience */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={15} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter w-[80%]">
                  Years of Experience
                </p>
              </div>

              {/* Projects Completed */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={4} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter w-[80%]">
                  Projects Completed
                </p>
              </div>

              {/* Builders Award */}
              <div className="flex flex-col ">
                <p className="font-cormorant section-title elixir-gray">
                  <SmoothCounter end={7} />+
                </p>
                <p className="para-text text-[#7B7B7B] font-inter w-[80%]">
                  Builders Award
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
