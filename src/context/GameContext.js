import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.post('/game/getgamedata', {})
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GameContext.Provider value={games}>
      {children}
    </GameContext.Provider>
  );
};