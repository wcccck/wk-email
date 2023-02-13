import {defineComponent,withModifiers} from "vue";
import {useRoute} from "vue-router";
import classes from './sideItem.module.scss'
import Icon from "../Icon/Icon";
export default defineComponent({
  props:{
    title:{
      type:String,
      required:true
    },
    icon:{
      type:String,
      required: true
    },
    activeName:{
      type:String
    }
  },
  setup(props, {emit}){
    const fn =  ()=>{
      emit('myClick')
    }
    const route = useRoute()
    return ()=>{
      return (
        <div class={[props.activeName === route.name? classes.active : '',classes.container]} onClick={withModifiers(fn,['stop'])  }>
          <span class={classes.leftItem}>
            <span class={classes.icon}>
              <Icon IconName={props.icon}/>
            </span>
            <span >{props.title}  </span>
          </span>
          <span  class={classes.rightItem}>90</span>
        </div>
      )
    }
  }
})