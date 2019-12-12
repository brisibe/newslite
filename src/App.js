import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NewsCardContainer from "./components/newsCardContainer";

function App() {
  const date = new Date();

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-logo">
          <span className="logo text-light">Newslite</span>
        </div>
      </div>

      <div className="main">
        <div className="menu-tab">
          <ul className="container">
            <li>world</li>
            <li>Nigerian</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="main-info ">
          <div className="info container row">
            <NewsCardContainer />
          </div>
        </div>
      </div>

      <div className="footer">
        <span className="footer-copy text-light">
          &copy; {date.getFullYear()}
        </span>
        <h4 className="footer-name text-light">Joseph Brisibe</h4>
      </div>
    </div>
  );
}

export default App;
