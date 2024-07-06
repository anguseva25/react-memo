import { createContext, useState } from "react";

export const GameSettingsContext = createContext(null);

export const GameSettingsProvider = ({ children }) => {
  const [levelMode, setLevelMode] = useState(1);
  const [liteVersion, setLiteVersion] = useState(false);

  function getTriesCount() {
    return liteVersion ? 3 : 0;
  }

  return (
    <GameSettingsContext.Provider value={{ levelMode, setLevelMode, liteVersion, setLiteVersion, getTriesCount }}>
      {children}
    </GameSettingsContext.Provider>
  );
};
