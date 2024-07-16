import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { postRequest } from "../../api/LeadersAPI";
import { useContext, useState } from "react";
import { LeadersContext } from "../../context/LeaderBoardContext";
import { useNavigate } from "react-router-dom";

export function EndGameModal({ isWon, hasAchievement, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { setLeaders } = useContext(LeadersContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const title = isWon && hasAchievement ? "Вы попали на Лидерборд!" : isWon ? "Вы победили!" : "Вы проиграли!";
  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;
  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  function handleChangeUsername(e) {
    setInputValue(e.target.value);
  }

  function sendStatics() {
    const username = inputValue.trim();

    if (!username) return;

    postRequest({
      name: username,
      time: gameDurationMinutes * 60 + gameDurationSeconds,
    }).then(data => setLeaders(data.leaders));
  }

  function handleSubmit() {
    sendStatics();

    onClick();
  }

  function handleLinkToLeaderboard(e) {
    e.preventDefault();
    sendStatics();
    navigate("/leaderboard");
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {hasAchievement && <input placeholder={""} value={inputValue} onChange={handleChangeUsername} />}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={handleSubmit}>Начать сначала</Button>
      <a href="#" className={styles.link} onClick={handleLinkToLeaderboard}>
        Перейти на лидерборд
      </a>
    </div>
  );
}
