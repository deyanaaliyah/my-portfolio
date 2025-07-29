import { useTranslation } from "react-i18next";

export function useLocalizedItems<T>(path: string): T[] {
  const { t } = useTranslation();
  return t(path, { returnObjects: true }) as T[];
}

export const getCurrentLanguage = () => {
  const language = localStorage.getItem("i18nextLng") || "en";
  return language;
};

export const setLanguage = () => {
  document.documentElement.setAttribute("lang", getCurrentLanguage());
};
