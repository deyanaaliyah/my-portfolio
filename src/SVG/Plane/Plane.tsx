import { useResolvedColor } from "../../hooks";
import type { IColor } from "../../interfaces";

export const Plane = ({ color = "default", className = "" }: IColor) => {
  const resolvedColor = useResolvedColor(color);
  return (
    <div className={className}>
      <svg
        width="633"
        height="160"
        viewBox="0 0 633 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M373.899 103.022C373.899 134.49 348.2 160 316.5 160C284.799 160 259.101 134.49 259.101 103.022C259.101 71.5533 284.799 46.0432 316.5 46.0432C348.2 46.0432 373.899 71.5533 373.899 103.022Z"
          fill={resolvedColor}
        />
        <path
          d="M265.479 128.345C265.479 128.345 6.89325 102.446 5.73367 98.9929C4.5741 95.5397 1.67517 86.331 1.67517 86.331H0.515594C0.515594 86.331 -0.643982 107.05 0.515594 109.353C1.67517 111.655 315.92 160 315.92 160L265.479 128.345Z"
          fill={resolvedColor}
        />
        <path
          d="M367.522 128.345C367.522 128.345 626.107 102.446 627.267 98.9928C628.426 95.5396 631.325 86.3309 631.325 86.3309H632.485C632.485 86.3309 633.644 107.05 632.485 109.353C631.325 111.655 317.08 160 317.08 160L367.522 128.345Z"
          fill={resolvedColor}
        />
        <path
          d="M314.761 0H320.558L325.197 18.9928V48.3453H308.963V18.9928L314.761 0Z"
          fill={resolvedColor}
        />
        <path
          d="M285.771 14.964L316.5 13.8129L347.229 14.964V19.5683L316.5 18.4172L285.771 19.5683V17.2662V14.964Z"
          fill={resolvedColor}
        />
      </svg>
    </div>
  );
};
