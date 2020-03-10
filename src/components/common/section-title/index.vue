<template>
  <div class="sectionTitle">
    <template v-if="title != ''">
      <h3>{{title}}</h3>
      <br>
    </template>
    <div class="notice">
      <p v-for="(item, index) in noticeArr">
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['title', 'notice'],
    computed:{
      noticeArr(){
        let notice = this.notice.split("<br>");
        return notice
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  .sectionTitle{
    margin: 20px 0;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 400;
    color: #1f2f3d;
  }
  .notice{
    color: #5e6d82;
  }
</style>
