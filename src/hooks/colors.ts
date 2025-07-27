import { useEffect, useState } from "react";
import { getCurrentTheme } from "./theme";

const darkColorMap: Record<string, string> = {
  charcoal: "#222",
  black: "#333",
  white: "#f3f3f3",
  whitest: "#ffffff",
  grey: "#999999",
  watermelon: "#fd555a",
  red: "#e83426",
  "lemon-yellow": "#ffe631",
  amber: "#ffbe00",
  "pumpkin-orange": "#ff9733",
  "sky-blue": "#10a7ec",
  "medium-turquoise": "#46c0ac",
  emerald: "#1eb856",
  creme: "#f9eddf",
};

const lightColorMap: Record<string, string> = {
  charcoal: "#ffffff",
  black: "#f3f3f3",
  white: "#333",
  whitest: "#222",
  grey: "#999999",
  watermelon: "#fd555a",
  red: "#e83426",
  "lemon-yellow": "#ffe631",
  amber: "#ffbe00",
  "pumpkin-orange": "#ff9733",
  "sky-blue": "#10a7ec",
  "medium-turquoise": "#46c0ac",
  emerald: "#1eb856",
  creme: "#999999",
};

const returnColorMap = () => {
  const theme = getCurrentTheme();

  switch (theme) {
    case "dark":
      return darkColorMap;
    case "light":
      return lightColorMap;
    default:
      return darkColorMap;
  }
};

export function getColor(color: string): string {
  const colorMap = returnColorMap();
  return colorMap[color] || color;
}

export const useResolvedColor = (colorName: string) => {
  const [resolvedColor, setResolvedColor] = useState(getColor(colorName));

  useEffect(() => {
    const updateColor = () => {
      setResolvedColor(getColor(colorName));
    };

    updateColor();

    window.addEventListener("storage", updateColor);
    window.addEventListener("theme-change", updateColor);

    return () => {
      window.removeEventListener("storage", updateColor);
      window.removeEventListener("theme-change", updateColor);
    };
  }, [colorName]);

  return resolvedColor;
};