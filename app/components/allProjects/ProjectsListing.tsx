"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import RedButtonInsights from "../common/RedButtonInsights";
import MotionWrapper from "../common/MotionWrapper";

const projects = [
  {
    id: 1,
    side: "right-text",
    title: "Elixir Anfield",
    location: "Anchery, Kuttanellur, Kerala",
    status: "Ongoing",
    category: "Ongoing Projects",
    beds: "Book Now",
    area: "2-5",
    desc: "Elixir Anfield is the fifth project of Elixir Homes. This ongoing project is strategically located in Anchery, Kuttanellur, very near to Hilite Shopping Mall & National Highway Kuttanellur and enroute to Zoological Park, Puthur, Thrissur. Elixir Anfield’s location boasts one of the finest residential localities in Thrissur. Various residential colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, Silent Valley etc are all located nearby. ",
    image: "/projects/Elixir-Anfeild.webp",
    route: "/elixir-anfield",
  },
  {
    id: 2,
    side: "left-text",
    title: "The Orchid",
    location: "Kuttanellur, Thrissur, Kerala",
    status: "Completed",
    category: "Completed Projects",
    beds: "Sold Out",
    area: "2/3/4/5 BHK",
    desc: "The “Orchid” was one of our signature projects. The Orchid is all about luxury and comfort. We had put all our focus to provide extreme comfort as well as luxury via the project “The Orchid”. This signature work is situated at the heart of kuttanellur, which is one of the best residential areas in Thrissur.",
    image: "/projects/Orchid.webp",
    route: "/orchid",
  },
  {
    id: 3,
    side: "right-text",
    title: "Elixir Akkara Gardens",
    location: "Near Regency Club, Kuttanellur, Kerala",
    status: "Completed",
    category: "Completed Projects",
    beds: "Sold Out",
    area: "12 villas/villa",
    desc: "Elixir Akkara Gardens was a fully customisable premium luxury villa/villa plot project located at Anchery, Kuttanellur, Thrissur. It was a 1.20 Acre project comprising 12 villas/villa plots, each villa having dedicated open well. The common amenities include two huge rainwater harvesting systems, 6 meter wide internal road, heavy duty shot blasted paving tiles for internal road, KWA water connection etc.",
    image: "/projects/Elixir-Akkara-Gardens.webp",
    route: "/elixir-akkara-garden",
  },
  {
    id: 4,
    side: "left-text",
    title: "Elixir Manavath Heights",
    location: "Vadakkenchery, Alathur, Palakkad",
    status: "Completed",
    category: "Completed Projects",
    beds: "Sold Out",
    area: "24 Acre",
    desc: "Elixir Manavath Heights was a land-development project located at Vadakkenchery, near Alathur in Palakad district. This was a 4 Acre project, wherein Elixir Homes developed the entire land. The development activities started in early 2020 & the entire land was fully sold out in 2021. ",
    image: "/projects/Elixir-Manavath-Heights1.webp",
    route: "/elixir-manavath-heights",
  },
  {
    id: 5,
    side: "right-text",
    title: "Elixir Super Luxury Villas",
    location: "Moscow Road, Anchery",
    status: "Completed",
    category: "Completed Projects",
    beds: "Sold Out",
    area: "216 villas ",
    desc: "Elixir Super Luxury Villas is an exclusive, fully customisable luxury villa community located at Anchery, Thrissur. Spread across 1.60 acres with 16 premium villas, the project offers a perfect blend of privacy, sustainability, and sophisticated living.",
    image: "/home/Elixir-Super-Luxury-Villas11.webp",
    route: "/elixir-super-luxury-villas",
  },

];

