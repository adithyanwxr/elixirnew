"use client";

import React from "react";
import MotionWrapper from "../common/MotionWrapper";



export default function Overview() {
    return (
        <section className="w-full bg-white text-black pt-[4.8rem] pb-20 md:pb-[10.7rem]">
            <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">

                {/* Title */}
                <MotionWrapper>
                    <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75">
                        Spaces We’ve Proudly Completed
                    </h2>
                </MotionWrapper>

                {/* Description */}
                <MotionWrapper>
                    <p className="text-[#7B7B7B] normal-text mb-10 mt-11 w-[98%]">
                        Our completed projects are not just structures of concrete and steel; they are homes where dreams have taken shape and lives have truly begun. Each project stands as a proud chapter in the Elixir Homes story-crafted with heart, delivered with integrity, and trusted by the families who now call them home. From the first brick laid to the final key handover, every detail reflects our promise of quality, care, and excellence.
                    </p>
                </MotionWrapper>
                <MotionWrapper>
                    <p className="text-[#7B7B7B] leading-[1.8] mb-12 normal-text w-[98%]">
                        These homes now echo with laughter, celebrations, and everyday moments that turn houses into living memories. For us, every completed project is not an end, but the beginning of many beautiful journeys for the families who live there. As we look back with pride and forward with purpose, our completed projects remain the strongest testimony to the trust we build and the legacy we continue to shape across Thrissur.
                    </p>
                </MotionWrapper>



            </div>
        </section>
    );
}
