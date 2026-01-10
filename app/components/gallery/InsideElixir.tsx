"use client";

import MotionWrapper from "../common/MotionWrapper";

export default function InsideElixir() {
    return (
        <section className="w-full bg-white pt-[6.2rem] pb-[3.6rem]">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto">

                <div className="flex flex-col ">

                    {/* LEFT COLUMN (TITLE + DESCRIPTION) */}
                    <div className="">
                        <MotionWrapper>
                            <h5 className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
                                Inside Elixir
                            </h5>
                        </MotionWrapper>
                        <MotionWrapper>
                            <h2 className="font-cormorant section-title text-black mt-4 lg:mt-[23px] xl:mt-[23px] lg:w-[70%] xl:w-[600px] 2xl:w-[40%]">
                                A Visual Journey Through Our Spaces
                            </h2>
                        </MotionWrapper>
                        <MotionWrapper>

                            <p className="text-[#7B7B7B] normal-text mb-10 mt-8 w-[99%] lg:pl-80 xl:pl-[37.4rem]">
                                Step inside the world of Elixir Homes through our visual showcase-where every frame captures the beauty, detail, and craftsmanship of thoughtfully designed living spaces. Wander through curated moments that highlight our architecture, ambience, and refined finishes. Each image reflects the care we put into creating homes that inspire comfort and elegance. Let this visual journey bring you closer to experiencing your dream home.
                            </p>
                        </MotionWrapper>
                    </div>

                    {/* RIGHT SIDE EMPTY */}
                    <div className="hidden md:block md:w-[30%]"></div>

                </div>

            </div>
        </section>
    );
}
