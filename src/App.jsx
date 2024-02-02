import "./App.css";

import { Counter } from "./apps/Counter";
import { NoteList } from "./apps/NoteList";
import { SimpleCalculator } from "./apps/SimpleCalculator";
import Timer from "./apps/Timer";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:mx-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:mx-4 justify-center ">
        <Timer />
        <NoteList />
        <Counter />
        <SimpleCalculator />
      </div>
    </>
  );
}

export default App;
