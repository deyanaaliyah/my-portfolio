export const addThemeListener = (elementId: string) => {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    window.dispatchEvent(new Event("theme-change"));
  });
};

export const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return theme;
};

export const setTheme = () => {
  const theme = getCurrentTheme();
  document.documentElement.setAttribute("data-theme", theme);
  window.dispatchEvent(new Event("theme-change"));
};

setTheme();
