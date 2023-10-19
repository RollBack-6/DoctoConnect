import "./SearchBar.css";

function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <input className="searchinput" type="text" placeholder="Search" />
      </div>
      <div className="searchbar1">
        <button className="searchbutton">
          <img
            className="search-image"
            src="./SVG_Images/Search.svg"
            width="35px"
          ></img>
        </button>
      </div>
    </>
  );
}
export default Searchbar;
