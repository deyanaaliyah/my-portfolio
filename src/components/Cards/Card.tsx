import type { FC } from "react";
import type { ICard } from "../../interfaces";
import "./Card.scss";

export const Card: FC<ICard> = ({
  children,
  background = "",
  className = "",
  hasPadding = true,
}: ICard) => {
  return (
    <div className={`Card ${className}`} style={{ background: background }}>
      <div className={`Card__content ${hasPadding ? 'Card__content__padding' : ''}`}>{children}</div>
    </div>
  );
};
