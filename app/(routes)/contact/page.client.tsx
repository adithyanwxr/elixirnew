"use client";
import React from "react";
import Hero from "@/app/components/common/Hero";
import ContactSection from "@/app/components/contact/Contact";
import Support from "@/app/components/contact/Support";
import ReactLenis, { useLenis } from "lenis/react";


const PageClient = () => {
 const lenis = useLenis((lenis) => {
    // called every scroll
    console.log("Lenis initialized"); 
  });

  return (
    <> <ReactLenis root />
    
      <main>
       <Hero
          title="We’re Here to Assist You"
          description="Whether you’re exploring a project, planning a visit, or need expert guidance, our team is ready to help you with every detail."
          titleWidth="lg:max-w-[500px] xl:max-w-[550px]"
          descWidth="lg:max-w-[660px] xl:max-w-[580px]"
          backgroundImage="/contact/hero.webp"
        />
        <ContactSection/>
        <Support/>
      </main>
      
    </>
  );
};

export default PageClient;
