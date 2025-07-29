import { useTranslation } from "react-i18next";
import "./About.scss";
import type { ICertificate, IJob } from "../../interfaces";
import { Card } from "../../components";
import {
  Octagon,
  CircleText,
  CircleLetters,
  Guide,
} from "../../components/Labels";
import { useLocalizedItems } from "../../hooks";
import { useEffect, useRef } from "react";

export const About = () => {
  const moveRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  const certificates = useLocalizedItems<ICertificate>(
    "about.certificates.items"
  );

  const jobs = useLocalizedItems<IJob>("jobs");
  const sortedJobs = [...jobs].sort((a, b) => {
    return parseInt(b.startYear) - parseInt(a.startYear);
  });

  useEffect(() => {
    const move = moveRef.current;

    const handlePointerMove = (event: PointerEvent) => {
      if (!move) return;

      const { clientX, clientY } = event;

      move.style.height = "44px";
      move.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="Cursor" ref={moveRef}></div>
      <div className="About">
        <div className="About__container">
          <div className="About__container__div1">
            <Octagon
              subtitle="TEKNOLOGISK INSTITUT"
              title="DATA MODELING"
              highlight="2022"
              location="TAASTRUP"
            />
          </div>
          <div className="About__container__div2">
            <div className="About__groove">CONTINOUS GROOVE</div>
          </div>
          <div className="About__container__div3">
            <CircleText title="Live Laugh Commit Live Laugh Merge" />
          </div>

          <div className="About__container__div4">
            <CircleLetters title="Software" />
          </div>
          <div className="About__container__div5">
            <Guide />
          </div>
        </div>
      </div>

      <div className="About" style={{ background: "var(--about-creme)" }}>
        <h2 className="About__resume__h2 About__content">
          {t("about.resume.title")}
        </h2>
        <div style={{ background: "var(--about-creme)" }}>
          <div id="" className="About__resume About__content">
            {sortedJobs.map((item, index) => (
              <div key={index} className="About__resume__item">
                <p className="About__resume__item__year">{item.startYear}</p>
                <div className="About__resume__item__jobContainer">
                  <h2 className="About__resume__item__title">{item.title}</h2>
                  <small className="About__resume__item__company" key={index}>
                    {item.company}
                    <div>
                      <p
                        className="About__resume__item__technology"
                        key={index}
                      >
                        {item.technologies.map((item, index) => (
                          <span key={index}>{item}</span>
                        ))}
                      </p>
                    </div>
                  </small>
                </div>
                <p className="About__resume__item__year">{item.endYear}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="About__certificates">
          <div className="About__content">
            <h3 className="About__certificates__header">
              {t("about.certificates.title")}
            </h3>
            <div className="About__certificates__container">
              {certificates.map((certificate, index) => (
                <Card className="About__certificates__card" hasPadding={false}>
                  <h4 className="About__certificates__title" key={index}>
                    {certificate.name}
                  </h4>
                  <h4 className="About__certificates__subtitle" key={index}>
                    {certificate.school}
                  </h4>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="About__school">
          <div className="About__content">
            <h3 className="About__school__header">{t("about.school.title")}</h3>
            <div className="About__school__container">
              <Card className="About__school__card" hasPadding={false}>
                <h4 className="About__school__title">
                  {t("about.school.name")}
                </h4>
                <h4 className="About__school__subtitle">
                  {t("about.school.school")}
                </h4>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
