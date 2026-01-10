"use client";
import InsideElixir from "@/app/components/gallery/InsideElixir";
import React from "react";
import Hero from "@/app/components/common/Hero";
import GallerySection from "@/app/components/gallery/ProjectGallery";
import { projectGalleries } from "@/app/data/projectData";
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
          title="Experience Every Space, One Project at a Time"
          description="Step into a curated visual journey through our finest developments. Explore each project’s architecture, interiors, lifestyle amenities, and the essence of the living experience."
          titleWidth="md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px]"
          descWidth="md:max-w-[700px] xl:max-w-[760px]"
          backgroundImage="/gallery/hero.webp"
        />
        <InsideElixir />
        {projectGalleries.map((project) => (
          <GallerySection key={project.id} project={project} />
        ))}
      </main>
    </>
  );
};

export default PageClient;
