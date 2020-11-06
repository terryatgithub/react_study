// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  setShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <a href="#" onClick={this.setShow}>
          Want to buy a new car?
        </a>
        {show && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

export default Message;

// document.body.innerHTML = "<div id='root'> </div>";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Message />, rootElement);

// console.log("Before click: " + rootElement.innerHTML);
// document.querySelector("a").click();
// console.log("After click: " + rootElement.innerHTML);
