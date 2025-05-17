import { createContext, useState } from "react";
import initialUnitsData from "../data/initialUnits";

export const GameContext = createContext<any>(null);

export const GameProvider = ({ children }) => {
  const [units, setUnits] = useState(initialUnitsData);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("player");
  const [log, setLog] = useState<string[]>([]);
  const [round, setRound] = useState(1);

  return (
    <GameContext.Provider
      value={{
        units,
        setUnits,
        selected,
        setSelected,
        turn,
        setTurn,
        log,
        setLog,
        round,
        setRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
