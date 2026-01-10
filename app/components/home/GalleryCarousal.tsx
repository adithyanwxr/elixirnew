"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import MotionWrapper from "../common/MotionWrapper";

const GalleryCarousal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  // RESPONSIVE WIDTH FIX
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const CENTER_WIDTH = isMobile ? 260 : 610;
  const CENTER_HEIGHT = isMobile ? 260 : 595;

  const SIDE_WIDTH = isMobile ? 200 : 550;
  const SIDE_HEIGHT = isMobile ? 200 : 550;

  const GAP = isMobile ? 8 : 10;


  const carouselRef = useRef<HTMLDivElement | null>(null);



  const images: string[] = [
    "/home/g1.webp",
    "/home/g2.webp",
    "/home/g3.webp",
    "/home/Anfield.webp",

    "/projects/Elixir-Manavath-Heights1.webp",
    "/home/Elixir-Super-Luxury-Villas11.webp",
    "/home/Orchid1.webp",


  ];


  // Center initial
  useEffect(() => {
    scrollToIndex(1);
  }, []);

  // SNAP BASED ON REAL ITEM WIDTHS
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;
      const scrollX = container.scrollLeft;

      const itemCenters: number[] = [];
      let acc = 0;

      images.forEach((_, i) => {
        const isCenter = i === currentIndex;

        const width = isCenter ? CENTER_WIDTH : SIDE_WIDTH;
        const centerX = acc + width / 2;

        itemCenters.push(centerX);
        acc += width + GAP;
      });

      let closest = 0;
      let minDist = Infinity;

      itemCenters.forEach((center, i) => {
        const dist = Math.abs(center - (scrollX + container.offsetWidth / 2));
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setCurrentIndex(closest);
    };

    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  // CENTER ITEM TO PERFECT MIDDLE
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    let offset = 0;

    for (let i = 0; i < index; i++) {
      offset += SIDE_WIDTH + GAP;
    }

    const targetWidth = CENTER_WIDTH;
    const targetScroll = offset - (container.offsetWidth - targetWidth) / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // DRAGGING
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <MotionWrapper className="w-full flex items-center justify-center mt-5 pb-28 lg:pb-20 xl:pb-[197px]">
      <div className="w-full">
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory xl:h-[600px] "
        >
          {images.map((img, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={index}
                className="shrink-0 transition-all duration-500 ease-out snap-center"
                style={{
                  width: isCenter ? CENTER_WIDTH : SIDE_WIDTH,
                  height: isCenter ? CENTER_HEIGHT : SIDE_HEIGHT,
                  transform: isCenter ? "scale(1)" : "scale(0.85)",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    src={img}
                    alt="Gallery Image"
                    fill
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </MotionWrapper>
  );
};

export default GalleryCarousal;
