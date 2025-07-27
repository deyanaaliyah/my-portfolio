import { useTranslation } from "react-i18next";

export const useLocalizedItems = (key: string): [] => {
  const { t } = useTranslation();
  return t(key, { returnObjects: true }) as [];
};

export const getCurrentLanguage = () => {
  const language = localStorage.getItem("i18nextLng") || "en";
  return language;
};

export const setLanguage = () => {
  document.documentElement.setAttribute("lang", getCurrentLanguage());
};
