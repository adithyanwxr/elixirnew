"use client";

import { useState } from "react";
import RedButton from "../common/RedButton";
import Image from "next/image";
import UnderlineButton from "../common/UnderlineButton";
import { motion } from "framer-motion";
import MotionWrapper from "../common/MotionWrapper";

const projects = [
  {
    title: "Elixir Anfield",
    location: "Near Hill Gardens Colony & HiLite Mall, \n Thrissur - Kuttanellur Main Road",
    feature: "Ongoing Apartment Project",
    count: "01 of 05",
    description:
      "Elixir Anfield is set in one of Thrissur’s finest residential localities, surrounded by well-known colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, and Silent Valley.",
    hero: "/projects/Elixir-Anfeild.webp",
    thumbs: ["/projects/Elixir-Anfeild.webp"],
    route: "/elixir-anfield",
  },
  {
    title: "The Orchid",
    location: "Kuttanellur, Thrissur, Kerala ",
    feature: "Completed Apartment Project | Sold Out",
    count: "02 of 05",
    description:
      "“The Orchid” is one of our signature projects, created with a strong focus on luxury and comfort. Located in the heart of Kuttanellur, it stands in one of Thrissur’s finest residential areas.",
    hero: "/home/Orchid1.webp",
    thumbs: ["/home/Orchid1.webp"],
    route: "/orchid",
  },
  {
    title: "Elixir Akkara Gardens",
    location: "Near Regency Club, Kuttanellur, Thrissur",
    feature: "Completed Villa Project | Sold Out",
    count: "03 of 05",
    description:
      "Akkara Gardens is a luxury villa Project at Kuttanellur, Thrissur. Spread across 1.20 acres with 12 exclusive units, it offers privacy, sustainability, and refined living.",
    hero: "/home/Elixir-Akkara-Gardens1.webp",
    thumbs: ["/home/Elixir-Akkara-Gardens1.webp"],
    route: "/elixir-akkara-garden",
  },
  {
    title: "Elixir Manavath Heights",
    location: "Vadakkenchery, Palakkad",
    feature: "Completed Land Development Project | Sold Out",
    count: "04 of 05",
    description:
      "Elixir Manavath Heights was a 4-acre land development project at Vadakkenchery, near Alathur in Palakkad. ",
    hero: "/projects/Elixir-Manavath-Heights1.webp",
    thumbs: ["/projects/Elixir-Manavath-Heights1.webp"],
    route: "/elixir-manavath-heights",
  },
  {
    title: "Elixir Super Luxury Villas",
    location: "Moscow Road, Anchery, Thrissur",
    feature: "Completed Villa Project | Sold Out",
    count: "05 of 05",
    description:
      "Elixir Super Luxury Villas is an exclusive, fully customisable villa community in Anchery, Thrissur, offering 16 premium homes that blend privacy, sustainability, and refined living.",
    hero: "/home/Elixir-Super-Luxury-Villas11.webp",
    thumbs: ["/home/Elixir-Super-Luxury-Villas11.webp"],
    route: "/elixir-super-luxury-villas",
  },
];

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = projects[activeIndex];

  return (
    <>
      <div className="w-full elixir-black-bg">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-12.5 xl:pt-39.5 xl:pb-19.25">
          <div className="w-full h-fit flex justify-between">
            <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-182.5">
              <MotionWrapper>
                <h5 className="taghead-text text-[#8B8E72] font-inter xl:mt-0.5">
                  featured projects
                </h5>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant section-title text-white mt-4 lg:mt-5.75 xl:mt-5.75">
                  Shaping Skylines with Distinction
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10.5">
                  Our portfolio features elegant completed and ongoing projects
                  across Thrissur, driven by our values of trust and innovation.
                  From smart 2 BHK homes to luxurious 5 BHK residences, every
                  Elixir home is thoughtfully crafted for modern lifestyles.
                </p>
              </MotionWrapper>
            </div>

            <MotionWrapper className="hidden relative md:flex items-end justify-end min-h-full md:w-[48%] lg:w-[50%] xl:w-[418.5px]">
              <RedButton text="VIEW ALL PROJECTS" link="/projects" />
            </MotionWrapper>
          </div>
        </div>

        {/* Desktop Project Section */}
        <MotionWrapper className="relative hidden lg:block w-full min-h-140 sm:min-h-200 h-dvh md:min-h-150 lg:min-h-175 2xl:h-211.75">
          <div className="absolute inset-0 z-12 bg-black/50"></div>

          {/* HERO IMAGE */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute z-10 inset-0 bg-cover bg-center"
          >
            <Image
              src={active.hero}
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="w-full flex absolute bottom-19 z-15">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto">
              <h2 className="font-cormorant section-title text-white xl:mb-3.5">
                {active.title}
              </h2>

              <div className="flex w-full justify-center items-center border-y-[0.5px] border-white/50 mb-45 h-15 xl:h-17 xl:mb-57.5 px-2.5">
                <div className="w-1/2 flex justify-start items-center">
                  <p className="para-text text-white font-inter">
                    {active.feature}
                  </p>
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <p className="para-text text-white font-inter lg:-ml-36 2xl:-ml-26">
                    {active.location}
                  </p>
                  <p className="para-text text-white font-inter">
                    {active.count}
                  </p>
                </div>
              </div>

              {/* BOTTOM TEXT + BUTTON */}
              <div className="flex h-auto lg:flex-row justify-between">
                <div className="h-fit">
                  <p className="normal-text font-inter text-white mb-5 lg:max-w-132.5">
                    {active.description}
                  </p>
                  <UnderlineButton text="VIEW PROJECT" link={active.route} />
                </div>

                {/* THUMBNAILS */}
                <div className="flex items-end justify-end">
                  <div className="flex mb-1.25 gap-x-5">
                    {projects.map((project, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="cursor-pointer"
                      >
                        <div className="w-25 h-15 relative">
                          {/* NUMBER */}
                          <p
                            className={`para-text font-inter absolute -top-8 left-1 z-20 ${
                              activeIndex === i ? "text-white" : "text-white/60"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </p>

                          {/* IMAGE */}
                          <Image
                            src={project.thumbs[0]}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />

                          {/* ACTIVE UNDERLINE */}
                          {activeIndex === i && (
                            <span className="w-[75%] absolute -bottom-2.5 h-px bg-white"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* ------------------ MOBILE ------------------ */}
        <MotionWrapper className="relative lg:hidden w-full min-h-210 ">
          <div className="absolute inset-0 z-12 bg-black/60"></div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute z-10 inset-0"
          >
            <Image
              src={active.hero}
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* MOBILE THUMBNAILS */}
          <div className="w-full absolute z-15 top-10 right-0 ">
            <div className="flex justify-end w-[95%] sm:w-[90%] mx-auto ">
              <div className="flex flex-col gap-y-5">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="cursor-pointer"
                  >
                    <div className="w-25 h-15 relative">
                      <Image
                        src={project.thumbs[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />

                      {/* active underline */}
                      {activeIndex === i && (
                        <span className="w-[75%] absolute -bottom-2.5 h-px bg-white"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE CONTENT */}
          <div className="w-full flex absolute bottom-12 z-15">
            <div className="w-[95%] sm:w-[90%] mx-auto">
              <p className="para-text text-white font-inter mb-3">
                {active.count}
              </p>
              <h2 className="font-cormorant section-title text-white">
                {active.title}
              </h2>

              <div className="flex flex-col w-full border-t-[0.5px] border-white/50 mt-6 pt-3">
                <div className="flex justify-between">
                  <p className="para-text text-white font-inter">
                    {active.feature}
                  </p>
                  {/* <p className="para-text text-white font-inter">{active.count}</p> */}
                </div>

                <p className="para-text text-white font-inter mt-2">
                  {active.location}
                </p>
              </div>

              <p className="normal-text font-inter text-white mt-10 mb-6 lg:max-w-165">
                {active.description}
              </p>

              <UnderlineButton text="VIEW PROJECTS" link={active.route} />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </>
  );
};

export default FeaturedProjects;
