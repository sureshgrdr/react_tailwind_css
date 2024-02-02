import React from "react";

const calcBtn = [
  {
    name: "1",
    value: 1,
  },
  {
    name: "2",
    value: 2,
  },
];

export const SimpleCalculator = () => {
  return (
    <div className="appUI">
      <p className="text-2xl font-bold ">🧮 Simple Calculator</p>
      <br />
      <div className="container ">
        <input
          type="text"
          className="  container rounded-xl p-1 px-2 text-xl text-black focus:outline-none"
          placeholder="Calculate"
          autoFocus
        />
        <br />
        <input
          type="text"
          className="rounded-2xl  bg-transparent text-black focus:outline-none "
          readOnly
          // hidden
        />
      </div>
    </div>
  );
};
