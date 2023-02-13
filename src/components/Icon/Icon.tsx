import {computed, defineComponent} from "vue";

import classes from './Icon.module.scss'
export default defineComponent({
  props:{
    IconName:{
      type:String,
      required:true
    },
    size:{
      type:String,
      default:"1rem"
    },
    IconColor:{
      type:String,
      default:""
    }
  },
  setup(props,context){
    const LastName = computed(()=>{
      return `#icon-${props.IconName}`
    })
    return ()=>{
      return   <svg aria-hidden='true' class={classes.iconSvg} style={{height:props.size,width:props.size}}>
        <use xlink:href={LastName.value}   fill='red'/>
      </svg>
    }
  }

})