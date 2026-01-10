"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const amenities = [
    {
        icon: "/project-detailed/icon5.svg",
        title: "Fitness Studio ",
        desc: " A fully equipped modern gym designed to support strength training, cardio workouts, and holistic wellness routines.  ",
    },
    // {
    //     icon: "/project-detailed/icon6.svg",
    //     title: "Swimming Pool ",
    //     desc: "A tranquil poolside retreat created for relaxation, leisure, and rejuvenating aquatic experiences. ",
    // },
    {
        icon: "/project-detailed/icon11.svg",
        title: "Landscaped Courtyard ",
        desc: "Beautifully designed green spaces for peaceful walks, relaxation, and community interaction.",
    },

    {
        icon: "/project-detailed/icon8.svg",
        title: "Children’s Play Area ",
        desc: " A safe and engaging play zone that encourages joyful play, physical activity, and social development. ",
    },
    {
  icon: "/project-detailed/icon15.svg",
  title: " Incinerator (Waste Management)",
  desc: "Sustainable solid waste disposal through an incinerator and efficient liquid waste treatment via STP.",
},


];

const amenities1 = [
    {
        icon: "/project-detailed/icon9.svg",
        title: "Multi-Purpose Hall",
        desc: " A versatile indoor space ideal for celebrations, meetings, and community gatherings. ",
    },
    // {
    //     icon: "/project-detailed/icon10.svg",
    //     title: "24/7 CCTV Surveillance ",
    //     desc: "Round-the-clock security monitoring ensuring complete safety and peace of mind for residents. ",
    // },
    {
        icon: "/project-detailed/icon7.svg",
        title: "Covered Parking",
        desc: " Weather-protected parking spaces designed for convenience and vehicle safety. ",
    },
    {
        icon: "/project-detailed/icon12.svg",
        title: "Visitors’ Lounge ",
        desc: "A comfortable and welcoming space for residents to host guests in a relaxed setting. ",
    },

];

export default function AmenitiesSection() {
    return (
        <section className="w-full bg-[#1D1C20] text-white py-24 md:py-[9.4rem]">
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
                <MotionWrapper><div className="hidden md:block pb-6 border-b border-[#acacac]"></div></MotionWrapper>


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
