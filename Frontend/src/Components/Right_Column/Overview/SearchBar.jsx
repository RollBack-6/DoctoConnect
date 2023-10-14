import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="nav">
        <div className="Page-name">
          <h2>Overview</h2>
        </div>
        <div className="aligment">
          <img
            className="N_image"
            src="./Images/Notification.png"
            alt="Overview"
            width="30px"
            height="30px"
          />
          <img className="H_image" src="./Images/Man.png" alt="Overview" />
          <button className="btn" id="Overview">
            Name
          </button>
          
        </div>
      </div>
    </>
  );
}
export default SearchBar;
