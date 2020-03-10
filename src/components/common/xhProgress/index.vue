<template>
  <div class="xh-progress_wrapper">
    <div v-for="item in progressData" class="xh-progress_item">
      <div class="xh-progress_header">
        {{item.userName}}
      </div>
      <div class="xh-progress_info">
        {{item.content}}
      </div>
      <div class="xh-progress_footer">
        {{item.time}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:['progressData'],
    data(){
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  .xh-progress_wrapper{}
  .xh-progress_item{
    cursor: pointer;
    position: relative;
    padding: 0 20px;
    font-size: 14px;
    padding-bottom: 10px;
    border-left: 1px solid var(--border_color);
  }
  .xh-progress_item:before{
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border: 1px solid var(--border_active_color);
    border-radius: 50%;
    left: -3px;
    background: #fff;
    top: calc(50% - 2px - 6px);
    transition: all .3s;
  }
  .xh-progress_item:hover:before{
    width: 10px;
    height: 10px;
    left: -6px;
    top: calc(50% - 5px - 6px);
  }
  .xh-progress_item>div{
    padding-bottom: 6px;
  }
  .xh-progress_header{
    font-size: 18px;
    font-weight: 500;
  }
  .xh-progress_info{
    font-weight: 200;
  }
  .xh-progress_footer{
    color: #bbbbbb;
    font-weight: 200;
  }
</style>
