import React, { createContext, useContext } from "react";
import { useTimerFunctions } from "./timerFunctions.js"; // Ensure correct path

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const timer = useTimerFunctions();

  return (
    <TimerContext.Provider value={timer}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);