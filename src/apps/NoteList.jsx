import React, { useState } from "react";

export const NoteList = () => {
  const [state, setState] = useState([]);

  const handleAddNote = () => {
    let note = document.querySelector(".inputNote");
    note.value ? setState([...state, note.value]) : "";
    note.value = "";
  };
  const handleEnter = (e) => {
    e.key === "Enter" && handleAddNote();
  };
  return (
    <div className="appUI">
      <p className="text-4xl font-bold">🗒️ Note List</p>
      <br />

      <div className="container flex flex-row items-center justify-center gap-2 ">
        <input
          type="text"
          className="inputNote w-80 rounded-3xl bg-clr-bkg p-2 px-4 text-clr-fnt/80  focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500"
          placeholder="take note"
          onKeyDown={(e) => handleEnter(e)}
          spellCheck="false"
        />
        <button className="btn-mini" onClick={handleAddNote}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <button
        className="btn-mini hover:bg-red-500"
        onClick={() => setState([])}
      >
        <span className="material-symbols-outlined">restart_alt</span>
      </button>
      <br />
      <ul>
        {state?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
