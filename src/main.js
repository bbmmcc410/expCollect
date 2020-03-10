// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "element-ui/lib/theme-chalk/display.css"
import util from "@/assets/util.js"
import directives from "@/assets/vue-directives.js"
import "@/assets/css/common.css"

Vue.use(ElementUI)
Vue.config.productionTip = false

import commonComponents from "@/components/common/index.js"
Vue.use(commonComponents)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
