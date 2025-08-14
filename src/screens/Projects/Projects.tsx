import { Link } from "react-router-dom";
import { Card } from "../../components";
import { useLocalizedItems } from "../../hooks";
import type { IProject } from "../../interfaces";
import "./Projects.scss";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const project = useLocalizedItems<IProject>("projects.projects");
  const { t } = useTranslation();

  return (
    <div className="Projects">
      <div className="Projects__div1">
        <Card className="Projects__hero">
          <h1 className="Projects__div1__title">{t("projects.title")}</h1>
        </Card>
      </div>

      {project.map((item, index) => (
        <div className={`Projects__div${index + 2}`} key={item.title}>
          <Link to={item.path || ""}>
            <Card className={`Projects__card${index + 2}`} hasPadding={false}>
              <h1
                className={`Projects__div${index + 2}__title ${
                  item.isPersonalProject ? "Projects__personal" : ""
                }`}
              >
                {item.title}
                <span
                  className={`${
                    item.isPersonalProject
                      ? "Projects__personal Projects__personal__styled"
                      : "Projects__personal__none"
                  }`}
                >
                  {" (personal)"}
                </span>
              </h1>
              <small
                className={`Projects__personal__year ${
                  item.isPersonalProject ? "Projects__personal__year__none" : ""
                }`}
              >
                {item.year}
              </small>
              <p className={`Projects__div${index + 2}__description`}>
                {item.description}
              </p>
              <div className={`Projects__technologies`}>
                {item.technologies?.map((technology, techIndex) => (
                  <span key={techIndex}>{technology}</span>
                ))}
              </div>
            </Card>
          </Link>
        </div>
      ))}

      <div className="Projects__div8">
        <Link to="https://github.com/deyanaaliyah">
          <Card className="Projects__card8">
            <p className="Projects__div8__title">
              {t("projects.callToAction")}
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
};
