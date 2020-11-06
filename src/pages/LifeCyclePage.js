import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LifeCyclePage extends Component {
  static defaultProps = {
    // msg: "omg",
  };
  static propTypes = {
    // msg: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // getDerivedStateFromProps 会在调用 render方法之前被调用，
  // 并且在初始挂载及后续更新时都会被调用，
  // 它应返回一个对象来更新state，如果返回null则不更新任何内容
  //   请注意：不管原因是什么，都会在每次渲染前触发此方法，
  //   这与UNSAFE_componentWillReceiveProps形成对比：后者仅在父组件重新渲染时触发，而不是在内部调用setState时
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextProps, nextState, this.state);
    return true;
  }

  // 在render之后，componentDidUpdate之前被调用
  // getSnapshotBeforeUpdate 在最新一次渲染输出(提交到DOM节点)之前调用，它使得组件能在发生更改之前从DOM中捕获一些信息（例如滚动位置）
  // 次生命周期的任何返回值将作为参数传递给 componentDidUpdate(prevProps, prevState, snapshot)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    //   return null
    return {
      msg: "我是getSnapshotBeforeUpdate",
    };
  }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render: ", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    );
  }
}

class Child extends Component {
  // 初次渲染时不会执行
  // 只有在已挂载的组件接收新props的时候才会执行
  //   componentWillReceiveProps(nextProps) {
  //     console.log("child componentWillReceiveProps", nextProps);
  //   }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log("child render");
    const { count } = this.props;
    return (
      <div>
        <h3>child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
