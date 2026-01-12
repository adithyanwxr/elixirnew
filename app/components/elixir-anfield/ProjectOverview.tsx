"use client";

import Image from "next/image";
import React from "react";
import MotionWrapper from "../common/MotionWrapper";

const overviewItemsGrid = [
    {
        icon: "/home-project/p5.svg",
        title: "Location",
        desc: "Elixir Villas & Apartments P) ltd, Kuttanellur P.O., Thrissur, Kerala ",

    },
    {
        icon: "/home-project/p6.svg",
        title: "Dedicated EV Charging Port",
        desc: "A modern workout space equipped for strength, cardio, and routines.",

    },
    {
        icon: "/home-project/p3.svg",
        title: "Fitness Studio",
        desc: "A modern workout space equipped for strength, cardio, and routines.",

    },
    {
        icon: "/home-project/p1.svg",
        title: "Children’s Play Area",
        desc: "A modern workout space equipped for strength, cardio, and routines.",

    },
    {
        icon: "/home-project/p2.svg",
        title: "Smart Video Entry",
        desc: "A modern workout space equipped for strength, cardio, and routines.",

    },
    {
        icon: "/home-project/p4.svg",
        title: "Sky Pool & Kids Pool",
        desc: "A modern workout space equipped for strength, cardio, and routines.",

    },


];

export default function ProjectOverview() {
    return (
        <section className="w-full bg-white text-black pt-[5.4rem] pb-16 md:pb-[11.1rem]">
            <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">

                {/* Title */}
                <MotionWrapper>
                    <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75">
                        Project Overview
                    </h2>
                </MotionWrapper>

                {/* Description */}
                <MotionWrapper>
                    <p className="text-[#7B7B7B] normal-text mb-10 mt-11 w-[98%]">
                        Elixir Anfield is the fifth project of Elixir Homes. This ongoing project is strategically located in Anchery, Kuttanellur, very near to HiLite Mall & National Highway Kuttanellur and en route to Zoological Park, Puthur, Thrissur.

                        Elixir Anfield’s location boasts one of the finest residential localities in Thrissur. Various residential colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, Silent Valley etc. are all located nearby.
                    </p>
                </MotionWrapper>

                <MotionWrapper>
                    <p className="text-[#7B7B7B] leading-[1.8] mb-12 normal-text w-[98%]">
                        Other nearby premium landmarks include Regency Club Kuttanellur, Chakolas Pavilion Anchery etc.. Various worship places such as St John Bosco Church Mariyapuram, Ancherykkavu Temple Anchery etc., various schools, colleges etc. are also nearby.
The completion & key handover is expected in December 2027 as the construction works are ongoing in full swing. Elixir Anfield is approved by various banks such as State Bank of India, Canara Bank, Bank of Maharashtra etc.. Therefore your Home Loan requirements will be taken care at very fast pace professionally.
                         </p>
                </MotionWrapper>

                {/* section1 */}
                <div className="w-full py-7">

                    {/* MOBILE + TABLET GRID */}
                    <MotionWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 xl:hidden">
                        {overviewItemsGrid.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Icon */}
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="object-contain mt-1"
                                />

                                {/* TEXT */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="regular-heading text-[#2C2C2C] font-cormorant">
                                        {item.title}
                                    </h3>
                                    <p className="para-text text-[#7B7B7B]">{item.desc}</p>
                                    {/* <p className="para-text text-[#7B7B7B]">{item.desc2}</p> */}
                                </div>
                            </div>
                        ))}
                    </MotionWrapper>

                    {/* DESKTOP FLEX WITH DIVIDERS */}
                    <MotionWrapper className="hidden xl:grid grid-cols-3 flex-wrap items-start lg:gap-8 xl:gap-x-12 xl:gap-y-[6.3rem] xl:w-[94%] 2xl:w-[94%]">
                        {overviewItemsGrid.map((item, index) => {
                            const itemsPerRow = 3;
                            const isEndOfRow = (index + 1) % itemsPerRow === 0;
                            const isLastItem = index === overviewItemsGrid.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 relative ${index !== overviewItemsGrid.length - 1 ? "pr-[3.7rem]" : "pr-0"}`}
                                >

                                    {/* Vertical Divider */}
                                    {!isEndOfRow && !isLastItem && (
                                        <div className="absolute right-0 top-0 h-full w-px bg-[#E5E5E5]" />
                                    )}

                                    {/* Icon */}
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={32}
                                        height={32}
                                        className="object-contain mt-1"
                                    />

                                    {/* TEXT */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[24px] text-[#2C2C2C] font-cormorant">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] text-[#7B7B7B] font-inter">{item.desc}</p>
                                        {/* <p className="text-[16px] text-[#7B7B7B] font-inter">{item.desc2}</p> */}
                                    </div>
                                </div>
                            );
                        })}
                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
}
