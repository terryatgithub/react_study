import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import styles from "./index.module.css";
import logo from "./logo192.png";

// 基本使用 {}包裹
const name = "React";

const obj = {
  firstName: "Harry",
  lastName: "Potter",
};
// 函数
function formatName(obj) {
  return obj.firstName + " " + obj.lastName;
}
// JSX对象
const greet = <div>greet good</div>;

// 条件语句
const show = true; //false;

// 数组
const a = [0, 1, 2];

const jsx = (
  <div className={styles.app}>
    <div> hello, {name} </div>
    <div> {formatName(obj)} </div>
    {greet}
    {show ? greet : "请先登录"}
    {show && greet}
    <ul>
      // diff时首先比较type，然后比较key，所以同级同类型元素，key值必须得是唯一
      {a.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <img src={logo} className={styles.logo} style={{ width: "50px" }} />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

// {}就是jsx语法里调用js的一个入口
// 基本使用，表达式用{}包裹
// 函数
// JSX对象
// 条件语句
// 数组
// 属性
// css模块化