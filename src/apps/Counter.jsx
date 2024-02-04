import React, { useReducer } from "react";

const initialState = 0;
const countBy = 3;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + countBy <= 20 ? (state += countBy) : "Limit Reached";
    case "decreament":
      return state - countBy >= 0 ? (state -= countBy) : "Limit Reached";
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="appUI">
      <p className="text-4xl font-bold">🎉 Counter</p>
      <br />
      <p className="text-3xl font-semibold text-orange-400">{count}</p>
      <br />
      <div className="flex flex-row flex-wrap items-center justify-center">
        <button className="btn" onClick={() => dispatch("increament")}>
          Add
        </button>
        <button className="btn" onClick={() => dispatch("decreament")}>
          Sub
        </button>
        <button
          className="btn hover:bg-red-500"
          onClick={() => dispatch("reset")}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
