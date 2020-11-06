import React from "react";

import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";

import SetStatePage from "./pages/SetStatePage";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

import ReduxPage from "./pages/ReduxPage";

import ReactReduxPage from "./pages/ReactReduxPage";

import RouterPage from "./pages/RouterPage";

import PureComponentPage from "./pages/PureComponentPage";

import LifeCyclePage from "./pages/LifeCyclePage";

// testDome start
import Message from "./pages/testDome/React/Message";
import TextInput from "./pages/testDome/React/TextInput";
// testDome end

// React 高阶特性 start
import HookPage from "./pages/HookPage";
import CustomHookPage from "./pages/CustomHookPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";

// React 高阶特性 end

// Prudential test start
import Test1 from "./pages/testDome/PruDential/Test1";
import Test3 from "./pages/testDome/PruDential/Test3";
import Test6 from "./pages/testDome/PruDential/Test6";

// Prudential test end

function App() {
  return (
    <div className="App">
      <Test1 />
      <Test3 />
      <Test6 />
      {/* <HookPage />
      <CustomHookPage />
      <UseMemoPage />
      <UseCallbackPage />
      <Message />
      <TextInput /> */}
      {/* <ClassComponent />
      <FunctionComponent />
      <SetStatePage />
      <HomePage />
      <UserPage />
      <ReduxPage />
      <ReactReduxPage />
      <RouterPage /> */}
      {/* <PureComponentPage /> */}
      {/* <LifeCyclePage /> */}
    </div>
  );
}

export default App;
