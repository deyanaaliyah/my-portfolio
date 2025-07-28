import { useTranslation } from "react-i18next";
import { Intro, Traits, Hero, Hobbies } from "../../components";
import "./Home.scss";
import type { IHobby } from "../../interfaces";

export const Home = () => {
  const { t } = useTranslation();
  const hobbies = t("home.hobby.hobbies", { returnObjects: true }) as IHobby[];
  const hobbyTitle = t("home.hobby.title", { returnObjects: true }) as string[];

  return (
    <div className="Home">
      <Intro />
      <Traits t={t} />
      <Hero t={t} />
      <Hobbies hobbies={hobbies} hobbyTitle={hobbyTitle} t={t} />
    </div>
  );
};
