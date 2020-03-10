import Vue from 'vue'
Vue.directive("record",{
  bind(el){
    console.log("bind");
    el.addEventListener("click", ()=>{
      console.log(el);
    })
  },
  inserted(el){
    console.log("inserted");
  },
  updated(el){
    console.log("updated");
  },
  componentUpdate(el){
    console.log("componentUpdate");
  },
  unbind(el){
    console.log("unbind");
  }
})
