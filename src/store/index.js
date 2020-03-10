import Vue from "vue"
import Vuex from "vuex"
import permission from "./module/permission"

Vue.use(Vuex)
const state = {
  menuList: []
}

const getters = {
  getMenuList(state){
    return state.userList;
  }
}

const mutations = {
  addCount(state, data){
    state.count+=1;
  }
}

const actions = {

}

const modules = {
  permission
}

let store = new Vuex.Store({
  //这里放全局参数
  state: state,
  //这里是get方法
  getters: getters,
  //这里是set方法
  mutations: mutations,
  //全局变量分组
  modules: modules

})


export default store
