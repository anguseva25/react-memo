import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useContext } from "react";
import { LeadersContext } from "../../context/LeaderBoardContext";
import cn from "classnames";

import { HardLevelImg, SuperPowerImg } from "../../components/AchievementsImages/AchievementsImages";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export const LeaderBoardPage = () => {
  const { leaders } = useContext(LeadersContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Лидерборд</h3>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </header>
      <main>
        <div className={styles.mainBox}>
          <p className={cn(styles.usersPosition, styles.headerLine)}>Позиция</p>
          <p className={cn(styles.nameUser, styles.headerLine)}>Пользователь</p>
          <p className={cn(styles.achievUser, styles.headerLine)}>Достижения</p>
          <p className={cn(styles.timeRecord, styles.headerLine)}>Время</p>
        </div>
        {leaders.map((leader, index) => (
          <div className={styles.mainBox} key={index}>
            <p className={styles.usersPosition}>{index + 1}</p>
            <p className={styles.nameUser}>{leader.name}</p>
            <div className={styles.achievUser}>
              <HardLevelImg disabled={!leader.achievements.includes(1)} />
              <SuperPowerImg disabled={!leader.achievements.includes(2)} />
            </div>
            <p className={styles.timeRecord}>{formatTime(leader.time)}</p>
          </div>
        ))}
      </main>
    </div>
  );
};
