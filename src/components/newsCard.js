import React, { Component } from "react";
import axios from "axios";

export default class newsCard extends Component {
  render() {
    return (
      <div className="mycard col-sm">
        <img className="mycard-img-top" src=""></img>

        <h5 className="mycard-title">Card title has declared war on drugs</h5>
        <div className="date-source">
          <p>BBC</p> <span>2018</span>
        </div>
        <p className="mycard-text">
          Some quick example text to build on the card title and j af aj fa jfr
          rrj rfj iron fnjvkjrn make up the bulk of the card's content.
        </p>
      </div>
    );
  }
}
