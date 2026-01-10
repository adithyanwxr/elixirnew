"use client";

import Link from "next/link";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

interface RedButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  isWidthFull?: boolean;
}

const RedButton = ({ text, link, onClick, isWidthFull = false }: RedButtonProps) => {
  const buttonContent = (
    <div
      className={`
        relative overflow-hidden group hover:ring-1 hover:ring-[#EE3E25] hover:ring-inset
 transition-colors duration-500
        ${isWidthFull
          ? "w-full justify-between"
          : "gap-40 sm:gap-7.5 lg:gap-6.25 w-full justify-between sm:w-fit sm:justify-center"
        } 
        flex text-white elixir-red-bg items-center backdrop-blur-sm 
        px-6 py-[1.1rem] lg:py-3 lg:px-8.75 xl:py-4 xl:px-8.25
      `}
    >
      {/* Ripple animation layer */}
      {/* Inner Border Layer */}
      <span className="pointer-events-none absolute inset-0 z-1 rounded-[inherit] border border-transparent group-hover:border-[#EE3E25] transition-colors duration-300" />

      {/* Ripple animation layer */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full z-0 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-[40] transition-all duration-700 ease-in-out" />

      {/* Content */}
      <p className="relative z-10 red-btn-text font-inter group-hover:text-[#EE3E25]! transition-colors duration-300">
        {text}
      </p>
      <ArrowRightIcon className="relative z-10 size-6 group-hover:text-[#EE3E25] transition-colors duration-300" strokeWidth={1} />
    </div>
  );

  if (link) {
    return (
      <Link href={link} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default RedButton;
