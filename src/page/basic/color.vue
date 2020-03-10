<template>
  <div>
    <page-title :title="'色彩 Color'" :notice="'Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。'"></page-title>
    <div v-for="item in list">
      <section-title :title="item.title" :notice="item.notice"></section-title>
      <div class="container">
        <div class="row">
          <xh-button :type="item.flag">{{item.title}} <small>{{item.color}}</small></xh-button>
        </div>
        <code-area :code="item.code"></code-area>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        list: [
          {title: '主色',notice: '采用友好，易接受的浅蓝作为主色', flag: 'primary', color: '#2879ff', code: `color: #2879ff`},
          {title: '警告色',notice: '采用引人注目的深红作为警告色', flag: 'danger', color: '#ff1f1f', code: `color: #ff1f1f`},
          {title: '成功色',notice: '采用墨绿色作为成功色', flag: 'success', color: '#20a724', code: `color: #20a724`},
          {title: '信息色',notice: '采用深灰色作为信息色', flag: 'info', color: '#bbbbbb', code: `color: #bbbbbb`},
          {title: '异常色',notice: '采用黄色作为异常色', flag: 'warning', color: '#e2d100', code: `color: #e2d100`},
        ]
      }
    }
  }
</script>

<style>
</style>
