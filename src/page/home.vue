<template>
  <div class="homePage">
    <div class="content">
      <div class="left">
          <leftMenu @selectPanel="selectPanel"></leftMenu>
      </div>
      <div class="right">
        <div class="contentWrapper">
          <template v-if="currentComponent">
            <asyncComponent :componentName="currentComponent.name"></asyncComponent>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import leftMenu from "@/components/left/left.vue"
  import asyncComponent from "@/page/asyncComponent.js"
  export default{
    data(){
      return {
        currentComponent: null
      }
    },
    components: {
      leftMenu,
      asyncComponent
    },
    methods: {
      selectPanel(item){
        this.currentComponent = item;
      }

    },
    mounted() {

    }
  }
</script>
<style>
  .container{
    padding: 10px;
    border-radius: 5px;
    transition: all .3s;
    border: 1px solid #eaeefb;
  }
  .container:hover{
    box-shadow: 0px 3px 9px 1px rgba(0,0,0,.052);
  }
  .row{margin-bottom: 10px;}
  .section{margin-bottom: 40px;}
  :not(.codeArea){
    /* user-select: none; */
  }
</style>
<style scoped="scoped">
  .homePage{
    min-width: 1500px;
    font-size: var(--font_size);
  }
  .header{
    height: 3.4375rem;
    display: flex;
  }
  .header>div{
    border: 1px solid var(--border_color);
    text-align: center;
    line-height: 3.4375rem;
    flex: 1;
  }
  .content{
    width: 75%;
    margin: 0 auto;
    display: flex;
  }
  .content>div{padding: var(--padding_left_size);}
  .content>div.left{
    width: 200px;
  }
  .content>div.right{
    width: calc(100% - 200px);
    height: 100vh;
    overflow: auto;
  }
  .content>div.right{}

   /* 设置滚动条的样式 */
  .content>div.right::-webkit-scrollbar {
    width:2px;
    background-color: #eee;
  }

    /* 滚动槽 */
  .content>div.right::-webkit-scrollbar-track {
    border-radius:10px;
  }

    /* 滚动条滑块 */
  .content>div.right::-webkit-scrollbar-thumb {
    border-radius:10px;
    background:black;
  }
</style>
