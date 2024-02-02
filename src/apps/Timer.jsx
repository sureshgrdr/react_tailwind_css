import React, { useState, useEffect } from "react";

const timings = [
  { tname: "00 : 05 : 00 ", ctime: 300 },
  { tname: "00 : 10 : 00 ", ctime: 600 },
  { tname: "00 : 15 : 00 ", ctime: 900 },
  { tname: "00 : 20 : 00 ", ctime: 1200 },
];

let beepsound = new Audio(
  "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav",
);

export default function Timer() {
  const [toggler, setToggler] = useState(true);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const formatTime = () => {
      const hrs = String(Math.trunc(time / 3600)).padStart(2, "0");
      const min = String(Math.trunc((time % 3600) / 60)).padStart(2, "0");
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
          beepsound.play();
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
    clearInput();
  };

  const stopTimer = () => {
    setToggler(true);
    clearInterval(timerId);
  };

  const OptionTimer = (time) => {
    setTime(time);
    clearInterval(timerId);
    setToggler(true);
    document.querySelector(".inputTime").value = null;
  };

  const inputTimer = (e) => {
    let inTime = e.target.value;
    let [hrs, mns] = inTime.split(":");

    setTime((parseInt(hrs) * 60 + parseInt(mns)) * 60);
    clearInterval(timerId);
    setToggler(true);
    document.querySelector(".optionTimer").value = "Select";
  };

  const resetTimer = () => {
    setTime(0);
    clearInput();
  };

  const clearInput = () => {
    document.querySelector(".inputTime").value = null;
    document.querySelector(".optionTimer").value = "Select";
  };

  return (
    <div className="appUI ">
      <p className="text-4xl font-bold">⏲️ Timer</p>
      <br />

      <p className="disTime text-3xl font-semibold text-orange-400"></p>
      <br />
      <div className="container grid grid-cols-2 justify-center gap-2 px-4">
        <select
          className="optionTimer  cursor-pointer rounded-2xl px-1 py-1 text-black"
          onChange={(e) => OptionTimer(e.target.value)}
          defaultValue={"Select"}
        >
          <option disabled hidden>
            Select
          </option>
          <option disabled>HH : MM : SS</option>
          {timings.map((item, i) => {
            return (
              <option
                className="cursor-pointer rounded-lg p-2 text-black "
                key={i}
                value={item.ctime}
              >
                {item.tname}
              </option>
            );
          })}
        </select>
        <input
          className="inputTime cursor-pointer rounded-2xl p-1 px-4 text-black "
          type="time"
          onChange={(e) => inputTimer(e)}
        />
      </div>

      <br />
      <div>
        {toggler ? (
          <button className="btn bg-green-600" onClick={startTimer}>
            ⫸
          </button>
        ) : (
          <button className="btn bg-red-500" onClick={stopTimer}>
            ▢
          </button>
        )}
        <button className="btn hover:bg-red-500" onClick={resetTimer}>
          ↻
        </button>
      </div>
      {/* <button className="btn app-close-btn hover:bg-red-500 w-10 ">X</button> */}
    </div>
  );
}
