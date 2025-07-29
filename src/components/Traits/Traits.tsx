import type { ILanguage } from "../../interfaces";
import "./Traits.scss";

export const Traits = ({ t }: ILanguage) => {
  return (
    <section className="Traits">
      <div className="Traits__content">
        <h3 className="Traits__title">{t("home.traits.title")}</h3>
        <p className="Traits__quote">{t("home.traits.quote")}</p>
      </div>
    </section>
  );
};
