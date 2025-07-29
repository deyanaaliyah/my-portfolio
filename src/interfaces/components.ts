// === TYPE DEFINITIONS === //
export type StyleObject = React.CSSProperties;
import type { ReactNode } from "react";

// === NAVIGATION ===
export interface INavigationItem {
  title: string;
  route: string;
}

// === VIEWS ===
export interface ISplitView {
  children: ReactNode;
  background?: string;
  className?: string;
}

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ICard {
  children: ReactNode;
  background?: string;
  className?: string;
  hasPadding?: boolean;
}

export interface IPreset {
  onClick: () => void;
}

// === BUTTON ===
export interface IButton {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  arrow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  color?: "default" | "primary" | "black" | "grey" | "white" | "reset";
  borderColor?: "black";
  icon?: IImage;
}

// === IMAGERY ===
export interface IImage {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: StyleObject;
}

export interface IColor {
  color?:
    | "default"
    | "var(--white)"
    | "charcoal"
    | "black"
    | "white"
    | "whitest"
    | "grey"
    | "watermelon"
    | "red"
    | "lemon-yellow"
    | "amber"
    | "pumpkin-orange"
    | "sky-blue"
    | "medium-turqoise"
    | "emerald"
    | "creme";
  className?: string;
}

// === HOBBY ===
export interface IHobby {
  title: string;
  description: string;
  icon: "Aviation" | "Music" | "Hiking";
}

// === RESUME ===
export interface IJob {
  startYear: string;
  endYear?: string;
  title: string;
  company: string;
  description?: string;
  technologies: string[];
}

// === CERTIFICATES ===
export interface ICertificate {
  name: string;
  school: string;
}
[];

// === i18n ===
export interface ILanguage {
  t: (key: string) => string;
}

// === Projects ===
export interface IProject {
  title: string;
  description: string;
  img?: IImage;
  technologies?: string[];
  year: number;
  path?: string;
  isPersonalProject?: boolean;
}
