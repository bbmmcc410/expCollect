<template>
  <div>
    <div class="container1" ref="container1">
      <div
        ref="circle"
        class="circle"
        :style="{left: circleX+'px', top: circleY+'px'}"
        draggable="true"
        @drag="dragHandle"
        @dragend="dragEndHandle"
        @dragstart="dragStartHandle"></div>
    </div>
    x:{{circleX}} y:{{circleY}}
  </div>
</template>

<script>
  export default{
    data(){
      return {
        circleX: 100,
        circleY: 200,
        initX: 0,
        initY: 0
      }
    },
    methods:{
      dragStartHandle(ev){
        this.initY = ev.layerY;
        this.initX = ev.layerX;
      },
      dragHandle(ev){
        console.log(ev);
        let container = this.$refs['container1'];
        let conTop = container.getBoundingClientRect().top;
        let conLeft = container.getBoundingClientRect().left;
        let dom = this.$refs['circle'];
        let domTop = dom.getBoundingClientRect().top - conTop;
        let domLeft = dom.getBoundingClientRect().left - conLeft;
        this.circleY = domTop + ev.offsetY - this.initY;
        this.circleX = domLeft + ev.offsetX - this.initX;
      },
      dragEndHandle(ev){
        // console.log(ev);
        let container = this.$refs['container1'];
        let conTop = container.getBoundingClientRect().top;
        let conLeft = container.getBoundingClientRect().left;
        let dom = this.$refs['circle'];
        let domTop = dom.getBoundingClientRect().top - conTop;
        let domLeft = dom.getBoundingClientRect().left - conLeft;
        this.circleY = domTop + ev.offsetY - this.initY;
        this.circleX = domLeft + ev.offsetX - this.initX;
      }
    }
  }
</script>

<style scoped="scoped">
  .circle{
    background: rgba(2,2,2,1);
    /* border-radius: 50%; */
    height: 50px;
    width: 50px;
    position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
  }
  .container1{
    position: relative;
    cursor: hand;
    width: 700px;
    height: 700px;
    overflow: hidden;
    background: #eee;
  }
  /* .container1 img{} */
</style>
