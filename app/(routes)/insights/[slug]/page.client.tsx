"use client";


import BlogDetailsPage from "@/app/components/individual-insight/BlogDetailsPage";
import RelatedArticles from "@/app/components/individual-insight/RelatedArticles";
import ReactLenis, { useLenis } from "lenis/react";

export default function PageClient({ slug }: { slug: string }) {
   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log("Lenis initialized"); 
  });

  return (
     <><ReactLenis root />
    <main>
      <BlogDetailsPage slug={slug} />
      <RelatedArticles currentSlug={slug} />
    </main>
    </>
  );
}
