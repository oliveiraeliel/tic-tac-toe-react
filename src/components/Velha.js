import React, { useContext, useEffect } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Velha() {
  const { squares, velha, setVelha, whoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const a = squares.includes(null);
    if (a === false && whoIsWinner === null) {
      setVelha(true);
    }
    
  }, [squares, whoIsWinner]);

  return <h1>{velha ? `Deu velha` : ""}</h1>;
}
