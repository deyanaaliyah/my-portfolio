import { Link, useLocation } from "react-router-dom";
import { useLocalizedItems } from "../../hooks";
import "./Footer.scss";
import { useEffect, useRef, useState } from "react";
import type { INavigationItem } from "../../interfaces";
import { FooterLogo } from "../../SVG";

export const Footer = () => {
  const navItems = useLocalizedItems("navigation") as INavigationItem[];
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll("a");
    const activeIndex = navItems.findIndex(
      (item) => location.pathname === item.route
    );

    if (activeIndex >= 0 && links[activeIndex]) {
      const activeLink = links[activeIndex] as HTMLElement;
      const newLeft = activeLink.offsetLeft;
      const newWidth = activeLink.offsetWidth;

      setHighlightStyle((prev) => {
        if (prev.left === newLeft && prev.width === newWidth) {
          return prev;
        }
        return { left: newLeft, width: newWidth };
      });
    } else {
      setHighlightStyle((prev) => {
        if (prev.left === 0 && prev.width === 0) return prev;
        return { left: 0, width: 0 };
      });
    }
  }, [location.pathname]);

  return (
    <div className="Footer">
      <div className="Footer__connect">
        <p>Connect</p>
        <a href="https://www.linkedin.com/in/dejan1/">LinkedIn</a>
        <a href="https://github.com/deyanaaliyah">Github</a>
      </div>
      <div className="Footer__logo">
        <FooterLogo color="white" />

        <p>website by deyanaaliyah</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
      <div className="Footer__navigation" ref={containerRef}>
        <span
          className="Footer__navigation__highlight"
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width,
            opacity: highlightStyle.width > 0 ? 1 : 0,
          }}
        />

        {navItems.map((item: INavigationItem, index: number) => (
          <Link
            key={index}
            to={item.route}
            className={
              location.pathname === item.route
                ? "Footer__navigation__active"
                : ""
            }
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
