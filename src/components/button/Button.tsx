import {defineComponent} from "vue";
import Icon from '../Icon/Icon'
import classes from "./Button.module.scss";
export default defineComponent({
  props:{
    icon:{
      type:String,
    }
  },
  setup(props,context){
    const {emit,slots} = context

    return ()=>{
      return <button class={classes.container} onClick={()=>{
        emit('click')
      } }>
        {props.icon? <Icon IconName={props.icon}></Icon> : ''}
        {slots.default?.()}
      </button>
    }
  }
})