import { Deyan, Globe } from "..";
import "./TechFieldset.scss";

export const TechFieldset = () => {
  const top = [
    "react",
    "vue",
    "vite",
    "scss",
    "html",
    "css",
    "bootstrap",
    "mui",
    "golang",
  ];
  const right = [
    "gorm",
    "gin",
    ".net",
    "blazor",
    "entity",
    "framework",
    "swift",
    "cocoapod",
  ];
  const bottom = [
    "swiftui",
    "sqlite",
    "firebase",
    "sql",
    "ms sql",
    "data modelling",
    "etl",
  ];
  const left = [
    "restful api",
    "middleware",
    "jwt",
    "authentication",
    "json",
    "signalr",
  ];

  return (
    <div className="TechFieldset">
      <div className="TechFieldset__side TechFieldset__side--top">
        {top.map((item, index) => (
          <span key={`top-${index}`}>{item}</span>
        ))}
      </div>
      <div className="TechFieldset__side TechFieldset__side--right">
        {right.map((item, index) => (
          <span key={`right-${index}`}>{item}</span>
        ))}
      </div>
      <div className="TechFieldset__side TechFieldset__side--bottom">
        {bottom.map((item, index) => (
          <span key={`bottom-${index}`}>{item}</span>
        ))}
      </div>
      <div className="TechFieldset__side TechFieldset__side--left">
        {left.map((item, index) => (
          <span key={`left-${index}`}>{item}</span>
        ))}
      </div>

      <div className="TechFieldset__image-container">
        <Globe color="grey" className="TechFieldset__svg TechFieldset__svg__globe" />
        <div className="TechFieldset__text">
          <div className="TechFieldset__text-wrapper">
            <Deyan color="var(--white)" />
            <Deyan color="var(--white)" />
            <Deyan color="var(--white)" />
          </div>
        </div>
      </div>
    </div>
  );
};
