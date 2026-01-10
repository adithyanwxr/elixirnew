import Image from "next/image";
import React from "react";
import BlurButton from "../common/BlurButton";
import MotionWrapper from "../common/MotionWrapper";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  secondaryButtonText?: string;
  titleWidth?: string;
  descWidth?: string;
  backgroundImage?: string;

  /* ✅ NEW — padding control */
  primaryPaddingX?: string;
  primaryPaddingY?: string;
  secondaryPaddingX?: string;
  secondaryPaddingY?: string;
}

const ProjectHero: React.FC<HeroProps> = ({
  title,
  description,
  showButton = false,
  buttonText = "VIEW PROJECTS",
  secondaryButtonText,
  titleWidth = "lg:max-w-[500px] xl:max-w-[500px]",
  descWidth = "lg:max-w-[660px] xl:max-w-[800px]",
  backgroundImage = "/home/hero.webp",

  /* ✅ DEFAULT PADDING (unchanged behavior) */
  primaryPaddingX = "px-8 lg:px-[35px] xl:px-[37px]",
  primaryPaddingY = "py-3 lg:py-3 xl:py-3.5",
  secondaryPaddingX = "px-[4.8rem] lg:px-[35px] xl:px-[37px]",
  secondaryPaddingY = "py-2 lg:py-3 xl:py-3.5",
}) => {
  return (
    <div className="relative w-full min-h-screen sm:min-h-200 h-dvh md:min-h-150 lg:min-h-175">
      {/* Overlay */}
      <div className="absolute inset-0 z-12 bg-black/40"></div>

      {/* Background */}
      <div className="absolute z-10 inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full flex absolute bottom-20 z-15">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] mx-auto">
          <MotionWrapper>
            <h1
              className={`hero-title font-cormorant text-white mb-5 ${titleWidth} lg:mb-7 xl:mb-9.5`}
            >
              {title}
            </h1>
          </MotionWrapper>

          <MotionWrapper>
            <p
              className={`para-text font-inter text-white/80 ${descWidth} mb-5 lg:mb-7.5 xl:mb-8.75`}
            >
              {description}
            </p>
          </MotionWrapper>

          {/* BUTTONS */}
          {showButton && (
            <div className="flex flex-row items-start md:items-center gap-3 md:gap-9">
              {/* PRIMARY */}
              <MotionWrapper>
                <Link href="https://wa.me/919048733355" target="_blank">
                  <BlurButton
                    text={buttonText}
                    paddingX={primaryPaddingX}
                    paddingY={primaryPaddingY}
                  />
                </Link>
              </MotionWrapper>

              {/* SECONDARY */}
              {secondaryButtonText && (
                <MotionWrapper>
                  <BlurButton
                    text={secondaryButtonText}
                    paddingX={secondaryPaddingX}
                    paddingY={secondaryPaddingY}
                  />
                </MotionWrapper>
              )}
            </div>
          )}
        </div>
      </div>

      {/* RERA INFO */}
      <div className="absolute top-[5.6rem] md:top-[10.6rem] z-47 right-20 md:right-10 lg:right-12 xl:right-[7.2rem] 2xl:right-36 text-white flex items-center gap-4">
        <div className="relative size-20 shrink-0">
          <Image
            src="/home/Elixir Anfield-RERA QR Code.webp"
            alt="QR Code"
            fill
            className="object-contain"
          />
        </div>

        <div className="text-[15px] font-light">
          <p>RERA REG NO:</p>
          <p>K‐RERA/PRJ/TSR/133/2024</p>
          <a
            href="https://www.rera.kerala.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.rera.kerala.gov.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
