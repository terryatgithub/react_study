import React, { Component } from "react";

// class组件实现clock功能
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // state存储状态
    this.state = {
      date: new Date(),
    };
  }

  // 组件挂载完成之后
  componentDidMount() {
    this.timer = setInterval(() => {
      // 更新state，不能直接赋值，必须用 this.setState更改
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  // 组件卸载之前执行
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
