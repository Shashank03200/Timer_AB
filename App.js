import { useState, useRef, useEffect } from "react";

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
    <main className="App">
      <p className="App__CurrentTime">{randomInput}</p>
      <section>
        <button onClick={timerPaused ? startTimer : stopTimer}>
          {timerPaused ? "Start" : "Stop"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </section>

      <br></br>
    </main>
  );
}

export default App;
