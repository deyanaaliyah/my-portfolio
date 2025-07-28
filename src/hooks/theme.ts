export const getCurrentTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDarkMode ? "dark" : "light";
};

export const setTheme = () => {
  const systemTheme = getCurrentTheme();
  document.documentElement.setAttribute("data-theme", systemTheme);
  window.dispatchEvent(new Event("theme-change"));
};

export const watchSystemTheme = () => {
  const themePreferenceQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const systemThemeChangeListener = (event: MediaQueryListEvent) => {
    const updatedTheme = event.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  if (themePreferenceQuery.addEventListener) {
    themePreferenceQuery.addEventListener("change", systemThemeChangeListener);
  } else if (themePreferenceQuery.addListener) {
    themePreferenceQuery.addListener(systemThemeChangeListener); // Safari fallback
  }
};
