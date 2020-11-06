import React, { useState, useEffect } from "react";
import SetStatePage from "./SetStatePage";

// 1. 认识Hook
// Hook是什么？ Hook是一个特殊的函数，它可以让你‘钩入‘React的特性，例如：useState是允许你在React函数组件中添加state的Hook

// 什么时候我会用Hook？ 如果你在编写函数组件并意识到需要向其添加一些state，以前的做法是必须将它转化为class组件，现在你可以再现有的函数组件中使用Hook

// 2. 使⽤ Effect Hook
// Effect Hook 可以让你在函数组件中执⾏副作⽤操作:
// 数据获取，设置订阅以及⼿动更改 React 组件中的 DOM 都属于副作⽤。不管你知不知道这些操作，或
// 是“副作⽤”这个名字，应该都在组件中使⽤过它们

// 在函数组件主体内（这⾥指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录⽇志以及执
// ⾏其他包含副作⽤的操作都是不被允许的，因为这可能会产⽣莫名其妙的 bug 并破坏 UI 的⼀致性。
// 使⽤ useEffect 完成副作⽤操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执⾏。你可以
// 把 effect 看作从 React 的纯函数式世界通往命令式世界的逃⽣通道

// 默认情况下，effect 将在每轮渲染结束后执⾏，但你可以选择让它 在只有某些值改变的时候 才执⾏

// 3. effect 的条件执⾏
// 默认情况下，effect 会在每轮组件渲染完成后执⾏。这样的话，⼀旦 effect 的依赖发⽣变化，它就会被
// 重新创建。
// 然⽽，在某些场景下这么做可能会矫枉过正。⽐如，在上⼀章节的订阅示例中，我们不需要在每次组件
// 更新时都创建新的订阅，⽽是仅需要在 source props 改变时重新创建。
// 要实现这⼀点，可以给 useEffect 传递第⼆个参数，它是 effect 所依赖的值数组。更新后的示例如
// 下：
// 此时，只有当 useEffect第⼆个参数数组⾥的数值 改变后才会重新创建订阅

// 4. 清除Effect
// 通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这⼀点， useEffect
// 函数需返回⼀个清除函数，以防⽌内存泄漏，清除函数会在组件卸载前执⾏

export default function HookPage(props) {
  // 定义一个叫count的state变量，初始化为0
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // 1. Effect hook 所有的副作用都要写在下面这里：
  // 相当于 componentDidMount 和 componentDidUpdate 生命周期
  // 2. effect的条件执行
  useEffect(() => {
    console.log("count effect");
    // 只需要在count发生改变时执行就可以了
    document.title = `点击了${count}次`;
  }, [count]); //依赖项，只有参数2数组里的值发生改变，回调才执行，此时相当于调用 componentDidUpdate()

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

  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <p>{date.toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
