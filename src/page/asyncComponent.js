let asyncComponent = {
  props: {
    componentName: {
      type: String,
      required: true
    },
    componentProps: {
      type: Object,
      default:()=>{
        
      }
    },
    styles: {
      type: Object,
      default: ()=>{
        
      }
    }
  },
  render(createElement){
    return createElement(this.componentName, {
      props: this.componentProps
    })
  }
}
export default asyncComponent;