import React, { useState, useCallback, Component, PureComponent } from "react";

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState("");

  // 把内联回调函数及依赖项数组作为参数传入useCallback，它将返回该回调函数的memorized版本，该回调函数仅在某个依赖项改变时才会更新。
//   当你把回调函数传递给经过优化的、并使用引用相等性去避免非必要渲染的子组件时，它将非常有用
  const addClick = useCallback(() => {
      console.log('addClick');
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}

class Child extends PureComponent {
  render() {
    console.log("child render");
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>child add</button>
      </div>
    );
  }
}
