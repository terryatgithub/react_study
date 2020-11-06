import React, { Component } from "react";
import { connect } from "react-redux";

// react-redux提供了两个api：
// 1. Provider 为后代组件提供store
// 2. connect 为组件提供数据和变更方法

// connect是高阶函数
export default connect(
  // mapStateToProps 把state映射到props上
  (state) => ({ num: state }),
  // mapDispatchToProps 把dispatch方法映射到props上
  {
    add: () => ({ type: "ADD" }),
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props: ", this.props);
      const { num, dispatch, add } = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          {/* 1. 可以用dispatch方法 */}
          <button onClick={()=>dispatch({type: 'ADD'})}>add</button>
          {/* 2. 也可以用这里的add方法 */}
          <button onClick={add}>add</button>
        </div>
      );
    }
  }
);
