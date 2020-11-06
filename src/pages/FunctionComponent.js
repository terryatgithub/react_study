import React, { useState, useEffect } from "react";

// 用函数组件实现clock功能
export default function FunctionComponent(props) {
  // 函数组件用useState保存值
  const [date, setDate] = useState(new Date());

  // hooks：使用副作用
  useEffect(() => {
    // 相当于3个生命周期的集合:
    // componentDidMount componentDidUpdate componentWillUnmount
    console.log("useEffect");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 返回函数，在组件卸载时调用
    return () => clearInterval(timer);
  }, []); // 第二个参数表示依赖项，当依赖项发生变化时调用回调函数，否则不调用，避免cb一直调用的性能损失；

  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
