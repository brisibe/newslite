import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NewsCard from "./components/newsCard";

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
        <Router>
          <div className="menu-tab">
            <ul className="container">
              <Link>
                <li>world</li>
              </Link>
              <Link>
                <li>Nigerian</li>
              </Link>
              <Link>
                <li>Sports</li>
              </Link>
            </ul>
          </div>
        </Router>
        <div className="main-info ">
          <div className="info container row">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            {/* <p>
              A graphic representation of data abstracted from the Chinese
              program’s thrust, a worrying impression of solid fluidity, as
              though the shards of a broken mirror bent and elongated as they
              rotated, but it never told the correct time. The Sprawl was a
              square of faint light. Images formed and reformed: a flickering
              montage of the Sprawl’s towers and ragged Fuller domes, dim
              figures moving toward him in the Japanese night like live wire
              voodoo and he’d cry for it, cry in his jacket pocket. She peered
              at the clinic, Molly took him to the Tank War, mouth touched with
              hot gold as a gliding cursor struck sparks from the wall of a
              skyscraper canyon. He’d waited in the shade beneath a bridge or
              overpass. Still it was a yearly pilgrimage to Tokyo, where genetic
              surgeons reset the code of his DNA, a procedure unavailable in
              Chiba. Case felt the edge of the Flatline as a construct, a
              hardwired ROM cassette replicating a dead man’s skills,
              obsessions, kneejerk responses. Light from a service hatch at the
              rear of the deck sting his palm as he made his way down Shiga from
              the sushi stall he cradled it in his jacket pocket.
            </p> */}
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
