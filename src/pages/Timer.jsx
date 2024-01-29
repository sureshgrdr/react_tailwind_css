import React, { useState, useEffect } from "react";

const timings = [
  { tname: "05.00 mins", ctime: 300 },
  { tname: "10.00 mins", ctime: 600 },
  { tname: "15.00 mins", ctime: 900 },
  { tname: "20.00 mins", ctime: 1200 },
];

export default function Timer() {
  const [toggler, setToggler] = useState(true);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const formatTime = () => {
      const hrs = String(Math.trunc(time / 3600)).padStart(2, "0");
      const min = String(Math.trunc(time / 60)).padStart(2, "0");
      const sec = String(Math.trunc(time % 60)).padStart(2, "0");
      return `${hrs}:${min}:${sec}`;
    };

    document.querySelector(".disTime").textContent = formatTime();
  }, [time]);

  const timer = () => {
    const watch = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(watch);
          setToggler(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerId(watch);
  };

  const startTimer = () => {
    setToggler(false);
    timer();
  };

  const stopTimer = () => {
    setToggler(true);
    clearInterval(timerId);
  };

  const selectTimer = (time) => {
    setTime(time);
    clearInterval(timerId);
    setToggler(true);
  };

  const inputTimer = (e) => {
    let inTime = e.target.value;
    let [hrs, mns] = inTime.split(":");

    console.log(inTime, parseInt(hrs) / 60, mns);
  };

  return (
    <div>
      <p className="disTime text-xl text-orange-400 font-semibold"></p>
      <ul>
        {timings.map((item, i) => {
          return (
            <li key={i} onClick={() => selectTimer(item.ctime)}>
              {item.tname}
            </li>
          );
        })}
      </ul>
      <br />
      <input
        type="time"
        id="appt"
        name="appt"
        onChange={(e) => inputTimer(e)}
      ></input>

      <br />
      {toggler ? (
        <button className="btn startBtn" onClick={startTimer}>
          ◷ Start
        </button>
      ) : (
        <button className="btn stopBtn" onClick={stopTimer}>
          ⊗ Stop
        </button>
      )}
    </div>
  );
}
