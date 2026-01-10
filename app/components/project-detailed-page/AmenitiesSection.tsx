"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const amenities = [
    {
        icon: "/villa/v9.svg",
        title: "Dedicated Open Wells",
        desc: "Each villa features its own open well ensuring reliable and self-sufficient water supply. ",
    },
    {
        icon: "/villa/v2.svg",
        title: "Individual Biogas Plant",
        desc: "Eco-friendly waste management system promoting sustainable living for every home. ",
    },
    {
        icon: "/villa/v3.svg",
        title: "Premium Internal Roads",
        desc: "Heavy-duty shot-blasted paving tiles ensuring durability and smooth connectivity.",
    },

    {
        icon: "/villa/v8.svg",
        title: "Clubhouse ",
        desc: "An exclusive community space with swimming pool and gymnasium for recreation and wellness.",
    },

];

const amenities1 = [
    {
        icon: "/villa/v6.svg",
        title: "Underground KSEB Cabling",
        desc: "Safe and aesthetically planned electrical infrastructure with a dedicated transformer.",
    },
    {
        icon: "/villa/v4.svg",
        title: "Rainwater Harvesting Systems",
        desc: "Integrated water conservation systems for sustainable groundwater recharge. ",
    },
    {
        icon: "/villa/v1.svg",
        title: "Eco-Friendly Infrastructure",
        desc: "Thoughtfully planned sustainable systems supporting responsible and green living. ",
    },
    {
        icon: "/villa/v5.svg",
        title: "Low-Density Gated Community",
        desc: "Just 16 exclusive villas ensuring privacy, peace, and premium living.",
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
                                <h3 className="regular-heading text-white font-cormorant mt-[0.7rem]">{item.title}</h3></MotionWrapper>

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
