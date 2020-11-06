import React, { Component, PureComponent } from "react";

// PureComponent
// 1. 实现性能优化
//    PureComponent 是定制了 shouldComponentUpdate 后的 Component
//
// 2. 浅比较
// PureComponent组件缺点主要有
//  1. 必须要用class形式
//  2. PureComponent实现的 shouldComponentUpdate 对state的类属性实现的是 浅比较，只比较外面一层
// 2.1 仅在你的props和state较为简单时才使用PureComponent； 或者在深层数据结构发生变化时用forceUpdate()来确保组件被正确的更新
// 2.2 此外PureComponent中的shouldComponentUpdate将跳过所有子组件数的prop更新，因此，请确保所有子组件也都是‘纯’的组件
// 3. 与Component差异
// PureComponent 与 Component会很相似
// 区别在于
//     1. Component并未实现 shouldComponentUpdate
//     而PureComponent以浅层对比prop和state的方式实现了该函数
//     2. 如果赋予 React组件相同的props和state，render()函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能

// export default class PureComponentPage extends Component {
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: { num: 0 },
    };
  }

  setCount = () => {
    this.setState({ count: 100 });
    // this.setState({ count: 100, obj: { num: 1000 } });
  };

  // shouldComponentUpdate 生命周期函数 只有值发生变化时才更新，否则不更新，实现了性能优化
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.count !== this.state.count;
  //   }

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    );
  }
}
