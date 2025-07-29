import type { FC } from "react";
import "../Labels.scss";

interface ICircleText {
  title: string;
  fontSize?: string;
}

export const CircleText: FC<ICircleText> = ({ title, fontSize }) => {
  return (
    <div className="CircleText">
      {title.split("").map((letter, index) => (
        <span
          className={`CircleText__char${index}`}
          key={index}
          style={{
            fontSize: fontSize ? fontSize : "17px",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
