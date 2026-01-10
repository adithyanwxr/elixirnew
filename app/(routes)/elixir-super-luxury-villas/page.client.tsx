"use client";
import AmenitiesSection from "@/app/components/project-detailed-page/AmenitiesSection";
import ProjectOverview from "@/app/components/project-detailed-page/ProjectOverview";
import React from "react";
import Hero from "@/app/components/common/Hero";
import LocationSection from "@/app/components/project-detailed-page/LocationSection";
import Testimonials from "@/app/components/home/Testimonials";
import ContactSection from "@/app/components/project-detailed-page/ContactSection01";
import DeliveryHighlights from "@/app/components/project-detailed-page/DeliveryHighlights";
import ReactLenis, { useLenis } from "lenis/react";
import StateAwardSection from "@/app/components/project-detailed-page/StateAwardSection";

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
          title="Elixir Super Luxury Villas"
          description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
          titleWidth=""
          descWidth="lg:max-w-[660px] xl:max-w-[550px]"
          showButton
          buttonText="MORE DETAILS"
          backgroundImage="/home/Elixir-Super-Luxury-Villas11.webp"
        />
        <ProjectOverview />
        <StateAwardSection/>
        <DeliveryHighlights />
        <AmenitiesSection />
        <LocationSection />
        <Testimonials />
        <ContactSection />
      </main>
    </>
  );
};

export default PageClient;
