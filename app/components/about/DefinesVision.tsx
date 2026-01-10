import Image from "next/image";
import React from "react";
import UnderlineButton from "../common/UnderlineButton";
import MotionWrapper from "../common/MotionWrapper";

const DefinesVision = () => {
  return (
    <div className="hidden md:block relative w-full min-h-[400px] lg:min-h-[600px] xl:min-h-[790px]">
      {/* Background Split Images */}
      <div className="absolute Z-10 inset-0 flex">
        <div className="relative w-1/2 h-full">
          <Image
            src="/about/img2.webp"
            alt="Vision Left"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-1/2 h-full">
          <Image
            src="/about/img1.webp"
            alt="Vision Right"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute z-11 inset-0 bg-black/50" />

      {/* Foreground Content with container width */}
      <div className="w-full flex absolute bottom-[63px] z-12">
        <div className="relative z-10 w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto flex items-center">
          <div className="flex w-full">
            {/* Left text */}
            <div className="w-1/2 text-white">
              <MotionWrapper>
                <h2 className="section-heading font-cormorant mb-[39px]">What Defines Us</h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="normal-text font-inter text-white mb-5 lg:max-w-[340px] lg:mb-[30px] xl:mb-[21px] xl:max-w-[490px]">
                  Elixir Homes is a reflection of refined architecture and uncompromised quality. With every project we deliver, our focus remains on creating elegant living spaces that offer comfort, style, and lasting value.
                </p>
              </MotionWrapper>
              <MotionWrapper>
                <UnderlineButton text="VIEW OUR DEVELOPMENTS" />
              </MotionWrapper>
            </div>

            {/* Right text */}
            <div className="w-1/2 text-white pl-[60px] xl:pl-24">
              <MotionWrapper>
                <h2 className="section-heading font-cormorant mb-[39px]">
                  Our Forward Vision
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="normal-text font-inter text-white mb-5 lg:max-w-[340px] lg:mb-[30px] xl:mb-[21px] xl:max-w-[490px]">
                  Driven by innovation and integrity, Elixir Homes continues to shape thoughtfully designed residences that blend modern living with timeless elegance. Each development reflects our commitment to excellence in every detail.

                </p>
              </MotionWrapper>
              <MotionWrapper>
                <UnderlineButton text="EXPLORE THE ELIXIR PORTFOLIO" />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefinesVision;
