// https://blog.csdn.net/suxuelengyin/article/details/83055965
// 解决方法是，将元素收集器或者nodelist转换为数组，通过复制数组，来转换为静态。再或者，用querySelectAll。再再或者，优化函数，考虑到动态就可以了。

function appendChildren(decorateDivFunction) {
    var allDivs = document.getElementsByTagName("div");
    // 1. querySelectorAll 是静态的Nodelist
    // var allDivs = document.querySelectorAll("div");
    // 2. 将元素收集器转换为数组，通过复制数组，来转换为静态
    // allDivs = Array.from(allDivs)

    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDivFunction(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id="a">
    <div id="b">
    </div>
  </div>`;
  
  //appendChildren(function(div) {});
  console.log(document.body.innerHTML);