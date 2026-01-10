import Image from "next/image";
import React from "react";
import BlurButton from "../common/BlurButton";


interface HeroProps {
  title: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  titleWidth?: string;
  descWidth?: string;
  backgroundImage?: string;  
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  showButton = false,
  buttonText = "VIEW PROJECTS",
  titleWidth = "lg:max-w-[500px] xl:max-w-[500px]",
  descWidth = "lg:max-w-[660px] xl:max-w-[800px]",
  backgroundImage = "/home/hero.webp",   //  default fallback
}) => {
  return (
    <div className="relative w-full min-h-screen sm:min-h-200 h-dvh md:min-h-150 lg:min-h-175">

      {/* Dark overlay */}
      <div className="absolute inset-0 z-12 bg-black/20"></div>

      {/* Background Image */}
      <div className="absolute z-10 inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Image"
          fill
          className="object-cover"
        />

        {/* BLACK 30% OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>


      {/* Content */}
      <div className="w-full flex absolute bottom-20 z-15">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] mx-auto">

          <h1
            className={`hero-title font-cormorant text-white mb-5 ${titleWidth} lg:mb-7 xl:mb-9.5`}
          >
            {title}
          </h1>



          <p
            className={`para-text font-inter text-white/80 ${descWidth} ${showButton ? "mb-5 lg:mb-7.5 xl:mb-8.75" : "mb-5 lg:mb-7.5 xl:mb-4.5"
              }`}
          >
            {description}
          </p>


          {showButton && <BlurButton text={buttonText} link="https://wa.me/919048733355" />}

        </div>
      </div>
    </div>
  );
};

export default Hero;
  