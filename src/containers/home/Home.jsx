import React, { useState } from "react";
import background from "../../assets/background.png";
import whishes from "../../assets/wishes.png";
import styles from "./Home.module.css";
import ConfettiExplosion from "react-confetti-explosion";
import { GiPartyPopper } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import { IoMdRefreshCircle } from "react-icons/io";

function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWish, setShowWish] = useState(false);

  let currentComponent = null;

  if (showWish) {
    currentComponent = (
      <div className={styles.WishesContainer}>
        <h1 className={styles.HappyText}>H A P P Y</h1>
        <h1 className={styles.AgeText}>23</h1>
        <TypeAnimation
          sequence={[
            `Wish you a very many special Happy Birthday Sumi!`,
            3000,
            `Thanks for being there for me whenever I felt down, I will always there for you whenever you need me (inaikku, nalaikku, nalai maru naal epoludhum). Epovum pola happy ya iru seri ya.`,
            5000,
            `Nalla padichu next Birthday kula developer aagitu Amma, Appa, Thangachi ya Happy ya vachiko. Ipo irukura maadhri epovum nee jolly ya iru edhu paththiyum yosikadha, ellamae nalladhae nadakkum :)`,
            5000,
            `Keep smiling as always ;)`,
          ]}
          wrapper="p"
          speed={1}
          omitDeletionAnimation
          className={styles.WishesText}
        />
      </div>
    );
  } else {
    currentComponent = (
      <>
        <h1 className={styles.NameText}>S U M I T H R A</h1>
      </>
    );
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        {showWish ? (
          <img
            src={whishes}
            className={styles.WishBackground}
            alt="page-poster"
          />
        ) : (
          <img
            src={background}
            className={styles.Background}
            alt="page-poster"
          />
        )}

        {showConfetti && (
          <ConfettiExplosion
            particleCount={200}
            particleSize={10}
            duration={5000}
            onComplete={() => {
              setShowConfetti(false);
              setShowWish(true);
            }}
            className={styles.NameText}
          />
        )}
        <div
          className={styles.IconContainer}
          onClick={() => setShowConfetti(true)}
        >
          <GiPartyPopper className={styles.PopperIcon} />
        </div>

        <IoMdRefreshCircle className={styles.RefreshIcon} onClick={() => window.location.reload()} />

        {currentComponent}
      </div>
    </div>
  );
}

export default Home;
