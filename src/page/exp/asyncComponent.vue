<template>
  <div>
    <page-title :title="'异步组件 asyncComponent'" :notice="'一种动态渲染组件的方式'"></page-title>
    <div class="row">
      <xh-button @click="goPage">演示示例</xh-button>
    </div>
    <div v-for="(item, index) in list">
      <section-title :title="item.title" :notice="item.notice"></section-title>
      <div class="container">
        <code-area :code="codeArr[index]"></code-area>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list: [
          {title: '第一步 创建异步组件', notice: 'asyncComponent.js'},
          {title: '第二步 生成菜单目录', notice: 'menu.json'},
          {title: '第三步 注册所有组件', notice: 'menu.vue script 部分'},
          {title: '第四步 生成对应菜单', notice: 'menu.vue html 部分'}
        ],
        codeArr:[
          `let asyncComponent = {
  props: {
    componentName: {
      type: String,
      required: true
    },
    componentProps: {
      type: Object,
      default:()=>{

      }
    },
    styles: {
      type: Object,
      default: ()=>{

      }
    }
  },
  render(createElement){
    return createElement(this.componentName, {
      props: this.componentProps
    })
  }
}
export default asyncComponent;`,
          `[
  {
    "menuName": "一些小技巧",
    "isRoot": true,
    "children": [
      {"menuName": "Async 动态组件","name": "bmc-async", "path": "exp/asyncComponent"}
    ]
  },
  {
    "menuName": "基础组件",
    "isRoot": true,
    "children": [
      {"menuName": "Button 按钮","name": "bmc-button", "path": "basic/button"},
      {"menuName": "Color 色彩","name": "bmc-color", "path": "basic/color"}
    ]
  },
  {
    "menuName": "提示",
    "isRoot": true,
    "children": [
      {"menuName": "Message 消息提示","name": "bmc-message", "path": "notice/message"},
      {"menuName": "Toast 轻提示","name": "bmc-toast", "path": "notice/toast"}
    ]
  },
  {
    "menuName": "工具类组件",
    "isRoot": true,
    "children": [
      {"menuName": "Progress 审批流","name": "bmc-progress", "path": "tool/progress"}
    ]
  }
]`,
          `import Vue from "vue"
export default{
  data(){
    return {
      menuList: this.$store.getters['permission/getPermissionTree'],
      count: 0,
      allMenu: [],
      timer: null,
    }
  },
  components: {

  },
  methods: {
    selectPanel(item){
      this.$emit("selectPanel", item);
    },
    registerComponent(name, path){
      let _self = this;
      return import(path).then((component)=>{
        _self.count++;
        return Vue.component(name, component.default)
      })
    },
    checkComponents(allMenu){
      let _self = this;
      return new Promise((res, rej)=>{
        for(let i in allMenu){
          let o = allMenu[i];
          _self.registerComponent(o.name, o.path);
        }
        _self.timer = setInterval(()=>{
          if(_self.allMenu.length === _self.count){
            clearInterval(_self.timer);
            res();
          }
        }, 100);
      })
    },
    getAllComponents(){
      let _self = this;
      return new Promise((res, rej)=>{
        let arr = [];
        for(let i in _self.menuList){
          let o = _self.menuList[i].children;
          if(o.length > 0){
            for(let j in o){
              let k = o[j];
              arr.push(k);
            }
          }
        }
        if(arr.length > 0){
          res(arr);
        }else{
          rej("组件库为空！");
        }
      })
    },
    init(){
      let _self = this;
      _self.getAllComponents().then(arr=>{
        _self.allMenu = arr;
        _self.checkComponents(arr).then(()=>{
          _self.selectPanel(_self.allMenu[0]);
        })
      })
    }
  },
  mounted() {
    let _self = this;
    _self.$nextTick(()=>{
        _self.init();
    })
  }
}`,
  `<template>
  <div>
    <div v-for="menu in menuList">
      <header class="leftPanelItem">
        {{menu.menuName}}
      </header>
      <div class="leftPanelItem" @click="selectPanel(item)" v-for="item in menu.children">{{item.menuName}}</div>
    </div>
  </div>
</template>`
        ]
      }
    },
    methods:{
      goPage(){
        this.$router.push('/Demo-async');
      }
    }
  }
</script>

<style>
</style>
