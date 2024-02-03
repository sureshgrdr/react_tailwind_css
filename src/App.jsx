import { useEffect, useState } from "react";
import "./App.css";

import { Counter } from "./apps/Counter";
import { NoteList } from "./apps/NoteList";
import { SimpleCalculator } from "./apps/SimpleCalculator";
import Timer from "./apps/Timer";

function App() {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").setAttribute("data-theme", "dark");
      setTheme(true);
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    theme
      ? document.querySelector("html").setAttribute("data-theme", "dark")
      : document.querySelector("html").setAttribute("data-theme", "light");
  }, [theme]);

  return (
    <>
      <div className="my-4  grid grid-cols-1 justify-center gap-2 sm:mx-1 md:mx-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <Timer />
        <NoteList />
        <Counter />
        <SimpleCalculator />
        <button
          className="fixed bottom-5 right-8 z-50 text-4xl opacity-30 transition hover:opacity-100 active:translate-y-1"
          title="dark/light"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          {theme ? "🌞" : "🌚"}
        </button>
      </div>
    </>
  );
}

export default App;
