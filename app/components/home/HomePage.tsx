"use client"
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import FeaturedProjects from "./FeaturedProjects";
import HomeGallery from "./HomeGallery";

import Insights from "./Insights";

import { ReactLenis, useLenis } from "lenis/react";
import Testimonials from "./TestimonialsHome";

const HomePage = () => {
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
        <Hero />
        <AboutSection />
        <FeaturedProjects />
        <HomeGallery />
        <Testimonials/>
        <Insights />
      </main>
    </>
  );
};

export default HomePage;
