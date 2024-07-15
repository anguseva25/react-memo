import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeadeBoardPage.module.css";

export const LeaderBoardPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Лидерборд</h3>
        <Link>
          <Button>Начать игру</Button>
        </Link>
      </header>
      <main>
        <div className={styles.mainBox}>
          <p className={styles.usersPosition}>Позиция</p>
          <p className={styles.nameUser}>Пользователь</p>
          <p className={styles.timeRecord}>Время</p>
        </div>
      </main>
    </div>
  );
};
