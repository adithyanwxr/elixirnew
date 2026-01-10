"use client";

import React from "react";
import MotionWrapper from "../common/MotionWrapper";

export default function LocationSection() {
  const items = [
    { time: "0.1 - 0.3 KM", label: "Premium Worship Places & Healthcare" },
    { time: "0.1 - 0.5 KM", label: "Elite Residential Communities" },
    { time: "1.2 - 2.2 KM", label: "Top Schools & Educational Institutions" },
    { time: "3.0 - 3.3 KM", label: "Easy access to the National Highway" },
    { time: "1.8 KM", label: "Thrissur City & East Fort Connectivity" },
    { time: "5.7 KM", label: "Puthur Zoological Park & Leisure Destination" },
  ];

  return (
    <section className="w-full bg-[#1b1a1f] pt-24 lg:pt-[12.4rem] relative pb-20 lg:pb-0 ">
      
      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:block">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-[90%] lg:max-w-200 2xl:max-w-300 mx-auto relative z-20">
          <div className="flex flex-col w-full">

            <MotionWrapper className="max-w-195">
              <p className="taghead-text text-[#8B8E72] font-inter">
                LOCATION
              </p>
            </MotionWrapper>

            <MotionWrapper className="max-w-195">
              <h2 className="font-cormorant section-title text-white mt-6 md:w-[80%]">
                Connected to Everything That Matters
              </h2>
            </MotionWrapper>

            <MotionWrapper className="max-w-195">
              <p className="para-text font-inter text-[#7B7B7B] mt-11 md:w-[80%]">
                A thoughtfully chosen location that brings comfort, connectivity,
                and convenience closer to your everyday life.
              </p>
            </MotionWrapper>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[3.1rem] gap-x-10 mt-[4.7rem]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:w-60 2xl:w-80 space-y-2"
                >
                  <div className="inline-block border-b border-white/30 pb-2 w-full">
                    <p className="text-[28px] md:text-[22px] xl:text-[28px] text-white font-cormorant">
                      {item.time}
                    </p>
                    <p className="normal-text text-[#9a99a2] mt-[0.6rem] whitespace-normal md:whitespace-pre-line">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="relative w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto mt-16 lg:mt-0 lg:h-[25.1rem]">
          <div
            className="
              w-full aspect-[3/1.5]
              lg:absolute lg:left-1/2 lg:-translate-x-1/2
              lg:-bottom-2/5 xl:-bottom-3/5 2xl:-bottom-5/5
              z-40
            "
          >
            <MotionWrapper className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4827.194199780505!2d76.25182707583639!3d10.496483264293364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f01de62c8c6b%3A0xf15f31da6443558!2sElixir%20Homes!5e1!3m2!1sen!2sin!4v1764926267229!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MotionWrapper>
          </div>
        </div>

      </div>
    </section>
  );
}
