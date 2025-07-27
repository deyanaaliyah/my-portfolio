import type { FC } from "react";
import type { ISplitView } from "../../interfaces";
import "./SplitView.scss";

export const SplitView: FC<ISplitView> = ({
  children,
  background,
  className,
}: ISplitView) => {
  return (
    <div
      className={`SplitView ${className}`}
      style={{ background: background }}
    >
      <div className="SplitView__content">{children}</div>
    </div>
  );
};
