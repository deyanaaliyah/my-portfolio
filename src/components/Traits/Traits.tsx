import "./Traits.scss";

interface TraitsProps {
  t: (key: string) => string;
}

export const Traits = ({ t }: TraitsProps) => {
  return (
    <section className="Traits">
      <div className="Traits__content">
        <h3 className="Traits__title">{t("home.traits.title")}</h3>
        <p className="Traits__quote">{t("home.traits.quote")}</p>
      </div>
    </section>
  );
};
