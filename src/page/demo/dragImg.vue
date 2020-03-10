<template>
  <div class="container">
    <div
      v-title="123123123"
      @drop="dropHandle"
      @dragover="dragOverHandle"
      ref="imgRound"
      class="imgRound"
      style="">
    </div>
    <div class="infoRound">
      {{info}}
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        info: ''
      }
    },
    methods:{
      dragOverHandle(e){
        e.preventDefault();
      },
      dropHandle(e){
        e.preventDefault();
        let imgRound = this.$refs.imgRound;
        let paper = e.dataTransfer.files[0];
        let file = new FileReader();
        file.readAsDataURL(paper);
        file.onload = function(){
          let img = new Image();
          img.src = file.result;
          this.info = img;
          console.log(img)
          imgRound.appendChild(img);
        }
      }
    }
  }
</script>
<style>

</style>
<style scoped="scoped">
  .container{
    display: flex;
  }
  .imgRound img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .imgRound{
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .infoRound{
    width: 300px;
    height: 300px;
    overflow: auto;
    border: 1px solid #eee;
  }

  .imgRound:before{
    content: "请将图片拖拽到这里1";
    position: absolute;
    left: 75px;
    top: 125px;
    height: 50px;
    width: 150px;
    text-align: center;
    color: #ccc;
    line-height: 50px;
    z-index: 1;
  }
</style>
