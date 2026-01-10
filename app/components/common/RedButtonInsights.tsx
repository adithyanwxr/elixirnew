import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

interface BlurButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  isWidthFull?: boolean;
  textSize?: string;
  padding?: string;
  paddingResponsive?: string;
}

const RedButtonInsights = ({
  text,
  link,
  onClick,
  isWidthFull = false,
  textSize = "text-[18px]",
  padding = "px-6 py-[1.1rem]",
  paddingResponsive = "md:px-56 lg:py-3 lg:px-6 xl:py-4 xl:px-20",
}: BlurButtonProps) => {

  const classes = `
    relative overflow-hidden group
    flex items-center text-white elixir-red-bg backdrop-blur-sm font-light
    ${padding} ${paddingResponsive}
    ${isWidthFull ? "w-full justify-between" : "w-fit sm:gap-[25px] sm:justify-center"}
  `;

  const content = (
    <div className={classes}>

      {/*  Inner Border (no layout shift) */}
      <span className="pointer-events-none absolute inset-0 z-1 rounded-[inherit] border border-transparent group-hover:border-[#EE3E25] transition-colors duration-300" />

      {/*  Larger + Slower Ripple */}
      <span
        className="
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
    size-3 bg-white rounded-full 
    z-0 opacity-0 scale-0 
    group-hover:opacity-100 group-hover:scale-[70]
    transition-all duration-900 ease-out
  "
      />


      {/*  Content */}
      <p className={`relative z-10 font-inter ${textSize} group-hover:text-[#EE3E25] transition-colors duration-300`}>
        {text}
      </p>
      <ArrowRightIcon
        className="relative z-10 size-6 group-hover:text-[#EE3E25] transition-colors duration-300"
        strokeWidth={1}
      />
    </div>
  );

  const wrapperClass = isWidthFull ? "inline-block w-full" : "inline-block w-fit";

  return link ? (
    <Link href={link} className={wrapperClass}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={wrapperClass}>
      {content}
    </button>
  );
};

export default RedButtonInsights;
