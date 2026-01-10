import Image from "next/image";
import { Poppins } from "next/font/google";
import RedButton from "../common/RedButton";
import MotionWrapper from "../common/MotionWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CTA = () => {
  return (
    <div>
      <div className="relative block w-full min-h-140 sm:min-h-200 h-dvh md:min-h-150 lg:min-h-175 xl:h-212.5 2xl:h-211.75">
        {/* Dark overlay */}
        <div className="absolute inset-0 z-12 bg-black/50"></div>
        {/* Background Image */}
        <div className="absolute z-10 inset-0 bg-cover bg-center">
          <Image
            src="/about/legacy.webp"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="w-full flex items-center justify-center absolute inset-0 z-15">
          <div className="flex flex-col items-center justify-center gap-y-7.5 w-[95%] sm:w-[90%]">
            <MotionWrapper>
              <h2 className="font-cormorant md:text-center section-title text-white max-w-175">
                A Legacy of Architectural Excellence
              </h2>
            </MotionWrapper>
            <MotionWrapper>
              <p
                className={`${poppins.className} text-white md:text-center max-w-204 font-light text-[15px] md:text-[18px] leading-7`}>
                Step into a world where design meets comfort and dreams take shape. Visit our project sites and experience the quality, space, and detailing that make every Elixir home truly special. Your future home is just a visit away.
              </p>
            </MotionWrapper>
           <MotionWrapper className="w-full md:w-auto">
  <div className="w-full sm:w-auto">
    <RedButton
      text="SCHEDULE A VISIT"
      link="/contact"
      isWidthFull
    />
  </div>
</MotionWrapper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
