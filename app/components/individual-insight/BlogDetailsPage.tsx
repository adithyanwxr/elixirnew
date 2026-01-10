"use client";

import Image from "next/image";
import RedButtonInsights from "../common/RedButtonInsights";
import { blogs } from "@/app/data/blogs";
import MotionWrapper from "../common/MotionWrapper";

export default function BlogDetailsPage({ slug }: { slug: string }) {
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="w-full py-40 text-center text-2xl text-gray-500">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white">
        <div className="w-[95%] sm:lg:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-28 pb-12 md:pb-40 xl:pt-[13.6rem] xl:pb-40">

          {/* ---------------- TITLE ---------------- */}
          <div>
            <MotionWrapper>
              <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75 lg:w-[80%] xl:w-[60%] 2xl:w-[55%]">
                {blog.title}
              </h2>
            </MotionWrapper>

            <MotionWrapper>
              <div
                className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6"
                dangerouslySetInnerHTML={{ __html: blog.description ?? "" }}
              ></div>
            </MotionWrapper>

          </div>

          {/* ---------------- CATEGORY + AUTHOR ---------------- */}
          <MotionWrapper className="md:flex items-center justify-between pt-10 pb-6">
            <p className="font-inter text-[18px] text-[#8b8e72] font-[390]">
              {blog.category}
            </p>

            <div className="flex items-center gap-6 text-[18px] font-inter text-[#8b8e72] font-[390] mt-5 md:mt-0">
              <p>By Elixir Editorial Team</p>
              <span className="w-0.5 h-5 bg-[#8b8e72] block"></span>
              <p>{blog.date}</p>
            </div>
          </MotionWrapper>

          {/* ---------------- HERO IMAGE ---------------- */}
          <MotionWrapper className="w-full h-65 md:h-95 lg:h-150 relative">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </MotionWrapper>

          {/* ---------------- BODY CONTENT ---------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-[67%_27%] xl:grid-cols-[67%_31%] gap-12 mt-12">

            {/* LEFT SECTION */}
            <div className="lg:border-r border-gray-400">

              {/* BLOCK 1 */}
              <MotionWrapper>
                <h1 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading1}
                </h1>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10 [&>ul]:list-disc [&>ul]:list-inside"
                  dangerouslySetInnerHTML={{ __html: blog.content1 }}
                ></div>
              </MotionWrapper>

              <MotionWrapper>
                <h2 className="font-cormorant text-[28px] text-[#1b1a1f] mt-9 mb-3">
                  {blog.subsubheading1}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10 "
                  dangerouslySetInnerHTML={{ __html: blog.subcontent1 ?? "" }}

                ></div>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant text-[28px] text-[#1b1a1f] mt-9 mb-3">
                  {blog.subsubheading2}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10"
                  dangerouslySetInnerHTML={{ __html: blog.subcontent2 ?? "" }}

                ></div>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant text-[28px] text-[#1b1a1f] mt-9 mb-3">
                  {blog.subsubheading3}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10"
                  dangerouslySetInnerHTML={{ __html: blog.subcontent3 ?? "" }}

                ></div>
              </MotionWrapper>


              {/* BLOCK 2 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading2}
                </h2>
              </MotionWrapper>
             <div
  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10 [&>ul]:list-disc [&>ul]:list-inside"
  dangerouslySetInnerHTML={{ __html: blog.content2 ?? "" }}
></div>



              {/* BLOCK 3 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading3}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10 [&>ul]:list-disc [&>ul]:list-inside"
                  dangerouslySetInnerHTML={{ __html: blog.content3 }}
                ></div>
              </MotionWrapper>



              {/* BLOCK 4 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading4}
                </h2>
              </MotionWrapper>
             <MotionWrapper>
  <div
    className="
      normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B]
      lg:w-[90%] mb-10 
      [&>ol]:list-decimal [&>ol]:list-inside
      [&>ul]:list-disc [&>ul]:list-inside
    "
    dangerouslySetInnerHTML={{ __html: blog.content4 }}
  ></div>
</MotionWrapper>


              {/* BLOCK 5 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading5}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10 [&>ul]:list-disc [&>ul]:list-inside"
                   dangerouslySetInnerHTML={{ __html: blog.content5 ?? "" }}
                ></div>
              </MotionWrapper>


              {/* BLOCK 6 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading6}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10"
                  dangerouslySetInnerHTML={{ __html: blog.content6 ?? "" }}

                ></div>
              </MotionWrapper>

              {/* BLOCK 7 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading7}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10"
                  dangerouslySetInnerHTML={{ __html: blog.content7 ?? "" }}

                ></div>
              </MotionWrapper>

               {/* BLOCK 8 */}
              <MotionWrapper>
                <h2 className="font-cormorant text-[32px] md:text-[40px] font-medium text-[#1b1a1f] leading-tight mb-3">
                  {blog.subheading8}
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <div
                  className="normal-text font-inter text-[16px] leading-[1.8] text-[#7B7B7B] lg:w-[90%] mb-10"
                  dangerouslySetInnerHTML={{ __html: blog.content8 ?? "" }}

                ></div>
              </MotionWrapper>


            </div>

            {/* RIGHT CTA SECTION */}
            <div className="lg:pl-1">
              <div className="xl:px-6 py-9 bg-white">
                <MotionWrapper>
                  <h3 className="font-cormorant text-[28px] text-[#1b1a1f] leading-[1.3] mt-[1.1rem]">
                    Want More Insights Or Project Details?
                  </h3>
                </MotionWrapper>
                <MotionWrapper>
                  <p className="normal-text font-inter text-[16px] text-[#7B7B7B] mt-[1.1rem]">
                    Have questions about our developments or design approach? We’re here to help.
                  </p>
                </MotionWrapper>

                <MotionWrapper className="w-full mt-5">
                  <RedButtonInsights
                    text="CONTACT FOR DETAILS"
                    isWidthFull
                    textSize="text-[16px]"
                    padding="px-4 py-3"
                    paddingResponsive="md:px-60 lg:px-4 xl:px-16 xl:py-[1.1rem]"
                    link="/contact"
                  />
                </MotionWrapper>

                <MotionWrapper>  <hr className="mt-10 border-gray-400" /> </MotionWrapper>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
