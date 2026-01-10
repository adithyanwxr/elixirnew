"use client";
import React from "react";

const ElixirBadgeLight = () => {
  const text = " THE ETHICAL BUILDER";
  const chars = text.split("");

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-full h-full">
        {/* Circular text */}
        <div className="absolute z-15 inset-0 animate-spin-slow">
          {chars.map((char, i) => {
            const angle = (i * 360) / chars.length;
            return (
              // For XL AND ABOVE
              <>
                <span
                  key={i}
                  className="absolute hidden xl:block left-1/2 top-1/2 text-white font-[390] font-inter text-[11px]"
                  style={{
                    transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(-48px)
                  `,
                    transformOrigin: "center",
                  }}>
                  {char}
                </span>
                {/* For MOBILE */}
                <span
                  key={i}
                  className="absolute xl:hidden left-1/2 top-1/2 text-white font-[390] font-inter text-[14px]"
                  style={{
                    transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(-56px)
                  `,
                    transformOrigin: "center",
                  }}>
                  {char}
                </span>
              </>
            );
          })}
        </div>

        {/* Center E with white background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <span className="lg:text-[100px] xl:text-[88px] font-bold font-cormorant elixir-red">
              E
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ElixirBadgeLight;
