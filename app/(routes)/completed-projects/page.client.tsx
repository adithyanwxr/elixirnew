"use client";

import { useState } from "react";
import ProjectShowcase from "@/app/components/completedProjects/ProjectShowcase";
import { projects } from "@/app/data/projects";
import Overview from "@/app/components/completedProjects/ProudlyCompleted";
import Hero from "@/app/components/common/Hero";
import ReactLenis, { useLenis } from "lenis/react";

const PageClient = () => {
   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log("Lenis initialized"); 
  });
  
  const itemsPerPage = 4;
  // const totalPages = Math.ceil(projects.length / itemsPerPage);

  const [currentPage] = useState(1);

  const start = (currentPage - 1) * itemsPerPage;
  const visibleProjects = projects.slice(start, start + itemsPerPage);

  return (
    <>
     <ReactLenis root />
    <main>
       <Hero
          title="Completed Projects"
          description="Thoughtfully crafted environments that blend comfort, design, and everyday functionality."
          titleWidth="lg:max-w-[700px] xl:max-w-[750px]"
          descWidth="lg:max-w-[460px] xl:max-w-[550px]"
          backgroundImage="/completed-projects/hero.webp"
        />
<Overview/>
      {/* PROJECT LIST */}
      {visibleProjects.map((project, index) => (
        <ProjectShowcase
          key={project.id}
          project={project}
          index={start + index}
        />
      ))}

      {/* PAGINATION */}
     
      
    </main>
    </>
  );
};

export default PageClient;
