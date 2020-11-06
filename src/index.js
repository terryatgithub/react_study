import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
   {/* react-redux Provider为后代组件提供store，这里是全局提供store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// redux 数据变更也可以在这里刷新
// store.subscribe(() => {
//   console.log("index.js state发生变化了");
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
