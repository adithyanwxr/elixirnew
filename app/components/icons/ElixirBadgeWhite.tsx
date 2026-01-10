"use client";
import React from "react";

export default function RotatingTextLogoWhite() {
  const text = " THE ETHICAL BUILDER";
  const chars = text.split("");

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-full h-full">
        
        {/* ROTATING TEXT */}
        <div className="absolute inset-0 animate-spin-slow">
          {chars.map((char, i) => {
            const angle = (i * 360) / chars.length;

            return (
              <React.Fragment key={i}>
                {/* DESKTOP */}
                <span
                  className="absolute hidden xl:block text-white font-[390] font-inter text-[12px]"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-48px)   /* ⬅ REDUCED from 62px */
                    `,
                    transformOrigin: "center",
                  }}
                >
                  {char}
                </span>

                {/* MOBILE */}
                <span
                  className="absolute xl:hidden left-1/2 top-1/2 text-white font-[390] font-inter text-[12px]"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-42px)  /* ⬅ REDUCED from 56px */
                    `,
                    transformOrigin: "center",
                  }}
                >
                  {char}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* CENTER E */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="lg:text-[70px] xl:text-[85px] font-bold font-cormorant elixir-red">
            E
          </span>
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
}
