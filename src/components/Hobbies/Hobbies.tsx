import { ShapedCircles, Folds, Star, Plane, Audio, Hike } from "../../SVG";
import type { IColor, IHobby } from "../../interfaces";
import { Card } from "../Cards";
import "./Hobbies.scss";

interface HobbiesProps {
  hobbies: IHobby[];
  hobbyTitle: string[];
  t: (key: string) => string | string[];
}

const iconMap: Record<string, React.FC<IColor>> = {
  Aviation: Plane,
  Music: Audio,
  Hiking: Hike,
};

export const Hobbies = ({ hobbies, hobbyTitle, t }: HobbiesProps) => {
  return (
    <section className="Hobbies">
      <div className="Hobbies__content">
        <p className="Hobbies__intro">{t("home.hobby.intro")}</p>

        <div className="Hobbies__container">
          <div className="Hobbies__container__titles">
            <h3 className="Hobbies__container__titles__h3">
              <span>{hobbyTitle[0]}</span> {hobbyTitle[1]}
            </h3>
            <h4 className="Hobbies__container__titles__h4">
              {t("home.hobby.subtitle")}
            </h4>
          </div>

          <div className="Hobbies__container__info">
            <div className="Hobbies__container__info__flex">
              <Star color="white" />
              <p className="Hobbies__container__info__flex__infoText">
                {t("home.hobby.cph")}
              </p>
            </div>
            <p className="Hobbies__container__info__flex__infoText">27YO</p>
          </div>
        </div>

        <Card background="black" hasPadding={false}>
          <div className="Hobbies__mood">
            <ShapedCircles color="white" className="Hobbies__mood__item" />
            <Folds color="white" className="Hobbies__mood__item" />
          </div>
          <div className="Hobbies__pins">
            {hobbies.map((hobby, index) => {
              const Icon = iconMap[hobby.icon];
              return (
                <div
                  key={index}
                  className={`Hobbies__pins__pin Hobbies__pins__${index}`}
                >
                  <div className="Hobbies__pins__header">
                    {Icon && (
                      <Icon color="white" className="Hobbies__pins__icon" />
                    )}
                    <h4
                      className={`Hobbies__pins__title ${
                        hobby.title.match("Aviation")
                          ? "Hobbies__pins__highlighted"
                          : ""
                      }`}
                    >
                      {hobby.title}
                    </h4>
                  </div>
                  <p className="Hobbies__pins__description">
                    {hobby.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};
