import React, { Component } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

// 组件复合
export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
  }

  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    console.log("children", children);
    return (
      <div>
        {showTopBar && <TopBar />}
        {/* <h3> Layout</h3> */}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>button</button>
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
