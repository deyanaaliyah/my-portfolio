import { useResolvedColor } from "../../hooks";
import type { IColor } from "../../interfaces";

export const Star = ({ color = "default", className = "" }: IColor) => {
  const resolvedColor = useResolvedColor(color);

  return (
    <div className={className}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C12 0 12 8 14.2728 10.7272C16.5456 13.4544 24 13 24 13C24 13 16 13 14.2728 15.2728C12.5456 17.5456 12 25 12 25C12 25 11.0398 17 9.72721 15.2728C8.41462 13.5456 0 13 0 13C0 13 6.96877 13.4857 9.72721 10.7272C12.4857 7.96877 12 0 12 0Z"
          fill={resolvedColor}
        />
      </svg>
    </div>
  );
};
