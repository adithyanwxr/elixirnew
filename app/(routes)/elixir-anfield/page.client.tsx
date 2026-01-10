"use client";
import BankingPartners from "@/app/components/elixir-anfield/BankingPartners";
import ProjectOverview from "@/app/components/elixir-anfield/ProjectOverview";
import React from "react";

import FloorPlan from "@/app/components/elixir-anfield/FloorPlan";
import AmenitiesSection from "@/app/components/elixir-anfield/Amenities";
import LocationSection from "@/app/components/elixir-anfield/LocationSection";
import ContactSection from "@/app/components/project-detailed-page/ContactSection";
import ProjectHero from "@/app/components/elixir-anfield/ProjectHero";
import GallerySection from "@/app/components/elixir-anfield/Gallery";
import ReactLenis from "lenis/react";

const PageClient = () => {
  return (
    <>
      <ReactLenis root />
      <main>
        <ProjectHero
          title="Elixir Anfield"
          description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
          showButton
          buttonText="MORE DETAILS"
          // secondaryButtonText="VISIT SITE"
          backgroundImage="/projects/Elixir-Anfeild.webp"

          /* ✅ CONTROL BUTTON PADDING HERE */
          primaryPaddingX="px-6 md:px-10 xl:px-14"
          primaryPaddingY="py-2.5 md:py-3"
          // secondaryPaddingX="px-10 md:px-12 xl:px-14"
          // secondaryPaddingY="py-2.5 md:py-3"
        />

        <BankingPartners />
        <ProjectOverview />
        {/* <GallerySection /> */}
        <FloorPlan />
        <AmenitiesSection />
        <LocationSection />
        <ContactSection />
      </main>
    </>
  );
};

export default PageClient;
