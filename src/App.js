import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NewsCard from "./components/newsCard";
import axios from "axios";

function App() {
  const date = new Date();

  const info = axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1f502747b7f432fae5be42e37ab32bd`
    )
    .then(res => {
      const data = res.data.articles;
      const { title, content, url, urlToimage, source } = data[0];
      console.log(url);
    })
    .catch(err => console.log(err));

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-logo">
          <span className="logo text-light">Newslite</span>
        </div>
      </div>

      <div className="main">
        {/* <Router> */}
        <div className="menu-tab">
          <ul className="container">
            {/* <Link> */}
            <li>world</li>
            {/* </Link> */}
            {/* <Link> */}
            <li>Nigerian</li>
            {/* </Link> */}
            {/* <Link> */}
            <li>Sports</li>
            {/* </Link> */}
          </ul>
        </div>
        {/* </Router> */}
        <div className="main-info ">
          <div className="info container row"></div>
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
