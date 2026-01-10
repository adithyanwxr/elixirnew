"use client";

import React from "react";
import MotionWrapper from "../common/MotionWrapper";

const deliveryItems = [
  {
    title: "On-Time Completion & 100% Sell-Out ",
    desc: "The project was successfully completed within the planned timeline and achieved full sell-out by 2021, reflecting strong buyer trust and market demand. ",
  },
  {
    title: "Fully Developed Infrastructure ",
    desc: " All plots were delivered with well-laid internal roads, proper plot demarcation, and essential utilities for immediate development. ",
  },
  {
    title: "Strategic Residential Location ",
    desc: " Located at Vadakkenchery near Alathur, the project offers excellent connectivity, peaceful surroundings, and strong long-term investment potential. ",
  },
];

export default function DeliveryHighlights() {
  return (
    <section className="w-full bg-white pb-32 lg:pb-[12.4rem]">
      <div className="w-[95%] sm:w-[90%] xl:w-[86%] max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-[35%_55%] xl:grid-cols-[35%_61%] gap-10 xl:gap-16">

        {/* LEFT SECTION */}
        <div className="space-y-6 lg:pr-10 ">
          <MotionWrapper>
            <h5 className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5 ">
              Key Delivery Highlights
            </h5>
          </MotionWrapper>
          <MotionWrapper>
            <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75">
              Delivered Excellence
            </h2>
          </MotionWrapper>
          <MotionWrapper>
            <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6">
              Elixir Homes stands as a symbol of refined architecture and
              uncompromised quality. 
            </p>
          </MotionWrapper>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col space-y-[2.2rem]">
          {deliveryItems.map((item, index) => (
            <div key={index} className="pb-5 border-b border-[#E4E4E4]">
              <MotionWrapper>
                <h3 className="font-cormorant regular-heading text-[#1B1A1F] mb-2">
                  {item.title}
                </h3>
              </MotionWrapper>
              <MotionWrapper>
                <p className="text-[#7B7B7B] font-inter normal-text xl:w-[96%]">
                  {item.desc}
                </p>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
