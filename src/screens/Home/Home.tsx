import { useTranslation } from "react-i18next";
import { SplitView } from "../../components";
import "./Home.scss";
import { Link } from "react-router-dom";
import { Folds, Plane, ShapedCircles, TechFieldset, Audio, Hike } from "../../SVG";
import { Star } from "../../SVG";

export const Home = () => {
  const { t } = useTranslation();
  const title = () => {
    return t("home.title")
      .split(" ")
      .map((word, index) => {
        let className = "";

        switch (word.toLowerCase()) {
          case "deyan":
            className = "Home__intro__highlight1";
            break;
          case "polished":
            className = "Home__intro__highlight2";
            break;
          case "digital":
            className = "Home__intro__highlight2";
            break;
          case "produkter":
            className = "Home__intro__highlight2";
            break;
          case "products":
            className = "Home__intro__highlight2";
            break;
          default:
            className = "Home__intro__title";
        }

        return (
          <span key={index} className={className}>
            {word}{" "}
          </span>
        );
      });
  };

  return (
    <>
      <div className="Home">
        <SplitView className="Home__intro">
          <TechFieldset />

          <div className="Home__intro">
            <h1 className="Home__intro__title">{title()}</h1>
            <p className="Home__intro__tagline">{t("home.tagline")}</p>
          </div>
        </SplitView>

        <div className="Home__traits">
          <div className="Home__traits__content">
            <h3>{t("home.traits.title")}</h3>
            <p>{t("home.traits.quote")}</p>
          </div>
        </div>

        <div className="Home__hero">
          <div className="Home__hero__content">
            <h2 className="Home__hero__content__title">{t("home.seeking")}</h2>

            <div className="Home__hero__content__why">
              <div className="Home__hero__content__why__link-to-github">
                <Link to="https://www.linkedin.com/in/dejan-alija">
                  LinkedIn
                </Link>
              </div>
              <div className="Home__hero__content__why__bullets">
                <p>Stack</p>
                <p>React</p>
                <p>Vue</p>
                <p>Vite</p>
                <p>SCSS</p>
              </div>
              <div className="Home__hero__content__why__bullets">
                <p></p>
                <p>Go</p>
                <p>Swift</p>
                <p>SQL</p>
                <p>.NET</p>
              </div>
            </div>

            <div className="Home__hero__content__subtitle">
              ...{t("home.outro")}
            </div>
          </div>
        </div>

        <div className="Home__hobbies">
          <div className="Home__hobbies__decoration"></div>
          <div className="Home__hobbies__content">
            <div>
              <p>What do I do in my free time?</p>
            </div>
            <div className="Home__hobbies__content__title">
              <div>
                <h3>
                  <span>Obviously</span> I have other hobbies too
                </h3>
                <h4>And they come in handy</h4>
              </div>
              <div className="Home__hobbies__content__title__info">
                <div className="Home__hobbies__content__title__info__flex">
                  <Star color="white" />
                  <p>CPH</p>
                </div>
                <p>27YO</p>
              </div>
            </div>

            <div className="Card">
              <div className="Card__flex">
                <div className="Card__flex__item">
                  <ShapedCircles color="white" />
                </div>
                <div className="Card__flex__item">
                  <Folds color="white" className="Card__flex__item__folds" />
                </div>
              </div>

              <div className="Home__hobbies__content__pins">
                <div className="Home__hobbies__content__pins__items">
                  <Plane
                    color="white"
                    className="Home__hobbies__content__pins__icon"
                  />
                  <p>Aviation</p>
                </div>
                <div className="Home__hobbies__content__pins__items">
                  <Audio
                    color="white"
                    className="Home__hobbies__content__pins__icon"
                  />
                  <p>Music</p>
                </div>
                <div className="Home__hobbies__content__pins__items">
                  <Hike
                    color="white"
                    className="Home__hobbies__content__pins__icon"
                  />
                  <p>Hiking</p>
                </div>
              </div>

              <div className="Home__hobbies__content__info">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
