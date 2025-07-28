import { Link } from "react-router-dom";
import "./Hero.scss";

interface HeroProps {
  t: (key: string) => string;
}

export const Hero = ({ t }: HeroProps) => {
  const frontend = ["React", "Vue", "Vite", "SCSS"];
  const backend = ["", "Go", "Swift", "SQL", ".NET"];
  return (
    <section className="Hero">
      <div className="Hero__content">
        <h2 className="Hero__title">{t("home.seeking")}</h2>

        <div className="Hero__stack">
          <div className="Hero__stack__linkedInLink">
            <Link to="https://www.linkedin.com/in/dejan-alija">LinkedIn</Link>
          </div>
          <div className="Hero__stackList">
            <p className="Hero__stackList__stackItem">Stack</p>
            {frontend.map((item) => (
              <p key={item} className="Hero__stackList__stackItem">
                {item}
              </p>
            ))}
          </div>
          <div className="Hero__stackList">
            {backend.map((item, idx) =>
              item ? (
                <p key={item} className="Hero__stackList__stackItem">
                  {item}
                </p>
              ) : (
                <p key={`empty-${idx}`} className="Hero__stackList__stackItem" />
              )
            )}
          </div>
        </div>

        <div className="Hero__outro">...{t("home.outro")}</div>
      </div>
    </section>
  );
};
