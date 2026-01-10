import React from "react";

export function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
      {...props}>
      <path d="M7 7h10v10" />
      <path d="M5 19 17 7" />
    </svg>
  );
}
