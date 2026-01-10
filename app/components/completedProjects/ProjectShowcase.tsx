"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectType } from "@/app/data/projects";
import { ArrowUpRight } from "../icons/ArrowUpRight";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import RotatingTextLogoWhite from "../icons/ElixirBadgeWhite";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";



interface ProjectShowcaseProps {
    project: ProjectType;
    index: number;
}

export default function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
    const [imgIndex, setImgIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const hasMultipleImages = project.images.length > 1;



    const nextSlide = () => {
        setDirection(1);
        setImgIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };


    const isDark = index % 2 === 0;  // FIRST — Now it exists

    const isPrevDisabled = imgIndex === 0;
    const isNextDisabled = imgIndex === project.images.length - 1;

    // AFTER isDark exists → now valid
    const activeColor = isDark ? "#ffffff" : "#000000";       // white or black
    const disabledColor = isDark ? "#ffffff40" : "#00000040"; // light white OR light black




    return (
        <section
            className={`w-full py-24 md:py-16 lg:py-[6.2rem] ${isDark ? "bg-[#1B1A1F] text-white" : "bg-white text-black"
                }`}
        >
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto">
                <MotionWrapper>
                    <h1 className="section-heading font-cormorant ">
                        {project.title}
                    </h1>
                </MotionWrapper>
                <MotionWrapper>
                    <p className={`mt-9 para-text ${isDark ? "text-white" : "text-[#1b1a1f]"}`}>
                        {project.location}
                    </p>
                </MotionWrapper>

                <MotionWrapper className="flex items-center gap-6 mt-8">

                    {/* STATUS */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/completed-projects/icon2.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={`${isDark ? "opacity-80" : "opacity-100"}`}
                        />
                        <span className={`${isDark ? "text-[#8B8E72] text-[18px]" : "text-black text-[18px]"}`}>
                            {project.status}
                        </span>
                    </div>

                    {/* VERTICAL LINE */}
                    <div className={`h-6 w-px ${isDark ? "bg-[#8B8E72]" : "bg-black"}`}></div>

                    {/* TYPE */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/completed-projects/icon1.svg"
                            alt="icon"
                            width={24}
                            height={24}
                            className={`${isDark ? "opacity-80" : "opacity-100"}`}
                        />
                        <span className={`${isDark ? "text-[#8B8E72] text-[18px]" : "text-black text-[18px]"}`}>
                            {project.type}
                        </span>
                    </div>

                </MotionWrapper>

                <MotionWrapper>
                    <p
                        className={`mt-9 md:w-[82%] normal-text ${isDark ? "text-[#7b7b7b]" : "text-[#5c5c5c]"
                            }`}
                    >
                        {project.description}
                    </p>
                </MotionWrapper>

                <MotionWrapper className="relative w-full mt-28">
                    {/* Show arrows ONLY if project has multiple images */}
                    {hasMultipleImages && (
                        <div className="absolute -top-19 right-0 flex z-20">
                            <button
                                onClick={prevSlide}
                                disabled={isPrevDisabled}
                                className={`p-2 rounded-full transition ${isPrevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
                                    }`}
                            >
                                <ArrowLeftIcon
                                    className="size-10"
                                    strokeWidth={0.5}
                                    stroke={isPrevDisabled ? disabledColor : activeColor}
                                />
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={isNextDisabled}
                                className={`p-2 rounded-full transition ${isNextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
                                    }`}
                            >
                                <ArrowRightIcon
                                    className="size-10"
                                    strokeWidth={0.5}
                                    stroke={isNextDisabled ? disabledColor : activeColor}
                                />
                            </button>
                        </div>
                    )}



                    <div className="relative w-full h-62.5 sm:h-90 md:h-112.5 lg:h-160 overflow-hidden pt-12">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={imgIndex}
                                initial={{ x: direction === 1 ? 60 : -60, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction === 1 ? -60 : 60, opacity: 0 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={project.images[imgIndex]}
                                    alt="Project"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50"></div>
                            </motion.div>
                        </AnimatePresence>


                    </div>

                    <Link
                        href={project.route}
                        className="absolute bottom-4 md:bottom-[3.8rem] left-4 md:left-[3.2rem] 
             text-white border-b pr-2 py-2 flex items-center gap-3 
             md:gap-7 transition font-poppins md:text-[16px] font-medium"
                    >
                        VIEW PROJECT
                        <ArrowUpRight strokeWidth={1.2} />
                    </Link>


                    {/* Show count ONLY if more than one image */}
                    {hasMultipleImages && (
                        <p className="absolute bottom-4 md:bottom-16 right-4 md:right-[6.2rem] text-[16px] flex items-center gap-1">
                            <span className="text-white">{String(imgIndex + 1).padStart(2, "0")}</span>
                            <span className="text-white">—</span>
                            <span className="text-white/50">{String(project.images.length).padStart(2, "0")}</span>
                        </p>
                    )}



                    {/* ROTATING COMPASS ICON */}
                    <div className="hidden md:block absolute top-[7.6rem] right-28">
                        <RotatingTextLogoWhite />
                    </div>
                </MotionWrapper>

                {/* TESTIMONIAL */}
                <div className="mt-10">
                    <MotionWrapper>
                        <p
                            className={`italic font-cormorant text-[24px]  ${isDark ? "text-[#ffffff]" : "text-[#1b1a1f]"
                                }`}
                        >
                            “{project.testimonial}”
                        </p>
                    </MotionWrapper>

                    <MotionWrapper className="flex items-center gap-3 mt-7">
                        <Image
                            src={project.profile.image}
                            alt="User"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />

                        <div>
                            <h4 className="text-[18px] font-medium font-poppins mt-1">{project.profile.name}</h4>
                            <p className={`${isDark ? "text-[#cacaca] text-[18px] font-light" : "text-[#7b7b7b] text-[18px] font-light"}`}>
                                {project.profile.role}
                            </p>
                        </div>
                    </MotionWrapper>
                </div>



            </div>
        </section>
    );
}
