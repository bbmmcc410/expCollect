<template>
  <div class="pageTitle">
    <h2>{{title}}</h2>
    <br>
    <div class="notice">{{notice}}</div>
  </div>
</template>

<script>
  export default{
    props: ['title', 'notice'],
    data(){
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  .pageTitle{margin-bottom: 50px;}
  h2{
    font-size: 1.75rem;
    font-weight: 400;
    color: #1f2f3d;
  }
  .notice{
    color: #5e6d82;
  }
</style>
