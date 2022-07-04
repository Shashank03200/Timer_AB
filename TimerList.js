import React, { useRef, useState } from "react";
import App from "./App";

function TimerList() {
  const [timerList, setTimerList] = useState([]);
  const [inputTime, setInputTime] = useState(0);

  const createTimer = () => {
    setTimerList([
      ...timerList,
      {
        timerId: Math.random(),
        inputTime,
      },
    ]);
    // setInputTime("");
  };

  return (
    <div>
      <>
        {timerList.length > 0 &&
          timerList.map((timer) => {
            return <App key={timer.timerId} randomInput={inputTime} />;
          })}
      </>
      <div className="TimerList__TimerAddSection">
        <input
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          type="number"
          placeholder="Random Input"
        />

        <button onClick={createTimer} className="TimerList__AddTimerButton">
          Add Timer
        </button>
      </div>
    </div>
  );
}

export default TimerList;
