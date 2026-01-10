'use client';

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";


const blogs = [
  {
    id: 1,
    slug: "best-flats-in-thrissur-what-to-look-for-before-you-buy",
    title: "Best Flats in Thrissur: What to Look for Before You Buy",
    category: "Modern Living",
    date: "January 19, 2026",
    image: "/blog/blog1.webp",
  },
  {
    id: 2,
    slug: "apartment-vs-independent-home-2025-buyers-guide",
    title: "Apartment vs Independent Home: The Ultimate 2025 Buyer’s Guide (November Edition)",
    category: "Sustainability",
    date: "January 19, 2026",
    image: "/blog/blog2.webp",
  },
  {
    id: 3,
    slug: "apartments-for-sale-in-thrissur-elixir-homes",
    title: "Apartments for Sale in Thrissur Discover Your Dream Home with Elixir Homes",
    category: "Smart Living",
    date: "January 19, 2026",
    image: "/blog/blog3.webp",
  },
  {
    id: 4,
    slug: "best-construction-company-in-thrissur-checklist",
    title: "Expert Checklist to Choose the Best Construction Company in Thrissur",
    category: "Modern Living",
    date: "January 19, 2026",
    image: "/blog/blog4.webp",
  },
  {
    id: 5,
    slug: "making-your-dream-home-comfortable-elixir-homes-guide",
    title: "Making Your Dream Home Comfortable: Experts’ Advice from Elixir Homes",
    category: "Sustainability",
    date: "January 19, 2026",
    image: "/blog/blog5.webp",
  },
  {
    id: 6,
    slug: "pros-and-cons-of-rera-act-complete-buyers-guide",
    title: "Pros and Cons of the RERA Act A Complete Buyer’s Guide",
    category: "Smart Living",
    date: "January 19, 2026",
    image: "/blog/blog6.webp",
  },
];



const categories = ["All Blogs", "Modern Living", "Sustainability", "Smart Living"];
const TrendingInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <div className="w-full bg-white">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto  pb-28 md:pb-32 xl:pt-[6.4rem] xl:pb-[12.4rem] pt-12">
          <div className="">
            <div className=" h-auto w-full lg:w-[80%] xl:w-[60%] 2xl:w-[55%]">
              <MotionWrapper>
                <h5 className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
                  TRENDING INSIGHTS
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
          </div>
          {/* ---------------- Dropdown Filter ---------------- */}
          <div ref={dropdownRef} className="flex justify-end mb-10 relative mt-10">
            <MotionWrapper>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-9 border border-[#9a99a2] rounded-4xl px-4 py-2 text-[#1b1a1f] text-[16px] font-inter bg-white"
              >
                {selectedCategory}
                <ChevronDown size={18} />
              </button>

              {open && (
                <div className="absolute top-12 right-0 bg-white border w-40 z-50">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-inter text-black"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </MotionWrapper>
          </div>

          {/* ---------------- Blog Cards Grid ---------------- */}
          <div
            className="
    flex gap-6 overflow-x-auto scrollbar-hide 
    sm:grid sm:grid-cols-2 lg:grid-cols-3 
    sm:gap-x-[2.7rem] sm:gap-y-20
  "
          >
            {filteredBlogs.map((item) => (
              <Link
                key={item.id}
                href={`/insights/${item.slug}`}

                className="min-w-[90%] sm:min-w-0 block"
              >
                <div className="w-full h-65 md:h-80 xl:h-127.5 relative">
                  <MotionWrapper>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </MotionWrapper>
                </div>
                <MotionWrapper>
                  <div className="flex justify-between text-[18px] font-inter text-[#8b8e72] mt-4">
                    <p>{item.date}</p>
                    <p>{item.category}</p>
                  </div>
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
    </>
  );
};

export default TrendingInsights;
