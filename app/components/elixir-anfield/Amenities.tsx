"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const amenities = [
  {
    icon: "/projects/ev.svg",
    title: "Individual EV Charging Port For Every Owner ",
    desc: "Easily charge your EV at your parking space with a home charger. ",
  },
  {
    icon: "/projects/i2.svg",
    title: "Open Terrace Swimming Pool & Kids Pool ",
    desc: "Relax in our terrace pool while your little ones enjoy a safe splash zone.",
  },
  {
    icon: "/projects/waste.svg",
    title: " Incinerator (Waste Management)",
    desc: "Sustainable solid waste disposal through an incinerator and efficient liquid waste treatment via STP.",
  },
  {
    icon: "/projects/easy.svg",
    title: " Easy Access to Elite City Landmarks ",
    desc: "Seamless connectivity to major city landmarks for everyday convenience.",
  },
];

const amenities1 = [
  {
    icon: "/projects/smart.svg",
    title: "Smart Video Entry  ",
    desc: "Smart video entry for easy visitor verification and enhanced safety.",
  },
  {
    icon: "/projects/i6.svg",
    title: "CCTV, 24 Hrs Security ",
    desc: "24/7 CCTV and trained security ensure complete peace of mind.",
  },
  {
    icon: "/projects/gym.svg",
    title: " Gym",
    desc: "Stay fit within your community at our fully equipped modern gym.",
  },
  {
    icon: "/projects/i4.svg",
    title: "Children’s Play Area ",
    desc: "A safe, vibrant space where kids play freely and create memories.",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="w-full bg-white text-white pt-20 md:pt-[9.4rem] pb-32 md:pb-50">
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">
        <div className="md:max-w-[80%] xl:max-w-[55%]">
          <MotionWrapper>
            <p className="taghead-text text-[#ec1b24] font-inter">AMENITIES</p>
          </MotionWrapper>
          <MotionWrapper>
            <h2 className="font-cormorant section-title text-black mt-[1.4rem] w-[90%] xl:w-[70%]">
              Modern Lifestyle Amenities
            </h2>
          </MotionWrapper>

          <MotionWrapper>
            <p className="para-text font-inter text-[#7b7b7b]  mt-[2.7rem]">
              Elixir Homes stands as a symbol of refined architecture and
              uncompromised quality. With every project, we aim to create living
              spaces that embody elegance.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-14 mt-[7.4rem]">
          {amenities.map((item, index) => (
            <div key={index} className="pb-2 flex flex-col gap-3">
              {/* Icon */}
              <MotionWrapper>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="w-10 h-10 object-contain"
                />
              </MotionWrapper>

              {/* Title */}
              <MotionWrapper>
                <h3 className="regular-heading text-[#1b1a1f] font-cormorant mt-[0.7rem]">
                  {item.title}
                </h3>
              </MotionWrapper>

              {/* Description */}
              <MotionWrapper>
                <p className="normal-text text-[#9a99a2] xl:w-[88%]">
                  {item.desc}
                </p>
              </MotionWrapper>
            </div>
          ))}
        </div>
        <MotionWrapper>
          <div className="hidden md:block pb-6 border-b border-[#acacac]"></div>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-14 mt-16 lg:mt-[9.7rem]">
          {amenities1.map((item, index) => (
            <div key={index} className="pb-2 flex flex-col gap-3">
              {/* Icon */}
              <MotionWrapper>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="w-10 h-10 object-contain"
                />
              </MotionWrapper>

              {/* Title */}
              <MotionWrapper>
                <h3 className="regular-heading text-[#1b1a1f] font-cormorant mt-[0.7rem]">
                  {item.title}
                </h3>
              </MotionWrapper>

              {/* Description */}
              <MotionWrapper>
                <p className="normal-text text-[#9a99a2] xl:w-[88%]">
                  {item.desc}
                </p>
              </MotionWrapper>
            </div>
          ))}
        </div>
        <MotionWrapper>
          <div className="pb-6 border-b border-[#acacac]"></div>
        </MotionWrapper>
      </div>
    </section>
  );
}
