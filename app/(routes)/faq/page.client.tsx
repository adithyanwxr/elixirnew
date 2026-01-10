"use client";

import FAQPage from "@/app/components/faq/FAQSection";
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
       <FAQPage/>
      </main>
    </>
  );
};

export default PageClient;
