import React, { useContext, useEffect, useState } from "react";

import calculateWinner from "../utils/calculateWinner";
import { GameContext } from "../contexts/GameContext";

import Player from "./Player";
import Reset from "./Reset";
import Square from "./Square";
import Winner from "./Winner";
import Velha from "./Velha";

export default function Board() {
  const { squares, setWhoIsWinner } = useContext(GameContext);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setIsOver(!squares.includes(null));
    const winner = calculateWinner(squares);
    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [squares]);

  return (
    <div className="board-container">
      <Player />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
      <Winner />
      {isOver ? <Velha /> : ""}
    </div>
  );
}
