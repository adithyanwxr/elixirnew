"use client";
import TrustedSection from "@/app/components/testimonial/TrustedSection";
import React from "react";
import Hero from "@/app/components/common/Hero";
import TestimonialGrid from "@/app/components/testimonial/TestimonialGrid";
import ReadyToFindHome from "@/app/components/testimonial/ReadyToFindHome";
import ReactLenis, { useLenis } from "lenis/react";

const PageClient = () => {
 const lenis = useLenis((lenis) => {
    
    console.log("Lenis initialized"); 
  });

  return (
    <>
    <ReactLenis root />
      <main>
         <Hero
          title="What Our Home Owners Say"
          description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
          titleWidth="md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px]"
          descWidth="md:max-w-[450px] xl:max-w-[520px]"
          backgroundImage="/testimonial/hero.webp"
        />
       <TrustedSection/>
       <TestimonialGrid/>
       <ReadyToFindHome/>
      </main>
    </>
  );
};

export default PageClient;
