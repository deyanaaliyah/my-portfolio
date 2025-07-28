import { TechFieldset } from "../../SVG";
import { SplitView } from "../";
import "./Intro.scss";
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();

  const title = () => {
    return t("intro.title")
      .split(" ")
      .map((word, index) => {
        let className = "";

        switch (word.toLowerCase()) {
          case "deyan":
            className = "Intro__highlight1";
            break;
          case "polished":
            className = "Intro__highlight2";
            break;
          case "digital":
            className = "Intro__highlight2";
            break;
          case "digitale":
            className = "Intro__highlight2";
            break;
          case "produkter":
            className = "Intro__highlight2";
            break;
          case "products":
            className = "Intro__highlight2";
            break;
          default:
            className = "Intro__title";
        }

        return (
          <span key={index} className={className}>
            {word}{" "}
          </span>
        );
      });
  };

  return (
    <div className="Intro">
      <SplitView>
        <TechFieldset />
        <div className="Intro__title-container">
          <h1 className="Intro__title">{title()}</h1>
          <p className="Intro__tagline">{t("intro.subtitle")}</p>
        </div>
      </SplitView>
    </div>
  );
};
