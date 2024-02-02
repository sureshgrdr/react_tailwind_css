import React, { useState } from "react";

export const NoteList = () => {
  const [state, setState] = useState("");
  return (
    <div className="appUI">
      <p className="text-4xl font-bold">🗒️ Note List</p>
      <br />
      <div className="container flex flex-row items-center justify-center gap-2 ">
        <input
          type="text"
          className="w-80 rounded-2xl p-1 px-4 text-black focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500"
          placeholder="take note"
          // onKeyDown={(e) => console.log(e.key)}
          spellCheck="false"
        />
        <button className="cursor-pointer text-2xl drop-shadow-md active:translate-y-1">
          ➡️
        </button>
      </div>
      <br />

      {state}
    </div>
  );
};
