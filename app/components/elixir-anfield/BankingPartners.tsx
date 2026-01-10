"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const partners = [
  { src: "/projects/sbi.svg", alt: "SBI" },
  { src: "/projects/canara.svg", alt: "Canara Bank" },
  { src: "/projects/lic.svg", alt: "LIC" },
  { src: "/projects/baroda.svg", alt: "Bank of Baroda" },
  { src: "/projects/maharashtra.svg", alt: "Bank of Maharashtra" },
];

export default function BankingPartners() {
  return (
    <section className="w-full bg-[#1b1a1f] lg:pt-10 lg:pb-[3.8rem] py-20">
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto">

        {/* Title */}
        <MotionWrapper>
          <p className="text-[#A3A3A3] text-[18px] md:text-[22px] mb-[3.7rem] font-inter">
            Accredited by Distinguished Banking Partners
          </p>
        </MotionWrapper>

        {/* MOBILE AUTO-SCROLL */}
        {/* MOBILE AUTO-SCROLL */}
<div className="block md:hidden overflow-hidden">
  <div className="flex w-max animate-marquee gap-10">
    {partners.concat(partners).map((item, idx) => (
      <div
        key={idx}
        className="shrink-0 w-32.5 flex justify-center items-center"
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={100}
          height={40}
          className="object-contain opacity-90"
        />
      </div>
    ))}
  </div>
</div>


        {/* DESKTOP/TABLET STATIC GRID */}
        <MotionWrapper className="hidden md:grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-wrap justify-between items-center gap-16 md:gap-10 lg:gap-0 mt-10 md:mt-0">
          {partners.map((item, idx) => (
            <div key={idx} className="flex justify-center items-center w-full lg:w-auto">
              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={50}
                className="object-contain max-h-10 opacity-90"
              />
            </div>
          ))}
        </MotionWrapper>
      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
         100% { transform: translateX(-100%); }

        }
      `}</style>
    </section>
  );
}
