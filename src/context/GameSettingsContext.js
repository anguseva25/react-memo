import { createContext, useState } from "react";

export const GameSettingsContext = createContext(null);

export const GameSettingsProvider = ({ children }) => {
  const [levelMode, setLevelMode] = useState(1);
  const [liteVersion, setLiteVersion] = useState(false);

  function getTriesCount() {
    return liteVersion ? 3 : 0;
  }

  function printTriesText(count) {
    switch (count) {
      case 3:
        return "У вас есть 3 попытки";
      case 2:
        return "У вас осталось 2 попытки";
      case 1:
      default:
        return "У вас осталась последняя попытка";
    }
  }

  return (
    <GameSettingsContext.Provider
      value={{ levelMode, setLevelMode, liteVersion, setLiteVersion, getTriesCount, printTriesText }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};
