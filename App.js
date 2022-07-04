import { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

function App(props) {
  const [randomInput, setRandomInput] = useState(props.randomInput);
  const [timerPaused, setTimerPaused] = useState(true);

  const timerId = useRef();

  const startTimer = () => {
    setTimerPaused(false);
    timerId.current = setInterval(() => {
      setRandomInput((e) => e - 1);
    }, 1000);

    // inputRef.current.focus();
  };

  if (randomInput === 0) {
    clearInterval(timerId.current);
  }

  if (timerPaused) {
    clearInterval(timerId.current);
  }

  const stopTimer = () => {
    setTimerPaused(true);
  };

  const resetTimer = () => {
    setRandomInput(props.randomInput);
    setTimerPaused(true);
  };

  return (
    <motion.div
      className="App"
      initial={{ y: "100%" }}
      animate={{
        y: "10%",
      }}
    >
      <p className="App__CurrentTime">{randomInput}</p>
      <section>
        <button onClick={timerPaused ? startTimer : stopTimer}>
          {randomInput > 0 && timerPaused ? "Start" : "Stop"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <h4>{randomInput === 0 && "Timer Finished"}</h4>
      <br></br>
    </motion.div>
  );
}

export default App;
