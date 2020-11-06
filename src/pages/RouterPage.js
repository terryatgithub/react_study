import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// react-router
// react-router 包含3个库:
// react-router 提供最基本的路由功能，实际使用的时候回根据应用运行的环境选择安装以下
// react-router-dom 在浏览器中使用
// react-router-native 在rn中使用

// react-router 奉行一切皆组件的思想，
// 路由器-Router
// 链接- Link
// 路由- Route
// 独占路由- Switch
// 重定向- Redirect
// 以上功能都以组件形式存在

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          {/* Link只是跳转，本质是个a标签 */}
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>

          {/* Route是匹配 */}
          <Switch>
            <Route
              exact // 精确匹配
              path="/"
              // 3种渲染方式及优先级
              // children > component > render
              // children: 有时候不管location是否匹配，你都需要渲染一些内容，这时候可以用children
              // component/render: 只有当location匹配的时候才渲染
              // children={() => <div>children</div>}
              component={HomePage}
              // render={()=><div>render</div>}
            />
            <Route path="/user" component={UserPage} />
            {/* 404路由 */}
            <Route component={EmptyPage} /> 
          </Switch>
        </Router>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>EmptyPage 404</h3>
      </div>
    );
  }
}
