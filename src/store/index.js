import { createStore } from "redux";

// redux
// 步骤（检查点）
// 1. createStore创建store
// 2. reducer 初始化、修改状态函数
// 3. getState 获取状态值
// 4. dispatch 提交更新
// 5. subscribe 变更订阅

// 定义state初始化和修改规则, reducer是一个纯函数
// 返回一个新的state
function counterReducer(state = 0, action) {
  console.log('state: ', state);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(counterReducer);

export default store