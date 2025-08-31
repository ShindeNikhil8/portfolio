import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) return null;

  // ✅ Duplicate the achievements for seamless loop
  const loopedAchievements = achievementSection.achievementsCards.concat(
    achievementSection.achievementsCards
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>

          <div className="carousel-wrapper2">
            <div className="carousel-track2">
              {loopedAchievements.map((card, i) => (
                <div key={i} className="achievement-card-wrapper">
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
