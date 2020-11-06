import React, { Component } from "react";

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: [false, false, false, false, false],
    };
    this.setRank = this.setRank.bind(this)
  }
  setRank = (index) => {
    let res = this.state.ranks.map((item, i) => i <= index);
    console.log(res);
    this.setState({
      ranks: res,
    });
  };
  render() {
    const { ranks } = this.state;
    return (
      <div id="rating">
        {ranks.map((rank, index) => (
          <span
            className={rank ? "active" : ""}
            key={index}
            onClick={() => this.setRank(index)}
          >
            *
          </span>
        ))}
      </div>
    );
  }
}

// document.body.innerHTML = "<div id='root'> </div>";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Rating />, rootElement);

// document.querySelectorAll("span")[2].click();
// console.log(document.getElementById("rating").outerHTML);
