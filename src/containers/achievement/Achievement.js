import React, { useContext, useRef, useEffect, useState } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!achievementSection.display) return;

    const container = containerRef.current;
    const cards = Array.from(container.children);
    let scrollAmount = 0;
    const cardWidths = cards.map(c => c.offsetWidth + 32); // include gap
    const totalWidth = cardWidths.reduce((a, b) => a + b, 0);

    let animationFrame;

    const step = () => {
      if (!isPaused) {
        scrollAmount += 1; // adjust speed
        if (scrollAmount >= totalWidth) scrollAmount = 0;
        container.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  if (!achievementSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <h1 className={isDark ? "dark-mode heading achievement-heading" : "heading achievement-heading"}>
            {achievementSection.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle achievement-subtitle" : "subTitle achievement-subtitle"}>
            {achievementSection.subtitle}
          </p>

          <div className="achievement-cards-div" ref={containerRef}>
            {achievementSection.achievementsCards.map((card, i) => (
              <div
                key={i}
                className="achievement-card-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
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
    </Fade>
  );
}
