import Image from "next/image";
import React from "react";
import BlurButton from "../common/BlurButton";
import MotionWrapper from "../common/MotionWrapper";

const Hero = () => {
  return (
    <div className="relative w-full min-h-140 sm:min-h-200 h-dvh md:min-h-[600px] lg:min-h-[700px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-12 bg-black/30"></div>
      {/* Background Image */}
      <div className="absolute z-10 inset-0 bg-cover bg-center">
        <Image
          src="/home/hero.webp"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full flex absolute bottom-20 z-15">
        <div className="w-[90%] sm:w-[90%] xl:w-[86.9%] mx-auto">
          <MotionWrapper>
            <h1 className="hero-title font-cormorant text-white mb-5 lg:max-w-[500px] lg:mb-7 xl:mb-[38px] xl:max-w-[500px]">
              Crafting Spaces Beyond Ordinary
            </h1>
          </MotionWrapper>
          <MotionWrapper>
            <p className="para-text font-inter text-white/80 mb-5 lg:max-w-[660px] lg:mb-[30px] xl:mb-[35px] xl:max-w-[760px]">
              Elixir Homes is one of the leading builders and the most trusted real estate developer in Thrissur, with a proven track record of delivering promises on time to its customers. So here comes a golden chance to be a part of Elixir!
            </p>
          </MotionWrapper>
          <MotionWrapper>
            <BlurButton text="VIEW PROJECTS" link="/projects" />
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
