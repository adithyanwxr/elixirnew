"use client";
import Legacy0fArchitecture from "@/app/components/allProjects/Legacy0fArchitecture";
import ProjectsListing from "@/app/components/allProjects/ProjectsListing";
import Hero from "@/app/components/common/Hero";
import Insights from "@/app/components/home/Insights";
import Testimonials from "@/app/components/home/Testimonials";
import React from "react";
import ReactLenis, { useLenis } from "lenis/react";

const PageClient = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log("Lenis initialized"); 
  });

  return (
    <>
    <ReactLenis root />
      <main>
        <Hero
          title="Discover Spaces Designed for Modern Life"
          description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
          titleWidth="lg:max-w-[700px] xl:max-w-[800px]"
          descWidth="lg:max-w-[660px] xl:max-w-[550px]"
          backgroundImage="/projects/hero.webp"
        />
        <Legacy0fArchitecture/>
       <ProjectsListing/>
       <Testimonials/>
       <Insights/>
      </main>
    </>
  );
};

export default PageClient;
