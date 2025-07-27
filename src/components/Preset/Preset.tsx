import { useEffect, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import "./Preset.scss";
import type { IPreset } from "../../interfaces";
import { getCurrentTheme, setLanguage } from "../../hooks";

export const Preset: FC<IPreset> = ({ onClick }) => {
  const [theme, setTheme] = useState("light");
  const [activePanel, setActivePanel] = useState("system");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (nextTheme: string) => {
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  const changeLanguage = (lang: string) => {
    setLanguage();
    i18n.changeLanguage(lang);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    let formatted = new Intl.DateTimeFormat(i18n.language, options).format(
      date
    );

    if (i18n.language === "da") {
      const replacements: Record<string, string> = {
        "man.": "man",
        "tir.": "tir",
        "ons.": "ons",
        "tor.": "tor",
        "fre.": "fre",
        "lør.": "lør",
        "søn.": "søn",
      };

      Object.entries(replacements).forEach(([wrong, correct]) => {
        formatted = formatted.replace(wrong, correct);
      });
    }

    return formatted.replace(",", "");
  };

  const systemPanel = [
    <p key="react">React.js + vite</p>,
    <p key="theme">{theme === "dark" ? "Dark mode" : "Light mode"}</p>,
    <p key="date">
      {t("preset.today", {
        object: formatDate(new Date()),
      })}
    </p>,
  ];

  const toolsPanel = (
    <div className="Preset__controls" key="tools">
      <button onClick={() => changeLanguage("da")}>DA</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => toggleTheme("dark")}>Dark</button>
      <button onClick={() => toggleTheme("light")}>Light</button>
    </div>
  );

  return (
    <div className="Preset">
      <h2 className="Preset__header">
        {t("preset.bootOptions", "Boot Options")}
      </h2>

      <div className="Preset__menu">
        <div className="Preset__menu__left">
          <p
            className={`Preset__menu__left__item ${
              activePanel === "system" ? "Preset__menu__left__active" : ""
            }`}
            onClick={() => setActivePanel("system")}
          >
            {t("preset.system")}
          </p>
          <p
            className={`Preset__menu__left__item ${
              activePanel === "tools" ? "Preset__menu__left__active" : ""
            }`}
            onClick={() => setActivePanel("tools")}
          >
            {t("preset.tools")}
          </p>
        </div>

        <div className="Preset__menu__right">
          {activePanel === "system" && systemPanel}
          {activePanel === "tools" && toolsPanel}
        </div>
      </div>

      <div className="Preset__controls">
        <button onClick={onClick}>{t("preset.exit", "Exit")}</button>
      </div>
    </div>
  );
};
