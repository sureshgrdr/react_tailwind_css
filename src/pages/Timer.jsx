import React, { useState } from "react";

export default function Timer() {
  const [toggler, setToggler] = useState(true);
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

  return (
    <div>
      <p className="disTime">00:00</p>
      <br />
      {toggler ? (
        <button
          className="btn startBtn"
          onClick={() => {
            setToggler(false);
            timerId = timer();
          }}
        >
          ◷ Start
        </button>
      ) : (
        <button
          className="btn stopBtn"
          onClick={() => {
            setToggler(true);
            clearInterval(timerId);
          }}
        >
          ⊗ Stop
        </button>
      )}
    </div>
  );
}
