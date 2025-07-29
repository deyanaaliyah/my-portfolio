import { useTranslation } from "react-i18next";
import { Intro, Traits, Hero, Hobbies } from "../../components";
import "./Home.scss";

export const Home = () => {
  const { t } = useTranslation();


  return (
    <div className="Home">
      <Intro />
      <Traits t={t} />
      <Hero t={t} />
      <Hobbies t={t} />
    </div>
  );
};
