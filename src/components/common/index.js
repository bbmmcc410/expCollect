import Vue from "vue";

let components = require.context('./', true, /\.vue/);

let exp = {
  install(){
     components.keys().forEach(fileName => {
       // 组件实例
       const reqCom = components(fileName)
       // 截取路径作为组件名
       const reqComName = fileName.split('/')[1]
       // 组件挂载
       Vue.component(reqComName, reqCom.default || reqCom)
     })
  }
}

export default exp;
