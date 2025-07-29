import type { FC } from "react";
import "../Labels.scss";

interface ICircleLetters {
  title: string;
}

export const CircleLetters: FC<ICircleLetters> = ({ title }) => {
  return (
    <div className="CircleLetters">
      {title.split("").map((letter, index) => {
        return (
          <span className="CircleLetters__letter" key={index}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};
