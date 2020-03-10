<template>
  <div>
    <page-title :title="'Vue最佳实践'" :notice="'五招让你成为Vue大师'"></page-title>
    <div v-for="(item, index) in list">
      <section-title :title="item.title" :notice="item.notice"></section-title>
      <div class="container">
        <code-area :code="codeArr[index]"></code-area>
      </div>
    </div>
    <div>
      <div>
        <input v-model="searchInputValue" type="text">
        <span v-for="item in listData">
          {{item}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    watch:{
      searchInputValue: {
          handler: 'fetchPostList',
          immediate: true
      }
    },
    data(){
      return {
        searchInputValue: '',
        list: [
          {title: '第一招：化繁为简的Watchers', notice: '场景还原：进入页面获取列表数据，筛选条件更新，再次获取数据'},
          {title: '', notice: `首先，在watchers中，可以直接使用函数的字面量名称；<br>其次，声明immediate:true表示创建组件时立马执行一次。`}
        ],
        listData: [],
        codeArr: [
          `//进入页面获取列表数据\ncreated(){\n    this.fetchPostList()\n},\nwatch: {\n    //监控筛选条件，再次获取列表数据\n    searchInputValue(){\n        this.fetchPostList()\n    }\n}`,
          `//进入页面获取列表数据\nwatch: {\n    //监控筛选条件，再次获取列表数据\n    searchInputValue: {\n        handler: 'fetchPostList',\n        immediate:  true\n    }\n}`,
        ]
      }
    },
    methods: {
      goPage(){
        console.log(123);
      },
      fetchPostList(){
        let arr = [];
        for(let i = 0;i < this.searchInputValue;i++){
          arr.push(i);
        }
        this.listData = arr;
      }
    }
  }
</script>

<style>
</style>
