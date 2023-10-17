import "./SearchBar.css";
import Statistics from "./Stats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Searchbar from "../NavSearch/SearchBar";

function SearchBar() {
  return (
    <>
       <div className="navbar">
        <div className="Page-name">
          <h2>Overview</h2>
        </div>
        <Searchbar/>
        <div className="aligment">
          <img
            className="N_image"
            src="./Images/Notification.png"
            alt="Overview"
            width="30px"
            height="30px"
          />
          <img className="search_image" src="./Images/Man.png" alt="Overview" />
          <button className="btn" id="Overview">
            Name
          </button>
        </div>

      </div>
      <Statistics/>
      <div className="Charts">
        <div className="Line">
          <LineChart/>
          </div>
        <div className="Bar">
          <BarChart/>
          </div>
         
        
      </div>
    </>
  );
}
export default SearchBar;
