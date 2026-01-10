"use client";

import React from "react";
import MotionWrapper from "../common/MotionWrapper";

const deliveryItems = [
  {
    title: "On-time Project Delivery",
    desc: "Our projects are completed on time because of strong planning, disciplined execution, and continuous on-site monitoring. With experienced teams, structured quality checks at every stage, and transparent coordination, Elixir Homes ensures smooth workflows and timely completion without compromising on quality.",
  },
  {
    title: "Quality Assurance Milestones",
    desc: "Every stage of construction at Elixir Homes is guided by clearly defined quality checkpoints to ensure consistent excellence. With a commitment to refined architecture, uncompromised standards, and sustainable precision, we deliver homes that reflect lasting quality and trusted craftsmanship. ",
  },
  {
    title: "Engineering Precision",
    desc: "Every stage of construction is executed with meticulous attention to detail and monitored through structured quality checks to ensure engineering excellence. At Elixir Homes, precision drives our refined architecture, delivering functional, elegant, and sustainable living spaces built to uncompromising standards. ",
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
            Elixir Homes stands as a symbol of refined architecture and uncompromised quality.
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
