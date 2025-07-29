import { type FC } from "react";
import "../Labels.scss";

interface IOctagonLabel {
  subtitle: string;
  title: string;
  highlight: string;
  location: string;
}

export const Octagon: FC<IOctagonLabel> = ({
  subtitle,
  title,
  highlight,
  location,
}) => {
  return (
    <div className="Labels__Octagon">
      <div className="Labels__Octagon__container">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 353 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="55"
            fill="var(--default)"
            fontFamily="Chewy"
            dominantBaseline="middle"
            textAnchor="middle"
            className="Labels__Octagon__subtitle"
          >
            {subtitle}
          </text>
          <text
            x="50%"
            y="110"
            fill="var(--default)"
            fontFamily="Chewy"
            fontWeight="800"
            dominantBaseline="middle"
            textAnchor="middle"
            className="Labels__Octagon__title"
          >
            {title}
          </text>
          <text
            x="50%"
            y="145"
            fill="var(--default)"
            fontFamily="Chewy"
            dominantBaseline="middle"
            textAnchor="middle"
            className="Labels__Octagon__highlight"
          >
            {highlight}
          </text>
          <text
            x="50%"
            y="200"
            fill="var(--default)"
            fontFamily="Chewy"
            dominantBaseline="middle"
            textAnchor="middle"
            className="Labels__Octagon__location"
          >
            {location}
          </text>
          <path
            d="M219.715 20.9248L220.287 21.1523L220.902 21.1709L270.674 22.6562L293.089 52.5762L293.601 53.2607L294.371 53.6318L334.125 72.7734L329.403 105.169L329.225 106.396L329.857 107.461L347.684 137.481L317.917 163.082L317.11 163.776L316.826 164.802L307.826 197.301L261.113 208.186L260.431 208.345L259.861 208.755L225.646 233.404L177.08 225.238L176.5 225.141L175.92 225.238L127.353 233.404L93.1377 208.755L92.5693 208.345L91.8867 208.186L45.1729 197.301L36.1738 164.802L35.8896 163.776L35.083 163.082L5.31543 137.481L23.1426 107.461L23.7754 106.396L23.5967 105.169L18.874 72.7734L58.6289 53.6318L59.3994 53.2607L59.9111 52.5762L82.3252 22.6562L132.098 21.1709L132.713 21.1523L133.285 20.9248L176.5 3.76562L219.715 20.9248Z"
            stroke="var(--default)"
            strokeWidth="7"
          />
          <path
            d="M218 170C218 170 200.351 178 174.679 178C149.007 178 132 170 132 170"
            stroke="var(--default)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M218 86C218 86 200.351 78 174.679 78C149.007 78 132 86 132 86"
            stroke="var(--default)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
