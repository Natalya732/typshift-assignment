import { SVGProps } from "react";

export const TypeShiftLogo = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 36.36 36"
      fill="currentColor"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-auto h-[16px]"
      {...props}
    >
      <path d="M18.19,0l18.17,23.51H.02C-.69,24.35,18.19,0,18.19,0Z"></path>
      <rect x=".02" y="26.45" width="36.34" height="9.55"></rect>
    </svg>
  );
};
