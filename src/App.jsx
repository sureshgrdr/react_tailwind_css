import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Counter } from "./apps/Counter";
import { NoteList } from "./apps/NoteList";
import Timer from "./apps/Timer";

function App() {
  return (
    <>
      <div className="container ">
        <NavBar />
        <div className="flex flex-row md:flex flex-wrap justify-center items-center">
          <Timer />
          <NoteList />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
