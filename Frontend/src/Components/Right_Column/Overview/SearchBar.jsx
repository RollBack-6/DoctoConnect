import "./SearchBar.css";
import Statistics from "./Stats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Searchbar from "../NavSearch/SearchBar";
import DateDisplay from "./Date";

function SearchBar() {
  return (
    <>
      <div className="Onavbar">
        <div className="Page-name">
          <h2>Overview</h2>
        </div>
        <DateDisplay/>
        <img className="language" src="./SVG_Images/translate.svg" />
      </div>
      <Statistics />
      <div className="Charts">
        <div className="Line">
          <LineChart />
        </div>
        <div className="Bar">
          <BarChart />
        </div>
      </div>
    </>
  );
}
export default SearchBar;

