import "./App.css";
import SearchBar from "./Components/Right_Column/Overview/SearchBar";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";

function App() {
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection/>
        </div>
        <div className="column right">
           <SearchBar/>
        </div>
      </div>
    </>
  );
}

export default App;
