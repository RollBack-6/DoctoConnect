import "./SearchBar.css";

function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <input className="searchinput" type="text" placeholder="Search.." />
        <button className="searchbutton" type="submit">
          <img src="./Images/Search.png" width="26px" height="26px"></img>
        </button>
      </div>
    </>
  );
}
export default Searchbar;
