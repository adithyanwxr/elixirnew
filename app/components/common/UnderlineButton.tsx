"use client";

import Link from "next/link";
import { ArrowUpRight } from "../icons/ArrowUpRight";

interface UnderlineButtonProps {
  text?: string;
  link?: string;       // <— ADD THIS
  onClick?: () => void;
}

const UnderlineButton = ({ text, link, onClick }: UnderlineButtonProps) => {
  const ButtonContent = (
    <button
      className="
        border-b border-white 
        w-full sm:w-fit 
        flex text-white 
        items-center justify-between 
        gap-7.75 px-5 py-2.5 
        lg:py-3 lg:px-0.75 
        xl:py-1.5 xl:px-0.75
      "
      onClick={onClick}
    >
      <p className="hero-btn-text font-normal font-inter">{text}</p>
      <ArrowUpRight className="size-6.25" strokeWidth={1} />
    </button>
  );

  // If a link is provided → wrap button inside <Link>
  return link ? <Link href={link}>{ButtonContent}</Link> : ButtonContent;
};

export default UnderlineButton;
