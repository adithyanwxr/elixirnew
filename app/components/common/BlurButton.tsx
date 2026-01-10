"use client";

import Link from "next/link";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

interface BlurButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  paddingX?: string; // NEW
  paddingY?: string; // NEW
}

const BlurButton = ({ text, link, onClick, paddingX = "px-5 lg:px-[35px] xl:px-[37px]", paddingY = "py-3.5 lg:py-3 xl:py-3.5" }: BlurButtonProps) => {

  const content = (
    <div
      className={`
        w-full md:w-62.5 lg:w-75 xl:w-82.5
        border-[0.3px] border-white 
        flex items-center justify-between md:justify-center 
        gap-3.75 md:gap-7.5 
        backdrop-blur-sm
        text-white
        ${paddingX} ${paddingY}     /* ← APPLY CUSTOM PADDING */
      `}
    >
      <p className="hero-btn-text font-light font-inter">{text}</p>
      <ArrowRightIcon className="size-3.5" strokeWidth={1.8} />
    </div>
  );


  // If link exists → wrap with <Link>
  if (link) {
    return (
      <Link
        href={link}
        className="block w-full md:w-62.5"
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  // Otherwise → normal button
  return <button onClick={onClick}>{content}</button>;
};

export default BlurButton;
