"use client";

import Image from "next/image";
import React from "react";
import MotionWrapper from "../common/MotionWrapper";

const overviewItems = [
    {
        icon: "/project-detailed/icon1.svg",
        title: "Location",
        desc: "Moscow Road, Anchery ",
    },
    {
        icon: "/project-detailed/icon2.svg",
        title: "Status",
        desc: "Completed ",
    },
    {
        icon: "/project-detailed/icon3.svg",
        title: "Delivered ",
        desc: "16 Villas ",
    },
    {
        icon: "/project-detailed/icon4.svg",
        title: "Project Highlight ",
        desc: "Super Luxury Villas",
    },
];

export default function ProjectOverview() {
    return (
        <section className="w-full bg-white text-black pt-[4.8rem] pb-20 md:pb-[10.7rem]">
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
                        Elixir Super Luxury Villas is a fully customisable, high-end residential villa project located at Anchery, Thrissur. Spread across 1.60 acres and comprising 16 exclusive villas, the project is thoughtfully designed to offer privacy, sustainability, and superior living standards. Each villa is equipped with a dedicated open well and an individual biogas plant, promoting eco-conscious living.
                    </p>
                </MotionWrapper>
                <MotionWrapper>
                    <p className="text-[#7B7B7B] leading-[1.8] mb-12 normal-text w-[98%]">
                        The project features an array of world-class common amenities including a landscaped children’s park, underground KSEB cabling with a dedicated transformer, efficient rainwater harvesting systems, heavy-duty shot-blasted paving tiles for internal roads, a common bore well, and a fully equipped clubhouse with swimming pool, gymnasium, incinerator, and an overhead water tank-ensuring a truly luxurious and self-sustained lifestyle.
                    </p>
                </MotionWrapper>

                <div className="w-full py-7 pl-1">

                    {/* MOBILE + TABLET → GRID */}
                    <MotionWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-8 lg:hidden">
                        {overviewItems.map((item, index) => (
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
                                </div>
                            </div>
                        ))}
                    </MotionWrapper>

                    {/* DESKTOP → FLEX WITH DIVIDERS */}
                    <MotionWrapper className="hidden lg:flex flex-wrap items-start lg:gap-8 xl:gap-10">
                        {overviewItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 pr-11 relative">
                                {/* Vertical Divider */}
                                {index !== overviewItems.length - 1 && (
                                    <div className="absolute right-0 top-0 h-full w-px bg-[#E5E5E5]" />
                                )}

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
                                </div>
                            </div>
                        ))}
                    </MotionWrapper>
                </div>


            </div>
        </section>
    );
}
