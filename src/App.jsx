import "./App.css";
import { NavBar } from "./Components/NavBar";
import Timer from "./pages/Timer";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Timer />
      </div>
    </>
  );
}

export default App;
