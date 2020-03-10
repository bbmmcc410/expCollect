<template>
  <div>
    <page-title :title="'Vue拖拽实践'" :notice="'拖拽图片预览'"></page-title>
    <div v-for="(item, index) in list">
      <section-title :title="item.title" :notice="item.notice"></section-title>
      <div class="container" v-if="codeArr[index]" >
        <code-area :code="codeArr[index]"></code-area>
      </div>
    </div>
    <div
    <xh-button type="primary" @click="dragImgPreview">预览</xh-button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list: [
          {
            title: '第一布：书写容器',
            notice: '写一个用来放置图片的div容器，定义好容器尺寸，定义容器的ref属性方便使用',
          },
          {
            title: '第二步：容器添加事件',
            notice: '添加dragover&&drop事件，避免执行图片拖拽到浏览器的默认事件（全屏预览图片）'
          },
          {
            title: '第三步：拖拽图片进入',
            notice: '拖拽准备好的图片进入该容器中，查看预览'
          }
        ],
        codeArr: [
          `<div
  style="width: 300px;height: 300px;border: 1px solid #eee;"
  ref="imgRound">
</div>`,
          `html
<div
  @dragover="dragOverHandle"
  @drop="dropHandle"
  style="width: 300px;height: 300px;border: 1px solid #eee;"
  ref="imgRound">
</div>

js
dragOverHandle(e){
  e.preventDefault();
},
dropHandle(e){
  e.preventDefault();
  let imgRound = this.$refs.imgRound;
  let paper = e.DataTransfer.files[0];
  let file = new FileReader();
  file.readAsDataURL(paper);
  file.onload = function(){
    let img = new Image();
    img.src = file.result;
    imgRound.appendChild(img);
  }
}
`
        ]
      }
    },
    methods: {
      dragImgPreview(){
        window.open('#/dragImg');
      },
      dragOverHandle(e){
        e.preventDefault();
      },
      dropHandle(e){
        e.preventDefault();
        let imgRound = this.$refs.imgRound;
        let paper = e.DataTransfer.files[0];
        let file = new FileReader();
        file.readAsDataURL(paper);
        file.onload = function(){
          let img = new Image();
          img.src = file.result;
          imgRound.appendChild(img);
        }
      }
    }
  }
</script>

<style>
</style>
