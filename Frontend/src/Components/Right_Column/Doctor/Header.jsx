import "./Header.css";
import Searchbar from "../NavSearch/SearchBar";
function Header() {
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <h2>Doctor</h2>
        </div>
            <Searchbar/>
      </div>
    </>
  );
}

export default Header;
