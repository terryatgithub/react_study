import React, { Component } from "react";

// 正确使用setState
// 关于setState你应该了解三件事
// 1. 不要直接修改state
// 2. State的更新可能是异步的
// 3. State的更新会被合并

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    //   this.changeValue(1)
    document.getElementById("test").addEventListener("click", this.setCounter);
  }

  changeValue = (v) => {
    // setState 在合成事件和生命周期中都是异步的，这里说的异步其实是批量更新，达到优化性能的目的
    // this.setState(
    //   {
    //     counter: this.state.counter + v,
    //   },
    //   () => {
    //     // callback就是在state更新完成之后再执行
    //     console.log("counter: ", this.state.counter);
    //   }
    // );
    // 如果想要链式更新counter，需要给setState第一个参数传函数
    this.setState((state) => {
      return {
        counter: state.counter + v,
      };
    });
    // console.log("counter: ", this.state.counter);
  };

  setCounter = () => {
    // setState 在 setTimeout和原生事件中是同步的
    // setTimeout(() => {
    this.changeValue(1);
    this.changeValue(2); // state的更新会被合并，后面的会覆盖前面的
    this.changeValue(3);
    // }, 0);
  };

  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="test">原生事件: {this.state.counter}</button>
      </div>
    );
  }
}
