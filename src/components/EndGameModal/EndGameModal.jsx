import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { postRequest } from "../../api/LeadersAPI";
import { useContext, useState } from "react";
import { LeadersContext } from "../../context/LeaderBoardContext";
import { useNavigate } from "react-router-dom";

export function EndGameModal({ isWon, achievements, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { setLeaders } = useContext(LeadersContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [dataIsSent, setDataIsSent] = useState(false);
  const [error, setError] = useState("");

  const title = isWon ? "Вы попали на Лидерборд!" : "Вы проиграли!";
  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;
  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  function handleChangeUsername(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendStatics();
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function sendStatics() {
    const username = inputValue.trim();

    if (!username) {
      setError("Введите имя");
      return;
    }

    postRequest({
      name: username,
      time: gameDurationMinutes * 60 + gameDurationSeconds,
      achievements: achievements,
    }).then(data => {
      setLeaders(data.leaders);
      setDataIsSent(true);
      setError("");
    });
  }

  function handleSubmit() {
    sendStatics();

    onClick();
  }

  function handleLinkToLeaderboard(e) {
    e.preventDefault();
    // sendStatics();
    navigate("/leaderboard");
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isWon && (
        <div className={styles.inputData}>
          <div className={styles.addNameUser}>
            <input
              className={styles.input}
              placeholder={"Пользователь"}
              value={inputValue}
              onChange={handleChangeUsername}
              onKeyDown={handleKeyDown}
              readOnly={dataIsSent}
            />
            {dataIsSent || (
              <button className={styles.btnAddUser} onClick={sendStatics} disabled={!inputValue}>
                ↵
              </button>
            )}
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      )}
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
