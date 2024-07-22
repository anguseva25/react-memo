import { useState } from "react";
import styles from "./AchievementsImages.module.css";

import hardLevelImage from "./images/hardLevel.svg";
import superPowerImage from "./images/superPower.svg";
import hardLevelGreyImage from "./images/hardLevelGrey.svg";
import superPowerGreyImage from "./images/superPowerGrey.svg";

export function HardLevelImg({ disabled }) {
  const [isOpen, setOpen] = useState(false);

  function mouseHover(value) {
    if (disabled) return;

    setOpen(value);
  }

  return (
    <div className={styles.cntHint}>
      {!disabled && isOpen && (
        <p className={styles.cntInsight}>
          Игра пройдена
          <br />в сложном режиме
        </p>
      )}
      <img
        src={disabled ? hardLevelGreyImage : hardLevelImage}
        alt="hard level"
        onMouseOver={() => mouseHover(true)}
        onMouseOut={() => mouseHover(false)}
      />
    </div>
  );
}

export function SuperPowerImg({ disabled }) {
  const [isOpen, setOpen] = useState(false);

  function mouseHover(value) {
    if (disabled) return;

    setOpen(value);
  }

  return (
    <div className={styles.cntHint}>
      {!disabled && isOpen && (
        <p className={styles.cntInsight}>
          Игра пройдена
          <br />
          без супер-сил
        </p>
      )}
      <img
        src={disabled ? superPowerGreyImage : superPowerImage}
        alt="hard level"
        onMouseOver={() => mouseHover(true)}
        onMouseOut={() => mouseHover(false)}
      />
    </div>
  );
}
