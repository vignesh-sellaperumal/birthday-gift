import React, { useState } from "react";
import background from "../../assets/background.png";
import whishes from "../../assets/wishes.png";
import styles from "./Home.module.css";
import ConfettiExplosion from "react-confetti-explosion";
import { GiPartyPopper } from "react-icons/gi";

function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWish, setShowWish] = useState(false);

  let currentComponent = null;

  if (showWish) {
    currentComponent = <div className={styles.WishesContainer}>wishes</div>;
  } else {
    currentComponent = (
      <>
        <h1 className={styles.TitleText}>H A P P Y</h1>
        <h1 className={styles.BirthdayText}>B I R T H D A Y</h1>
        <h1 className={styles.NameText}>S U M I T H R A</h1>
        <div
          className={styles.IconContainer}
          onClick={() => setShowConfetti(true)}
        >
          <GiPartyPopper className={styles.PopperIcon} />
        </div>
      </>
    );
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <img src={background} className={styles.Background} alt="page-poster" />
        {currentComponent}
        {showConfetti && (
          <ConfettiExplosion
            particleCount={1000}
            particleSize={10}
            duration={5000}
            onComplete={() => {
              setShowConfetti(false);
              setShowWish(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
