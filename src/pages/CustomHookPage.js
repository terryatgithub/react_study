import React, { useState, useEffect } from "react";

// 自定义Hook
// 有时候我们回想想要在组件之间复用一些逻辑状态，目前为止，有两种主流方案来解决这个问题：
// 1. 高阶组件 2. render props
// 自定义Hook可以让你在不增加组件的情况下达到同样的目的。

// 自定义Hook是一个函数，其名称以’use‘开头，函数内部可以调用其它的Hook。

// 2. Hook使用规则
// Hook就是Jvascript函数，但是使用他们会有2个额外的规则：
// 1. 只能在函数最外层调用hook： 不要在循环、条件判断或子函数中调用；
// 2. 只能在React的函数组件中调用Hook：不要在其它JavaScript函数中调用（还有一个地方可以调用Hook：就是在自定义的Hook中。）


export default function HookPage(props) {
  // 定义一个叫count的state变量，初始化为0
  const [count, setCount] = useState(0);

  // 1. Effect hook 所有的副作用都要写在下面这里：
  // 相当于 componentDidMount 和 componentDidUpdate 生命周期
  // 2. effect的条件执行
  useEffect(() => {
    console.log("count effect");
    // 只需要在count发生改变时执行就可以了
    document.title = `点击了${count}次`;
  }, [count]); //依赖项，只有参数2数组里的值发生改变，回调才执行，此时相当于调用 componentDidUpdate()

  return (
    <div>
      <h3>CustomHookPage</h3>
      <p>{count}</p>
      <p>{useClock().toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

// 自定义一个hook，命名要以use开头
function useClock() {
  const [date, setDate] = useState(new Date())

  // useEffect可以写多次
  useEffect(() =>{
    console.log('date effect');
    // timer
    // 只需要在componentDidMount时执行就可以了
    const timer = setInterval(() => {
        setDate(new Date());
      }, 1000);
    // 清除定时器，如果是在类组件，是在componentWillUnmount里
    // 这里是需要返回一个函数，里面做清除动作即可
    return () => clearInterval(timer)
  }, []) // 空数组说明没有依赖项，此时相当于componentDidMount

  return date
}