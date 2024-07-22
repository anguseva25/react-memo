import { useState } from "react";
import styles from "./Hints.module.css";

import cn from "classnames";

import eyeImage from "./images/eye.svg";

export function InsightHint({ disabled, handleClick }) {
  const [isOpen, setOpen] = useState(false);

  function useClick() {
    if (disabled) return;

    setOpen(false);
    handleClick();
  }

  function mouseHover(value) {
    if (disabled) return;

    setOpen(value);
  }

  return (
    <div className={styles.cntHint}>
      {isOpen && (
        <>
          <div className={styles.bckColor} />
          <div className={styles.cntInsight}>
            <h2 className={styles.insightTitle}>Прозрение</h2>
            <p className={styles.insightDescription}>
              На 5 секунд показываются все карты. Таймер длительности игры на это время останавливается.
            </p>
          </div>
        </>
      )}
      <img
        className={cn({ [styles.disabled]: disabled })}
        src={eyeImage}
        alt={"eye"}
        onClick={useClick}
        onMouseOver={() => mouseHover(true)}
        onMouseOut={() => mouseHover(false)}
      />
    </div>
  );
}
