"use client";

import Image from "next/image";
import RedButtonInsights from "../common/RedButtonInsights";
import MotionWrapper from "../common/MotionWrapper";

export default function ReadyToFindHome() {
    return (
        <section className="w-full bg-white pt-12  pb-32 lg:pt-26  lg:pb-50">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[48.5%_50%] gap-12 xl:gap-[6.3rem] items-center">

                    {/* LEFT IMAGE */}
                    <MotionWrapper className="w-full h-[260px] sm:h-[350px] lg:h-[535px] relative">
                        <Image
                            src="/testimonial/frame.webp"
                            alt="Home"
                            fill
                            className="object-cover "
                        />
                    </MotionWrapper>

                    {/* RIGHT CONTENT */}
                    <div>
                        <MotionWrapper>
                            <h2 className="font-cormorant section-title text-black  leading-snug w-[90%] xl:w-[70%]">
                                Ready To Find Your New Home ?
                            </h2>
                        </MotionWrapper>

                        <MotionWrapper>
                            <p className="text-[#7b7b7b] font-inter text-[18px] leading-normal mt-5 xl:mt-10  lg:w-[90%] font-light">
                                Elixir Homes stands as a symbol of refined architecture and uncompromised
                                quality. With every project, we aim to create living spaces that embody
                                elegance.
                            </p>
                        </MotionWrapper>

                        <MotionWrapper className="mt-8 xl:mt-16 md:w-[60%]">
                            <RedButtonInsights
                                text="VIEW PROJECTS"
                                isWidthFull={true}
                                textSize="text-[18px]"
                                padding="px-2 py-3"
                                paddingResponsive="px-[24px] xl:px-[36px] xl:py-[15px]"
                                link="/projects"
                            />

                        </MotionWrapper>
                    </div>

                </div>

            </div>
        </section>
    );
}
