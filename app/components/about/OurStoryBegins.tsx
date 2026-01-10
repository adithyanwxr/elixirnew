import Image from "next/image";
import React from "react";
import UnderlineButton from "../common/UnderlineButton";
import ElixirBadgeLight from "../icons/ElixirBadgeLight";
import MotionWrapper from "../common/MotionWrapper";

const OurStoryBegins = () => {
  return (
    <div>

      {/* ---------------------- DESKTOP / TABLET VIEW ---------------------- */}
      <div className="relative hidden md:block w-full min-h-140 sm:min-h-200 h-dvh md:min-h-150 lg:min-h-175 xl:h-212.5 2xl:h-211.75">
        {/* Dark overlay */}
        <div className="absolute inset-0 z-12 bg-black/50"></div>

        {/* Background Image */}
        <div className="absolute z-10 inset-0 bg-cover bg-center">
          <Image
            src="/about/ourstory.webp"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="w-full flex absolute top-20.5 z-15">
          <MotionWrapper className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto">
            <h2 className="font-cormorant section-heading text-white">
              Our Story Begins
            </h2>
          </MotionWrapper>
        </div>

        {/* Content */}
        <div className="w-full flex absolute bottom-20.5 z-15">
          <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto">
            <div className="flex h-auto lg:flex-row justify-between">
              <MotionWrapper className="h-fit">
                <p className="normal-text font-inter text-white mb-5 lg:max-w-85 lg:mb-7.5 xl:mb-5.25 xl:max-w-122.5">
                  From the start, our mission has been to create homes that feel right in every way. We believe not in grand promises, but in delivering spaces that truly feel like yours. Visit any project or speak with an Elixir homeowner, and you’ll experience the difference in how we build and care.
                </p>
                <UnderlineButton text="EXPLORE OUR PROJECTS" link="/projects" />
              </MotionWrapper>

              <MotionWrapper className="flex items-end justify-end -mb-15 mr-14">
                <ElixirBadgeLight />
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- MOBILE VIEW ---------------------- */}
      <div className="block md:hidden w-full space-y-0 mt-10">

        {/* CARD TEMPLATE → REUSED FOR 3 SECTIONS */}
        {[
          {
            img: "/about/ourstory.webp",
            title: "Our Story Begins",
            desc: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance, functional Elixir Homes stands as a symbol of refined architecture and compromised ",
            button: "EXPLORE OUR PROJECTS",
            link: "/projects",
          },
          {
            img: "/about/img2.webp",
            title: "What Defines Us",
            desc: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance",
            button: "VIEW OUR DEVELOPMENTS",
            link: "/about",   
          },
          {
            img: "/about/img1.jpg",
            title: "Our Forward Vision",
            desc: "Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance",
            button: "EXPLORE THE ELIXIR PORTFOLIO",
            link: "/portfolio",  
          }
        ].map((item, i) => (
          <div key={i} className="relative w-full h-[28rem] md:h-87.5">
            <div>
              {/* Background image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* OVERLAY TEXT */}
            <div className="absolute z-20 bottom-5 left-5 right-5">
              <MotionWrapper>
                <h2 className="font-cormorant text-white text-[28px] mb-2">
                  {item.title}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="text-white/90 font-inter text-[14px] mb-3 leading-[1.6]">
                  {item.desc}
                </p>
              </MotionWrapper>

              {/*  Pass link here */}
              <MotionWrapper className="mb-12">
                <UnderlineButton text={item.button} link={item.link} />
              </MotionWrapper>
            </div>

          </div>
        ))}

      </div>


    </div>
  );
};

export default OurStoryBegins;
