"use client";
import Image from "next/image";
import React from "react";
import MotionWrapper from "../common/MotionWrapper";

export default function LocationSection() {
  const items = [
    {
      icon: "/contact/icon2.svg",
      title: "Sales Enquiries",
      desc: "sales@elixirhomes.com",
    },
    {
      icon: "/contact/icon3.svg",
      title: "Customer Support",
      desc: "info@elixirhomes.com",
    },
    {
      icon: "/contact/icon1.svg",
      title: "Partnership",
      desc: "gm@elixirhomes.com",
    },
  ];

  return (
    <section className="w-full bg-white md:pt-[6.3rem] pb-32 md:pb-[19.1rem] relative overflow-hidden">
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] relative z-20">
        {/* LEFT MAP IMAGE - FULL BLEED */}
        <div
          className="
            w-full relative h-87.5 
            lg:absolute lg:top-0
            lg:-left-13 xl:-left-24.75 2xl:-left-20
            lg:w-[57.2%] lg:h-197.5
          "
        >
          {/* <Image
            src="/project-detailed/map.webp"
            alt="Map"
            fill
            className="object-cover"
          /> */}
          <MotionWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4827.194199780505!2d76.25182707583639!3d10.496483264293364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f01de62c8c6b%3A0xf15f31da6443558!2sElixir%20Homes%20(Elixir%20Villas%20%26%20Apartments%20Pvt.%20Ltd)!5e1!3m2!1sen!2sin!4v1764926267229!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MotionWrapper>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="lg:col-start-2 flex flex-col mt-20 lg:mt-0 lg:ml-[4.7rem]">
          <MotionWrapper>
            <p className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
              SUPPORT
            </p>
          </MotionWrapper>
          <MotionWrapper>
            <h2 className="font-cormorant section-title text-black mt-6 md:w-[80%]">
              Need More Assistance?
            </h2>
          </MotionWrapper>
          <MotionWrapper>
            <p className="para-text font-inter text-[#7B7B7B] mt-5 md:mt-10 w-[90%]">
              Our relationship with you continues long after the keys are handed
              over. For any assistance, service requests, or queries, our
              dedicated customer support team is always just a call or message
              away-ensuring peace of mind at every stage of ownership.
            </p>
          </MotionWrapper>

          {/* LIST GRID */}
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 mt-[4.8rem]">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* ICON (your image) */}
                <MotionWrapper>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="mt-1"
                  />
                </MotionWrapper>

                {/* TEXT */}
                <div>
                  <MotionWrapper>
                    <p className="regular-heading text-black font-cormorant">
                      {item.title}
                    </p>
                  </MotionWrapper>
                  <MotionWrapper>
                    <p className="normal-text text-[#9a99a2] mt-[0.6rem]">
                      {item.desc}
                    </p>
                  </MotionWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
