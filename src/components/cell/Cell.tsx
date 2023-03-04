import {defineComponent} from "vue";
import classes from './Cell.module.scss'
import Icon from "../Icon/Icon";
import {useRouter} from "vue-router";

export default defineComponent({
  props:{
    icon:{
      type:String
    },
    title:{
      type:String,
      required:true
    },
    to:{
      type:String
    }
  },
  setup(props,context){
    const Router = useRouter()
    const {slots} = context
    return ()=>{
      return <div class={classes.container} onClick={()=>{
        if(props.to){
          Router.push(props.to)
        }
      } }>

        <div class={classes.left}>
          {slots.left?.()}
        </div>
        <div class={classes.right}>
          {slots.right?.()}
        </div>
        <div class={classes.bottom}></div>
      </div>
    }
  }
})