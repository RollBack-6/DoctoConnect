
import'./SearchBar.css'

function Searchbar(){
    return(
        <>
        <div className="searchbar">
          <input
            className="searchinput"
            type="text"
            placeholder="Search Doctor"
          />
          <button className="searchbutton">
            <img
              src="./Images/Search.png"
              width="26px"
              height="26
                px"
            ></img>
          </button>
        </div>
        </>
    )
}
export default Searchbar