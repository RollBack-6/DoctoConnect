import "./Emergency.css";
import Searchbar from "../NavSearch/SearchBar";

function Emergency() {
  return (
    <>
      <div className="emergency-heading">
        <h2>Emergency</h2>
      </div>
      <div className="emergency-search">
        <Searchbar />
      </div>
    </>
  );
}

export default Emergency;
