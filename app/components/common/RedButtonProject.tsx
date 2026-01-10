import React from "react";
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

const RedButtonProject = ({
    text,
    onClick,
    isWidthFull = false,
    textSize = "text-[18px]",
    padding = "px-6 py-[1.1rem]",                          
    paddingResponsive = "md:px-4 lg:py-3 lg:px-6 xl:py-4 xl:px-20", 
}: BlurButtonProps) => {
    return (
        <button
            className={`flex items-center text-white elixir-red-bg backdrop-blur-sm font-light
              ${padding} ${paddingResponsive}
              ${isWidthFull ? "w-full justify-between" : "w-fit sm:gap-6.25 sm:justify-center"}
            `}
            onClick={onClick}
        >
            <p className={`font-inter ${textSize}`}>{text}</p>
            <ArrowRightIcon className="size-6" strokeWidth={1} />
        </button>
    );
};

export default RedButtonProject;
