"use client";

import Image from "next/image";
import React from "react";
import MotionWrapper from "../common/MotionWrapper";

const overviewItems = [
    {
        icon: "/project-detailed/icon1.svg",
        title: "Location",
        desc: " Kuttanellur, Thrissur",
    },
    {
        icon: "/project-detailed/icon2.svg",
        title: "Status",
        desc: "Completed ",
    },
    {
        icon: "/project-detailed/icon3.svg",
        title: "Delivered ",
        desc: "2/3/4/5 BHK",
    },
    {
        icon: "/project-detailed/icon4.svg",
        title: "Project Highlights ",
        desc: "Project With 80% Open Space",
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
                        The “Orchid” was one of our signature projects. The Orchid is all about luxury and comfort. We had put all our focus to provide extreme comfort as well as luxury via the project “The Orchid”. This signature work is situated at the heart of Kuttanellur, which is one of the best residential areas in Thrissur. The Orchid is the first project in Thrissur & Kerala to set aside 80% of the entire land area for common amenities and First in Thrissur & Kerala to allocate dedicated visitor’s car parking slots without any extra cost.
                    </p>
                </MotionWrapper>
                <MotionWrapper>
                    <p className="text-[#7B7B7B] leading-[1.8] mb-12 normal-text w-[98%]">
                        The Orchid is an elegant and luxury apartment project.

                        The charming facade and layout of each apartment make it unique from others. The extremely pleasing landscaped exterior is a treat for the residents. Spaciously designed 2/3/4/5 BHK luxury apartments and penthouses make “The Orchid” nothing less than a perfect residential project. The handpicked amenities add on the glow of this residential project. We welcome all to be a part of the luxury and pleasing lifestyle.
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