const categories = [
  "All Projects",
  "Ongoing Projects",
  "Completed Projects",

];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter projects
  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Pagination setup
  const itemsPerPage = [5, 5]; // Page 1 = 4 items, Page 2+ = 5 items each

  const [currentPage, setCurrentPage] = useState(1);

  const currentLimit = currentPage === 1 ? itemsPerPage[0] : itemsPerPage[1];

  const startIndex = currentPage === 1 ? 0 : itemsPerPage[0];

  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + currentLimit);

  const totalPages =
    filteredProjects.length <= itemsPerPage[0]
      ? 1
      : 1 + Math.ceil((filteredProjects.length - itemsPerPage[0]) / itemsPerPage[1]);

  return (
    <section className="w-full bg-white pt-12 xl:pt-0 pb-28 md:pb-50 -mt-1 xl:mt-0">
      <div className="">

        {/* Dropdown */}
        <MotionWrapper className="flex justify-end mb-10 relative w-[87%] mx-auto" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-9 border border-[#9a99a2] rounded-4xl px-4 py-2 text-[#1b1a1f] text-[16px] font-inter bg-white"
          >
            {selectedCategory}
            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute top-12 right-0 bg-white border w-48 z-50 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1); // reset pagination here
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

        {/* Projects */}
        {paginatedProjects.map((p, index) => (
          <div
            key={p.id}
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
          >
            {/* Alternate layout: even index = image left, odd index = image right */}
            {index % 2 === 1 ? (
              <>
                {/* TEXT LEFT */}
                <div className="ml-4 md:ml-12 xl:ml-[6.3rem] w-[92%] md:w-[85%] order-2 lg:order-0">
                  <MotionWrapper>
                    <h2 className="section-heading font-cormorant text-[#1b1a1f] mb-8  mt-8 lg:mt-0">{p.title}</h2>
                  </MotionWrapper>
                  <MotionWrapper>
                    <p className="para-text text-[#1b1a1f] mb-8">{p.location}</p>
                  </MotionWrapper>



                  <MotionWrapper className="flex items-center gap-5 text-[#8B8E72] text-[12px] md:text-[18px] mb-8">

                    {/* Status */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/projects/icon3.svg"   // <-- your status image
                        alt="Status Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.status}
                    </div>

                    <span className="w-px h-6 bg-[#8B8E72]"></span>

                    {/* Beds */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/projects/icon2.svg"     // <-- your bed image
                        alt="Bed Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.beds}
                    </div>

                    <span className="w-px h-6 bg-[#8B8E72]"></span>

                    {/* Area / Bath */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/projects/icon1.svg"    // <-- your area/bath image
                        alt="Area Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.area}
                    </div>

                  </MotionWrapper>

                  <MotionWrapper>
                    <p className="text-[#7b7b7b] mb-6 lg:w-[90%] normal-text">
                      {p.desc}
                    </p>
                  </MotionWrapper>

                  <MotionWrapper className="md:w-[55%] xl:w-[46%] mt-[3.7rem] mb-20 lg:mb-0">
                    <RedButtonInsights
                      text="EXPLORE PROPERTY"
                      isWidthFull
                      textSize="text-[16px]"
                      padding="px-4 py-3"
                      paddingResponsive="md:px-5 py-4 lg:px-4 xl:px-8 lg:py-[1.1rem]"
                      link={p.route}
                    />
                  </MotionWrapper>
                </div>

                {/* IMAGE RIGHT */}
                <MotionWrapper className="relative w-full h-70 md:h-105 lg:h-200 overflow-hidden order-1 lg:order-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </MotionWrapper>
              </>
            ) : (
              <>
                {/* IMAGE LEFT */}
                <MotionWrapper className="relative w-full h-70 md:h-105 lg:h-200 overflow-hidden order-1 lg:order-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </MotionWrapper>

                {/* TEXT RIGHT */}
                <div className="ml-4 md:ml-12 xl:ml-20 w-[92%] md:w-[85%] order-2 lg:order-0">
                  <MotionWrapper>
                    <h2 className="section-heading font-cormorant text-[#1b1a1f] mb-8  mt-8 lg:mt-0">{p.title}</h2>
                  </MotionWrapper>
                  <MotionWrapper>
                    <p className="para-text text-[#1b1a1f] mb-8">{p.location}</p>
                  </MotionWrapper>

                  <MotionWrapper className="flex items-center gap-5 text-[#8B8E72] text-[12px] md:text-[18px] mb-8">

                    {/* Status */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/projects/icon3.svg"   // <-- your status image
                        alt="Status Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.status}
                    </div>

                    <span className="w-px h-6 bg-[#8B8E72]"></span>

                    {/* Beds */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/projects/icon2.svg"     // <-- your bed image
                        alt="Bed Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.beds}
                    </div>

                    <span className="w-px h-6 bg-[#8B8E72]"></span>

                    {/* Area / Bath */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/projects/icon1.svg"    // <-- your area/bath image
                        alt="Area Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      {p.area}
                    </div>

                  </MotionWrapper>

                  <MotionWrapper>
                    <p className="text-[#7b7b7b] mb-6 lg:w-[90%] normal-text">
                      {p.desc}
                    </p>
                  </MotionWrapper>

                  <MotionWrapper className="md:w-[55%] xl:w-[46%] mt-[3.7rem] mb-20 lg:mb-0">
                    <RedButtonInsights
                      text="EXPLORE PROPERTY"
                      isWidthFull
                      textSize="text-[16px]"
                      padding="px-4 py-3"
                      paddingResponsive="md:px-5 py-4 lg:px-4 xl:px-8 lg:py-[1.1rem]"
                      link={p.route}
                    />
                  </MotionWrapper>
                </div>
              </>
            )}
          </div>
        ))}


        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-2 mt-12 md:mt-[6.3rem]"> */}

        {/* LEFT ARROW */}
        {/* <button
            className="px-3 py-1 text-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ArrowLeftIcon
              className="size-8"
              strokeWidth={0.8}
              stroke={currentPage === 1 ? "#7b7b7b" : "#000"}  // GRAY when disabled, BLACK when active
            />
          </button> */}

        {/* PAGE NUMBERS */}
        {/* {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-5 py-3 text-sm ${currentPage === i + 1
                ? "bg-[#ec1b24] text-white border border-[#ec1b24]"
                : "text-[#7b7b7b] border border-[#7b7b7b]"
                }`}
            >
              {i + 1}
            </button>
          ))} */}

        {/* RIGHT ARROW */}
        {/* <button
            className="px-3 py-1 text-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <ArrowRightIcon
              className="size-8"
              strokeWidth={0.8}
              stroke={currentPage === totalPages ? "#7b7b7b" : "#000"}  // GRAY when disabled, BLACK when active
            />
          </button> */}

        {/* </div> */}

      </div>
    </section>
  );
}
