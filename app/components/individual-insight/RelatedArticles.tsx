"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";
import MotionWrapper from "../common/MotionWrapper";

const RelatedArticles = ({ currentSlug }: { currentSlug: string }) => {

    const blog = blogs.find((b) => b.slug === currentSlug);

    const related = blogs.filter((b) => blog?.relatedSlugs?.includes(b.slug));
    return (
        <div className="w-full bg-white">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pb-28 md:pb-32 xl:pt-12 xl:pb-[12.4rem]">

                {/* TITLE SECTION */}
                <div className="h-auto w-full lg:w-[80%] xl:w-[60%] 2xl:w-[55%]">
                    <MotionWrapper>
                        <h5 className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
                            RELATED ARTICLES
                        </h5>
                    </MotionWrapper>
                    <MotionWrapper>
                        <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75">
                            An Insight Shaping Strategic Outlook
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper>
                        <p className="normal-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6">
                            Elixir Homes stands as a symbol of refined architecture and uncompromised quality. With every project, we aim to create living spaces that embody elegance.
                        </p>
                    </MotionWrapper>
                </div>

                {/* BLOG CARDS */}
                <div className="
                    flex gap-6 overflow-x-auto scrollbar-hide 
                    sm:grid sm:grid-cols-2 lg:grid-cols-3
                    sm:gap-x-[2.7rem] sm:gap-y-20 mt-20
                ">
                    {related.map((item) => (
                        <Link
                            key={item.id}
                            href={`/insights/${item.slug}`}
                            className="min-w-[90%] sm:min-w-0 block"
                        >
                            <MotionWrapper>
                                <div className="w-full h-65 md:h-80 xl:h-127.5 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </MotionWrapper>

                            <MotionWrapper className="flex justify-between text-[18px] font-inter text-[#8b8e72] mt-4">
                                <p>{item.date}</p>
                                <p>{item.category}</p>
                            </MotionWrapper>
                            <MotionWrapper>
                                <h3 className="font-cormorant text-[24px] md:text-[24px] xl:text-[28px] text-[#1b1a1f] leading-[120%] mt-[1.4rem]">
                                    {item.title}
                                </h3>
                            </MotionWrapper>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default RelatedArticles;
