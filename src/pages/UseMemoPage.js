import React, { useState, useEffect, useMemo } from "react";

export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);

  // 把’创建‘函数和依赖项数组作为参数传入useMemo，它仅会在某个依赖项改变时才重新计算memorized值，
  // 这种优化有助于避免在每次渲染时都进行高开销的计算
  // 当前的计算只跟count有关
  const expensive = useMemo(() => {
    console.log("expensive..");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    // 只有count改变的时候，当前函数才会重新执行
  }, [count]);

  const [value, setValue] = useState("");
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <p>expensive: {expensive}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
