import "./App.css";
import SearchBar from "./Components/Right_Column/Overview/SearchBar";
import Selection from "./Components/LeftColumn/Selection";
import Patient from "./Components/Right_Column/Patient/Patient";

function App() {
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection/>
        </div>
        <div className="column right">
          <Patient />
        </div>
      </div>
    </>
  );
}

export default App;
