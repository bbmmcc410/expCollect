<template>
  <div>
    <page-title :title="'流程 Progress'" :notice="'审批流程历史组件'"></page-title>
    <section-title
      :title="'常用流程'"
      :notice="'一般场景下使用的流程'">
    </section-title>
    <div class="container">
      <div class="row">
        <xh-progress :progressData="progressData"></xh-progress>
      </div>
      <code-area :code="code"></code-area>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        code: `<template>\n`+
              `   <div>\n`+
              `       <xh-progress :progressData="progressData"></xh-progress>\n`+
              `   </div>\n`+
              `<template>\n`+
              `data(){\n`+
              `   return {\n`+
              `     progressData: [\n`+
              `       {userName: '周杰伦', sign: '反对', content: '这个建议不可行，希望各位好自为之！', time: '2019-12-14 10:25:22'},\n`+
              `       {userName: '林俊杰', sign: '同意', content: '可行，建议大家学习！', time: '2019-12-13 09:04:20'},\n`+
              `       {userName: '王力宏', sign: '同意', content: '建议所有同事共同学习！', time: '2019-12-12 18:25:02'},\n`+
              `       {userName: '潘玮柏', sign: '同意', content: '这个建议非常好，建议所有同事共同学习！', time: '2019-12-12 08:45:22'}\n`+
              `     ]\n`+
              `   }\n`+
              `}`,
        progressData: [
          {userName: '周杰伦', sign: '反对', content: '这个建议不可行，希望各位好自为之！', time: '2019-12-14 10:25:22'},
          {userName: '林俊杰', sign: '同意', content: '可行，建议大家学习！', time: '2019-12-13 09:04:20'},
          {userName: '王力宏', sign: '同意', content: '建议所有同事共同学习！', time: '2019-12-12 18:25:02'},
          {userName: '潘玮柏', sign: '同意', content: '这个建议非常好，建议所有同事共同学习！', time: '2019-12-12 08:45:22'}
        ]
      }
    }
  }
</script>

<style>
</style>
