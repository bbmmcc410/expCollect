<template>
  <div style="display: inline-block">
      <template v-if="disable">
        <div :class="type ? 'xh-button_wrapper disable ' + type : 'xh-button_wrapper'">
          <slot></slot>
        </div>
      </template>
      <template v-else>
        <div @click="handleClick" :class="type ? 'xh-button_wrapper ' + type : 'xh-button_wrapper'">
          <slot></slot>
        </div>
      </template>
  </div>
</template>

<script>
  export default{
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {

      }
    },
    methods:{
      handleClick(){
        this.$emit("click");
      }
    }
  }
</script>

<style scoped="scoped">
  .xh-button_wrapper{
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    transition: all .3s;
  }
  .xh-button_wrapper.default{color: #000;border: 1px solid #eaeefb;}
  .xh-button_wrapper.default:hover{color: #2879ff;}
  .xh-button_wrapper.default:active{border: 1px solid #2879ff;}

  .xh-button_wrapper.primary{background: #2879ff;}
  .xh-button_wrapper.success{background: #20a724;}
  .xh-button_wrapper.danger{background: #ff1f1f;}
  .xh-button_wrapper.warning{background: #e2d100;}
  .xh-button_wrapper.info{background: #bbbbbb;}

  .xh-button_wrapper.primary:hover,
  .xh-button_wrapper.success:hover,
  .xh-button_wrapper.danger:hover,
  .xh-button_wrapper.warning:hover,
  .xh-button_wrapper.info:hover{
    opacity: .7;
  }
  .xh-button_wrapper.primary:active,
  .xh-button_wrapper.success:active,
  .xh-button_wrapper.danger:active,
  .xh-button_wrapper.warning:active,
  .xh-button_wrapper.info:active{
    opacity: 1;
  }

  .xh-button_wrapper.disable{cursor: not-allowed !important;opacity: .7;}
  .xh-button_wrapper.disable:hover,
  .xh-button_wrapper.disable:active{
    opacity: .7;
  }
  .xh-button_wrapper.disable.default:hover,
  .xh-button_wrapper.disable.default:active{
    opacity: .7;
    color: #000;
    border: 1px solid #eaeefb;
  }
</style>
