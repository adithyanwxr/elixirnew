"use client";
import AmenitiesSection from "@/app/components/orchid/AmenitiesSection";
import ProjectOverview from "@/app/components/orchid/ProjectOverview";
import React from "react";
import Hero from "@/app/components/common/Hero";
import LocationSection from "@/app/components/orchid/LocationSection";
import Testimonials from "@/app/components/home/Testimonials";
import ContactSection from "@/app/components/project-detailed-page/ContactSection01";
import DeliveryHighlights from "@/app/components/orchid/DeliveryHighlights";
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
                    title="The Orchid"
                    description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
                    titleWidth=""
                    descWidth="lg:max-w-[660px] xl:max-w-[550px]"
                    showButton
                    buttonText="MORE DETAILS"
                    backgroundImage="/home/Orchid1.webp"
                />
                <ProjectOverview />
                {/* <GallerySection /> */}
                <DeliveryHighlights/>
                <AmenitiesSection />
                <LocationSection />
                <Testimonials />
                <ContactSection />
            </main>
        </>
    );
};

export default PageClient;
