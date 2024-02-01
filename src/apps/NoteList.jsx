import React, { useState } from "react";

export const NoteList = () => {
  const [state, setState] = useState("");
  return (
    <div className="appUI">
      <p className="text-4xl font-bold">🗒️ Note List</p>
      <br />
      <div className="flex flex-row  gap-2 items-center justify-center ">
        <input
          type="text"
          className="text-black p-1 px-4 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500"
          placeholder="take note"
          // onKeyDown={(e) => console.log(e.key)}
          spellCheck="false"
        />
        <button className="text-2xl cursor-pointer active:translate-y-1 drop-shadow-md">
          ➡️
        </button>
        <br />
        {state}
      </div>
    </div>
  );
};
