import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Button } from "../../components/Button/Button";
import { GameSettingsContext } from "../../context/GameSettingsContext";

export function SelectLevelPage() {
  const navigate = useNavigate();
  const { levelMode, setLevelMode, liteVersion, setLiteVersion } = useContext(GameSettingsContext);

  function handleLiteChange() {
    console.log(liteVersion);
    setLiteVersion(prev => !prev);
  }

  function startGame() {
    navigate(`/game/${levelMode * 3}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <a
              className={styles.levelLink}
              href="#"
              onClick={() => {
                setLevelMode(1);
              }}
            >
              1
            </a>
          </li>
          <li className={styles.level}>
            <a
              className={styles.levelLink}
              href="#"
              onClick={() => {
                setLevelMode(2);
              }}
            >
              2
            </a>
          </li>
          <li className={styles.level}>
            <a
              className={styles.levelLink}
              href="#"
              onClick={() => {
                setLevelMode(3);
              }}
            >
              3
            </a>
          </li>
        </ul>
        <label className={styles.liteMode}>
          Включить упрощенный режим (3 попытки)
          {/*<input type="checkbox" value={levelMode} onChange={() => {() => setLiteVersion(levelMode)}} />*/}
          <input type="checkbox" value={liteVersion} onChange={handleLiteChange} />
        </label>
        <Button onClick={startGame}>Старт</Button>
      </div>
    </div>
  );
}
