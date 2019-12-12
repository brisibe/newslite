import React, { Component } from "react";
import Axios from "axios";

export default class newsCardContainer extends Component {
  state = {
    loading: false,
    data: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1f502747b7f432fae5be42e37ab32bd`
    ).then(res => {
      this.setState({
        data: res.data.articles[0],
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="mycard col-sm">
        <img
          className="mycard-img-top"
          src={this.state.data.urlToImage}
          alt=""
        ></img>

        <h5 className="mycard-title">{this.state.data.title}</h5>
        <div className="date-source">
          <p>BBC</p> <span>home</span>
        </div>
        <p className="mycard-text">{this.state.data.content}</p>
      </div>
    );
  }
}
