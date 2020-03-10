<template>
  <div>
    <pre class="codeArea">{{code}}</pre>
  </div>
</template>

<script>
  export default {
    props: ['code']
  }
</script>

<style scoped="scoped">
  pre.codeArea{
    user-select: text;
    padding-left: 15px;
    color: #6e757b;
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 13px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
  }
</style>
