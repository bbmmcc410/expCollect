import Vue from "vue"
let _self = new Vue();
const util = {
  userInfo: {
    userName: 'xiaohei',
    password: 'xiaohei'
  },
  back:(e)=>{
    console.log(_self.$router);
    _self.$router.back(-1);
  }
}
Vue.prototype.$util = util;
export default util
