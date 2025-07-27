import { useResolvedColor } from "../../hooks";
import type { IColor } from "../../interfaces";

export const Folds = ({ color = "default", className = "" }: IColor) => {
  const resolvedColor = useResolvedColor(color);
  return (
    <div className={className}>
      <svg
        width="633"
        height="633"
        viewBox="0 0 633 633"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="633" height="633"/>
        <path
          d="M121 156C121 153.791 122.791 152 125 152H185C187.761 152 190 154.239 190 157V633H121V156Z"
          fill={resolvedColor}
        />
        <rect x="282" width="69" height="633" fill={resolvedColor} />
        <path
          d="M443 0H512V275C512 277.761 509.761 280 507 280H448C445.239 280 443 277.761 443 275V0Z"
          fill={resolvedColor}
        />
      </svg>
    </div>
  );
};
