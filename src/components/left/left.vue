<template>
  <div>
    <div v-for="(menu, index) in menuList">
      <header class="leftPanelItem">
        {{menu.menuName}}
      </header>
      <div
        :class="item.name == currentPanel ? 'leftPanelItem active' : 'leftPanelItem'"
        @click="selectPanel(item, index)"
        v-for="item in menu.children">
          {{item.menuName}}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  export default{
    data(){
      return {
        menuList: this.$store.getters['permission/getPermissionTree'],
        count: 0,
        allMenu: [],
        timer: null,
        currentPanel: ''
      }
    },
    components: {

    },
    methods: {
      selectPanel(item, index){
        this.currentPanel = item.name;
        document.title = item.menuName;
        this.$emit("selectPanel", item);
      },
      registerComponent(name, path){
        let _self = this;
        return import(`@/page/${path}`).then((component)=>{
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
            console.log(`当前共${_self.count}个组件，全部加载完毕！！`)
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
  }
</script>

<style scoped="scoped">
  .leftPanelItem{
    transition: all .3s;
    line-height: 35px;
  }
  .leftPanelItem.active{color: var(--hover_font_color);}
  div.leftPanelItem{cursor: pointer;}
  div.leftPanelItem:hover{
      color: var(--hover_font_color);
  }

  header.leftPanelItem{
    font-size: var(--header_font_size);
    color: var(--header_color);
  }
</style>
