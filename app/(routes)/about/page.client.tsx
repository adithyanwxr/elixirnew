"use client";
import CTA from "@/app/components/about/CTA";
import DefinesVision from "@/app/components/about/DefinesVision";
import LegacyExcellence from "@/app/components/about/LegacyExcellence";
import OurProjects from "@/app/components/about/OurProjects";
import OurStoryBegins from "@/app/components/about/OurStoryBegins";
import WhoWeAre from "@/app/components/about/WhoWeAre";
import Hero from "@/app/components/common/Hero";
import ReactLenis, { useLenis } from "lenis/react";
import React from "react";

const PageClient = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log("Lenis initialized"); 
  });

  const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <>
      <ReactLenis root />
      <main className="w-full overflow-hidden">
        <Hero
          title="Crafting Homes That Inspire Modern Living"
          description="Where thoughtful design, precise execution, and meaningful architecture come together."
          titleWidth="lg:max-w-[650px] xl:max-w-[650px]"
          descWidth="lg:max-w-[660px] xl:max-w-[650px]"
          backgroundImage="/about/hero.webp"
        />
        <WhoWeAre />
        <OurStoryBegins />
        <DefinesVision />
        <LegacyExcellence />
        <CTA />
        <OurProjects />
      </main>
    </>
  );
};

export default PageClient;
