"use client";
import LegalPolicy from "@/app/components/legal-and-policy/LegalPolicy";
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
       <LegalPolicy/>
      </main>
    </>
  );
};

export default PageClient;
