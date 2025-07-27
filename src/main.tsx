import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../public/i18n";
import { setLanguage, setTheme } from "./hooks";

setLanguage();
setTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const initializeApp = async () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/my-portfolio/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Vis midlertidig loading mens async initialisering kører
root.render(<div>Loading application...</div>);

initializeApp().catch((error) => {
  console.error("Failed during app initialization:", error);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/my-portfolio/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
