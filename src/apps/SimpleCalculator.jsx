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
          className="  container rounded-xl bg-clr-bkg px-4 py-2 text-xl font-medium text-clr-fnt/80 focus:outline-none"
          placeholder="Calculate"
          autoFocus
          autoCorrect="false"
        />
        <br />
        <input
          type="text"
          className="rounded-2xl  bg-transparent text-orange-500 focus:outline-none "
          readOnly
          // hidden
        />
      </div>
    </div>
  );
};
