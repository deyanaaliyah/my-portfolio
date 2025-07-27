import type { IButton } from "../../interfaces";
import "./Button.scss";

export const Button = ({
  title,
  className,
  type = "button",
  arrow,
  onClick,
  disabled = false,
  color = "default",
  icon,
  borderColor,
}: IButton) => {
  const getColorClass = (arrow: boolean) => {
    let className = "";
    if (color !== "default") className += `Button--${color}`;
    if (arrow) {
      className += ` Arrow--${color}`;
    }
    if (borderColor) className += ` Button--border-${borderColor}`;
    return className;
  };

  const outerClassName = [
    className,
    arrow ? "Arrow" : "",
    disabled ? "Disabled" : "",
    getColorClass(arrow ?? false),
  ]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    if (icon) {
      return (
        <img
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="Button__icon"
        />
      );
    }

    if (arrow && title) {
      return (
        <>
          {title}
          <img
            src="/icons/arrow_right.svg"
            alt="arrow-right"
            className="Button__icon"
          />
        </>
      );
    }

    return title;
  };

  return (
    <button
      className={`Button ${outerClassName}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};
