import React from "react";

export function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="lucide lucide-arrow-left-icon"
      {...props}
    >
      <path d="m8 5 -7 7 7 7" />
      <path d="M18 12h-16" />
    </svg>
  );
}
