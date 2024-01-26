import React, { useState } from "react";

export default function Timer() {
  let time = 300;
  let timerId;
  const timer = () => {
    if (timerId) clearInterval(timerId);
    let distime = document.querySelector(".disTime");
    function tick() {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(Math.trunc(time % 60)).padStart(2, 0);

      distime.textContent = `${min}:${sec}`;
      //   console.log(`${min}:${sec}`);
      time--;
    }
    tick();
    const watch = setInterval(tick, 1000);

    return watch;
  };
  if (timerId) clearInterval(timerId);

  const toggleBtn = (btn) => {
    let toggle = document.querySelector(`.${btn}`);
    toggle.style.display === "none"
      ? (toggle.style.display = "block")
      : (toggle.style.display = "none");
    console.log(toggle);
  };

  return (
    <div>
      <p className="disTime">00:00</p>
      <br />
      <button
        className="btn startBtn"
        onClick={() => {
          timerId = timer();
          toggleBtn("startBtn");
        }}
      >
        ◷ Start
      </button>
      <button
        className="btn stopBtn"
        onClick={() => {
          clearInterval(timerId);
          toggleBtn("stopBtn");
        }}
      >
        ⊗ Stop
      </button>
    </div>
  );
}
