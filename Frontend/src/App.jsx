import "./App.css";
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";
import Selection from "./Components/LeftColumn/Selection";

function App() {
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection/>
        </div>
        <div className="column right">
          <Doctor/>
        </div>
      </div>
    </>
  );
}

export default App;
