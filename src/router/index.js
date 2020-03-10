import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import dragImg from '@/page/demo/dragImg'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: "/",
    	name: "home",
    	component: home
    },
    {
      path: "/dragImg",
      name: "dragImg",
      component: dragImg
    }
  ]
})
