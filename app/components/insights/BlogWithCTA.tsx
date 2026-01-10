'use client';

import Image from "next/image";
import Link from "next/link";
import RedButtonInsights from "../common/RedButtonInsights";
import MotionWrapper from "../common/MotionWrapper";

export default function BlogWithCTA() {
    return (
        <section className="w-full bg-white pt-1 pb-24">
            <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* ---------------- LEFT BLOG SECTION ---------------- */}

                <div className="lg:col-span-2  lg:border-r border-gray-400 lg:pr-8 xl:pr-[3.9rem]">

                    {/* Blog Image */}
                    <MotionWrapper className="w-full h-65 md:h-95 lg:h-149.75 relative">
                        <Link href="/insights/best-flats-in-thrissur-what-to-look-for-before-you-buy">
                            <Image
                                src="/blog/blog1.webp"
                                alt="Blog"
                                fill
                                className="object-cover "
                            />
                        </Link>
                    </MotionWrapper>

                    {/* Meta */}
                    <MotionWrapper>
                        <Link href="/insights/best-flats-in-thrissur-what-to-look-for-before-you-buy">
                            <div className="flex justify-between text-[18px] font-inter text-[#8b8e72] mt-4">
                                <p>2 October, 2025</p>
                                <p>Modern Living</p>
                            </div>
                        </Link>
                    </MotionWrapper>

                    {/* Title */}
                    <MotionWrapper>
                        <Link href="/insights/best-flats-in-thrissur-what-to-look-for-before-you-buy">
                            <h2 className="mt-5 lg:mt-4.5 xl:mt-5.5 font-cormorant text-[20px] md:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] leading-[117%] text-[#1b1a1f]">
                                Thrissur Living: More Than Just a Home
                            </h2>
                        </Link>
                    </MotionWrapper>

                    {/* Description */}
                    <MotionWrapper>
                        <p className="normal-text font-inter text-[#7B7B7B] mt-5">
                            Buying a flat isn’t only about walls and square feet anymore, it’s about how life feels once you move in. Thrissur offers something special, a mix of culture, convenience and comfort. You get the buzz of the city, schools, hospitals and shopping nearby, but also the calm and charm that only Thrissur can give.

                            So, when you check out the best flats in Thrissur, ask yourself: Does this place give me the lifestyle I want every day?
                        </p>
                    </MotionWrapper>

                    {/* Read More */}
                    <MotionWrapper>
                        <Link href="/insights/best-flats-in-thrissur-what-to-look-for-before-you-buy">
                            <button className="text-[#1b1a1f] text-[18px] font-normal hover:opacity-60 transition-all mt-6">
                                Read More
                            </button>
                        </Link>
                    </MotionWrapper>
                </div>

                {/* ---------------- RIGHT CTA CARD ---------------- */}
                <div className=" xl:pl-4 mt-12 lg:mt-0">
                    <div className="border-b border-gray-400  overflow-hidden bg-white">
                        <MotionWrapper>
                            <Image
                                src="/blog/b2.webp"
                                alt="Building"
                                width={500}
                                height={300}
                                className="w-full h-57.5 md:h-59.5 object-cover"
                            />
                        </MotionWrapper>

                        <div className="pb-10">
                            <MotionWrapper>
                                <h3 className="mt-5 lg:mt-4.5 xl:mt-5.5 font-cormorant text-[20px] md:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] leading-[117%] text-[#1b1a1f]">
                                    Want More Insights Or Project Details?
                                </h3>
                            </MotionWrapper>

                            <MotionWrapper>
                                <p className="normal-text font-inter text-[#7B7B7B] mt-5">
                                    Have questions about our developments or design approach? We’re here to help.
                                </p>
                            </MotionWrapper>
                            <MotionWrapper>
                                <div className=" w-full mt-5">
                                    <RedButtonInsights text="CONTACT FOR DETAILS" isWidthFull textSize="text-[16px] " link="/contact" />

                                </div>
                            </MotionWrapper>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
