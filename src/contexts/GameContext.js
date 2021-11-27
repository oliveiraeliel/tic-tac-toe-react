import React, { createContext, useState } from "react";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState(null);
  const [velha, setVelha] = useState(false);

  const state = {
      squares,
      setSquares,
      isXNext,
      setIsXNext,
      whoIsWinner,
      setWhoIsWinner,
      velha,
      setVelha,
  };

  return (
    <GameContext.Provider value={state}>{children}</GameContext.Provider>
  );
}
