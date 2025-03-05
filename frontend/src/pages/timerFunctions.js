import { useState, useRef } from "react";

export const useTimerFunctions = () => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      setTime(12); // Reset to 12 seconds before starting
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    setTime(12);
    setTimerRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return { time, timerRunning, startTimer, stopTimer, resetTimer };
};