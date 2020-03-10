<template>
  <div>
    <page-title :title="'按钮 Button'" :notice="'常用按钮样式'"></page-title>
    <section-title :title="'基础用法'" :notice="'基础的按钮用法'"></section-title>
    <div class="container">
      <div class="row">
        <xh-button>常规</xh-button>
        <xh-button type="primary">primary</xh-button>
        <xh-button type="success">success</xh-button>
        <xh-button type="danger">danger</xh-button>
        <xh-button type="warning">warning</xh-button>
        <xh-button type="info">info</xh-button>
      </div>
      <code-area :code="code"></code-area>
    </div>
    <section-title :title="'禁用按钮'" :notice="'按钮的禁用方法'"></section-title>
    <div class="container">
      <div class="row">
        <xh-button disable>常规</xh-button>
        <xh-button disable type="primary">primary</xh-button>
        <xh-button disable type="success">success</xh-button>
        <xh-button disable type="danger">danger</xh-button>
        <xh-button disable type="warning">warning</xh-button>
        <xh-button disable type="info">info</xh-button>
      </div>
      <code-area :code="code2"></code-area>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        code: `<xh-button>常规</xh-button>\n`+
        `<xh-button type="primary">primary</xh-button>\n`+
        `<xh-button type="success">success</xh-button>\n`+
        `<xh-button type="danger">danger</xh-button>\n`+
        `<xh-button type="warning">warning</xh-button>\n`+
        `<xh-button type="info">info</xh-button>\n`,
        code2: `<xh-button disable>常规</xh-button>\n`+
        `<xh-button disable type="primary">primary</xh-button>\n`+
        `<xh-button disable type="success">success</xh-button>\n`+
        `<xh-button disable type="danger">danger</xh-button>\n`+
        `<xh-button disable type="warning">warning</xh-button>\n`+
        `<xh-button disable type="info">info</xh-button>\n`
      }
    },
    methods:{
    }
  }
</script>

<style>
</style>
