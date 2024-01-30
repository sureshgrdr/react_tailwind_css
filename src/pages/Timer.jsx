import React, { useState, useEffect } from "react";

const timings = [
  { tname: "00 : 05 : 00 ", ctime: 300 },
  { tname: "00 : 10 : 00 ", ctime: 600 },
  { tname: "00 : 15 : 00 ", ctime: 900 },
  { tname: "00 : 20 : 00 ", ctime: 1200 },
];

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
    document.querySelector(".inputTime").value = null;
    document.querySelector(".optionTimer").value = "Select";
  };

  return (
    <div className="shadow-xl max-w-80 bg-neutral-900 text-white flex flex-col justify-center items-center p-8 m-4 rounded-3xl	select-none">
      <p className="text-4xl font-bold">⏲️ Timer</p>
      <br />

      <p className="disTime text-3xl text-orange-400 font-semibold"></p>
      <br />
      <div className="flex  gap-2">
        <select
          className="optionTimer rounded-2xl text-black px-1 py-1 cursor-pointer flex flex-col justify-center items-center"
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
                className="text-black p-2 rounded-lg cursor-pointer "
                key={i}
                value={item.ctime}
              >
                {item.tname}
              </option>
            );
          })}
        </select>
        <input
          className="inputTime text-black p-1 px-4 rounded-2xl cursor-pointer"
          type="time"
          onChange={(e) => inputTimer(e)}
        />
      </div>

      <br />
      <div>
        {toggler ? (
          <button className="btn " onClick={startTimer}>
            ⫸
          </button>
        ) : (
          <button className="btn" onClick={stopTimer}>
            ▢
          </button>
        )}
        <button className="btn" onClick={resetTimer}>
          ↻
        </button>
      </div>
    </div>
  );
}
