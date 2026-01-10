"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const amenities = [
    {
        icon: "/land/land4.svg",
        title: "Well-Planned Residential Plots",
        desc: "Thoughtfully demarcated plots designed for comfortable and future-ready home construction.  ",
    },
    {
        icon: "/land/land8.svg",
        title: "Excellent Road Connectivity",
        desc: " Strategic location near Vadakkenchery and Alathur with seamless access to major roads. ",
    },

    {
        icon: "/land/land5.svg",
        title: "Modern Infrastructure Development",
        desc: "Fully developed land with proper leveling and structured layout planning. ",
    },
    {
        icon: "/land/land1.svg",
        title: "Immediate Construction Ready",
        desc: "Plots delivered ready for immediate building without additional development delays. ",
    },


];

const amenities1 = [
    {
        icon: "/land/land6.svg",
        title: "Peaceful Residential Environment",
        desc: "Calm, green surroundings ideal for serene and quality living. ",
    },
    {
        icon: "/land/land7.svg",
        title: "Wide Internal Roads",
        desc: "Smooth, well-laid internal roads ensuring easy access and safe movement within the project. ",
    },

    {
        icon: "/land/land3.svg",
        title: "Clear Plot Demarcation ",
        desc: " Precisely marked plots ensuring transparency and ease of ownership. ",
    },
    {
        icon: "/land/land2.svg",
        title: "High Investment Potential ",
        desc: "Rapidly growing location offering strong appreciation and long-term value. ",
    },

];

export default function AmenitiesSection() {
    return (
        <section className="w-full bg-[#1D1C20] text-white py-20 md:py-[9.4rem]">
            <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">
                <div className="md:max-w-[80%] xl:max-w-[55%]">
                    <MotionWrapper>
                        <p className="taghead-text text-[#8B8E72] font-inter">AMENITIES</p>
                    </MotionWrapper>
                    <MotionWrapper>
                        <h2 className="font-cormorant section-title text-white mt-[1.4rem] w-[90%] xl:w-[70%]">
                            Modern Lifestyle Features
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper>
                        <p className="para-text font-inter text-[#7b7b7b]  mt-[2.7rem]">
                            At Elixir Homes, amenities are thoughtfully designed to elevate everyday living. Blending refined architecture with functional elegance, each space is crafted to offer comfort, recreation, and a superior lifestyle experience within a secure and vibrant community.

                        </p>
                    </MotionWrapper>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-14 mt-[7.4rem]">
                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="pb-2 flex flex-col gap-3"
                        >
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
                                <h3 className="regular-heading text-white font-cormorant mt-[0.7rem]">{item.title}</h3>
                            </MotionWrapper>

                            {/* Description */}
                            <MotionWrapper>
                                <p className="normal-text text-[#9a99a2]">
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
                        <div
                            key={index}
                            className="pb-2 flex flex-col gap-3"
                        >
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
                                <h3 className="regular-heading text-white font-cormorant mt-[0.7rem]">{item.title}</h3>
                            </MotionWrapper>

                            {/* Description */}
                            <MotionWrapper>
                                <p className="normal-text text-[#9a99a2]">
                                    {item.desc}
                                </p>
                            </MotionWrapper>

                        </div>

                    ))}

                </div>
                <MotionWrapper><div className="pb-6 border-b border-[#acacac]"></div></MotionWrapper>
            </div>
        </section>
    );
}
