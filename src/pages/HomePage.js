import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="商城首页">
        {/* <div>
          <h3>HomePage</h3>
        </div> */}
        {/* // 实现类似Vue具体插槽的用法 */}
        {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: '这是个文本',
          btnClick: ()=> {
              console.log('btnclick')
          }
        }}
      </Layout>
    );
  }
}
