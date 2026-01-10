import { ArrowRight } from "lucide-react";
import React from "react";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

interface NonBlurButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
}

const NonBlurButton = ({ text, link, onClick }: NonBlurButtonProps) => {
  return (
    <button
      className="border border-white flex text-white items-center justify-center gap-[30px] px-5 py-2.5 lg:py-3 lg:px-[35px] xl:py-3.5 xl:px-[37px]"
      onClick={onClick}>
      <p className="hero-btn-text font-light font-inter ">{text}</p>
      <ArrowRightIcon className="size-3.5" strokeWidth={1.8} />
    </button>
  );
};

export default NonBlurButton;
