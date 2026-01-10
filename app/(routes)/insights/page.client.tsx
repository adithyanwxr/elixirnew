"use client";
import Hero from "@/app/components/common/Hero";
import BlogWithCTA from "@/app/components/insights/BlogWithCTA";
import FeaturedProjects from "@/app/components/insights/FeaturedInsights";
import TrendingInsights from "@/app/components/insights/TrendingInsights";
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
          title="Market Insights & Stories"
          description="A curated collection of articles offering expert perspectives, market updates, and meaningful insights shaped by years of experience in real estate development and residential innovation."
          titleWidth="lg:max-w-[500px] xl:max-w-[950px]"
          descWidth="lg:max-w-[660px] xl:max-w-[850px] 2xl:max-w-[800px]"
          backgroundImage="/"
        />
        <FeaturedProjects />
        <BlogWithCTA />
        <TrendingInsights />
      </main>
    </>
  );
};

export default PageClient;
