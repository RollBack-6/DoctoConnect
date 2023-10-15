import "./Header.css";

function Header() {
    return(
        <>
        <div className="navbar">
            <div className="heading">
                <h2>Doctor</h2>
            </div>
            <div className="searchbar">
                <input className="searchinput" type="text" placeholder="Search Doctor" />
                <button className="searchbutton" ><img src="./Images/Search.png" width="26px" height="26
                px"></img></button>
            </div>
        </div>
        </>
    );
}

export default Header;