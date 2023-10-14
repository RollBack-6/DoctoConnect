import React, { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";

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