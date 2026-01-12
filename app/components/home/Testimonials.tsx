"use client";



import Image from "next/image";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { Poppins } from "next/font/google";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import MotionWrapper from "../common/MotionWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const slides = [
  {
    id: 1,
    text: `“ We own a 3BHK apartment at “The Orchid” of Elixir in Thrissur. I wanted to buy a property in Kuttanellur, Thrissur road. In search of renowned home builders and developers, for affordable yet elegant apartments, most of them showed me expensive properties. Sometimes, locations were not as per my requirement. Later on, my friend suggested Elixir. Because of that precise decision, I bought my dream home which was handed over to us in 2014. Today I feel much happy & satisfied with my decision of taking a flat in Elixir Apartment. It’s the quality of their work, professionalism and delivery on the exact time makes them stand out from other builders. ”`,
    name: "Vijith Nambiar",
    role: "Film Director & Musician",
    img: "/home/t4.svg",

  },
  {
    id: 2,
    text: `“ We had many choices when we looked for affordable flats with the required amenities. But we stumbled at Elixir Homes because of its ideal layout and utilities. the wiring duct and drainage system were all just perfect. Moreover, the dealings were super perfect. I didn’t have to worry about a thing because Elixir Homes is an Ethical Builder. ”`,
    name: "Joby Payyappilly",
    role: "Josons Hardwares, Chalakudy",
    img: "/home/t2.svg",

  },
  {
    id: 3,
    text: `“ Our experience with Elixir Homes was truly smooth and reassuring. Their excellent communication, detailed designs, and caring customer service made the entire process completely stress-free ”`,
    name: "Atfel Dcunha & family",
    role: "Abu Dhabi, UAE",
    img: "/home/t3.svg",

  },
  {
    id: 4,
    text: `“  We had a great experience with the Elixir team- very prompt, professional, and committed to excellent quality. Their flats and villas are spacious, with well-designed common areas and great amenities. Highly recommended for anyone looking for a perfect home!  ”`,
    name: "Mathew Francis",
    role: "",
    img: "/home/t1.svg",

  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const isPrevDisabled = index === 0;
  const isNextDisabled = index === slides.length - 1;

  // Colors
  const activeColor = "#FFFFFF";
  const disabledColor = "#ffffff80"; // visible black shade


  const handleNext = () => {
    if (index < slides.length - 1) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 250);
    }
  };


  const handlePrev = () => {
    if (index > 0) {
      setTimeout(() => {
        setIndex(index - 1);
      }, 250);
    }
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
      <div className="w-full elixir-black-bg md:pb-0">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-7.5 lg:pt-80 lg:pb-12.5  xl:pt-100 2xl:pt-137.5 xl:pb-19.25">
          <div className="w-full h-fit flex justify-between">
            <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-185  mb-10 md:mb-0">
              <MotionWrapper>
                <h5 className="taghead-text text-[#8B8E72] font-inter xl:mt-0.5">
                  testimonials
                </h5>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant section-title text-white mt-4 xl:w-[80%] lg:mt-5.75 xl:mt-5.75">
                  Trusted by Those Who Call It Home
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10.5">
                  The true measure of our success is the happiness of the families who live in our homes. Their words reflect the trust, comfort, and confidence they’ve placed in Elixir Homes. Read their stories and experiences...
                </p>
              </MotionWrapper>
            </div>
            <MotionWrapper className=" relative hidden md:flex items-end justify-end min-h-full md:w-[48%] lg:w-[50%] xl:w-[418.5px]  ">
              <div className="flex">
                <button
                  onClick={handlePrev}
                  disabled={isPrevDisabled}
                  className={`${isPrevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"} transition`}
                >
                  <ArrowLeftIcon
                    className="size-10"
                    strokeWidth={0.7}
                    stroke={isPrevDisabled ? disabledColor : activeColor}
                  />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isNextDisabled}
                  className={`${isNextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"} transition`}
                >
                  <ArrowRightIcon
                    className="size-10"
                    strokeWidth={0.7}
                    stroke={isNextDisabled ? disabledColor : activeColor}
                  />
                </button>

              </div>
            </MotionWrapper>
          </div>
        </div>
        {/* Projects Showcase Section */}
        <MotionWrapper
          className="
    w-full mx-auto flex flex-col lg:flex-row 
    elixir-olive-bg h-auto
  "
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >

          <div
            className="
    w-full lg:w-1/2 
    min-h-75 md:min-h-112.5 lg:min-h-197.5
    h-auto
    relative
  "
          >
            <Image
              src="/home/frame.webp"
              alt="Testimonial Background"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="
    w-full lg:w-1/2 
    pt-7.5 pb-7.5 
    md:min-h-full 
    flex items-start lg:justify-center 
    px-6 lg:px-0
  "
          >

            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col lg:pt-28.5 transition-opacity duration-300`}>
              <Image
                src="/home/QuoteIcon.webp"
                alt="ICON FOR QUOTATION"
                width={80}   // required, but overridden by Tailwind sizes
                height={58}  // required, but overridden by Tailwind sizes
                className="w-12.5 h-8.75 md:w-[79.16px] md:h-[58.33px] object-contain"
              />


              <p className="font-[350] text-[18px] mt-7.5 leading-6 md:text-[24px] md:leading-8.5 font-cormorant italic text-white/80 lg:mt-34.75 max-w-100">
                {slide.text}
              </p>

              <div className="flex items-center mt-7.5 lg:mt-31.25 mb-8 md:mb-16 lg:mb-0">
                <div className="w-11.25 h-11.25 md:w-12.5 md:h-12.5 rounded-full overflow-hidden relative">
                  <Image
                    className="object-cover"
                    src={slide.img}
                    fill
                    alt="Client profile"
                  />
                </div>
                <div className="flex flex-col ml-2 md:ml-4 md:mt-2.5">
                  <p
                    className={`${poppins.className} text-white font-normal text-[15px] md:text-[18px] leading-7`}>
                    {slide.name}
                  </p>
                  <p className="font-inter text-[#CACACA] para-text">
                    {slide.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* MOBILE DOT INDICATORS */}
          <div className="flex justify-center gap-3 mb-8 lg:hidden">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`
        w-2.5 h-2.5 rounded-full transition-all duration-300
        ${index === i ? "bg-black scale-125" : "bg-black/30"}
      `}
              />
            ))}
          </div>

        </MotionWrapper>
      </div>
    </>
  );
};

export default Testimonials;
