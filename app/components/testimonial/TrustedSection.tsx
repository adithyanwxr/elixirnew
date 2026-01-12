"use client";

import MotionWrapper from "../common/MotionWrapper";

export default function TrustedSection() {
    return (
        <section className="w-full bg-white pt-20 pb-8">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto">

                <div className="flex flex-col ">

                    {/* LEFT COLUMN (TITLE + DESCRIPTION) */}
                    <div className="">
                        <MotionWrapper>
                            <h2 className="font-cormorant section-title text-black mt-4 lg:mt-[23px] xl:mt-[23px] lg:w-[80%] xl:w-[60%] 2xl:w-[50%]">
                                Trusted By Families Who
                                Choose To Live With Us
                            </h2>
                        </MotionWrapper>
                        <MotionWrapper>
                            <p className="text-[#7B7B7B] normal-text mb-10 mt-8 w-[99%] lg:pl-80 xl:pl-[37.4rem]">
                               Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance.
                            </p>
                        </MotionWrapper>
                    </div>


                    <div className="hidden md:block md:w-[30%]"></div>

                </div>

            </div>
        </section>
    );
}
