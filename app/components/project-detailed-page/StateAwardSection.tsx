"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function StateAwardSection() {
  return (
    <section className="w-full bg-[#0f0f14] py-28">
      <div className="w-[95%] sm:w-[90%] xl:w-[86%] max-w-360 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="">

            {/* EYEBROW TEXT */}
            <p className="taghead-text text-[#8b8e72] font-inter xl:mt-0.5 ">
             Premium Builder of the Year Award
            </p>

            {/* HEADING */}
            <h2
              className={` font-cormorant section-title text-white mt-4 lg:mt-5.75 xl:mt-5.75 `}
            >
              Recognised at the State 
              Level for Excellence
            </h2>

            {/* DESCRIPTION */}
            <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6">
             Elixir Homes is proud to be recognised as Premium Builder of the Year by Hibi Eden, MP Kochi, and Hon’ble Minister P Prasad, Government of Kerala.
            </p>

            <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6">
              The award, received by our Managing Director Tito Varghese Akkara, reaffirms our commitment to excellence in premium residential development.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-end">
            <div className="relative w-105 h-130 xl:w-115 xl:h-140">
              <Image
                src="/projects/Gallery.webp"
                alt="Premium Builder Award"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
