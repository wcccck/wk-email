import classes from './Input.module.scss'
import {defineComponent, PropType, Ref} from "vue";

export default defineComponent({
  props:{
    Model:{
      type:Object as PropType<Ref<string>>
    },
    inputType:{
      type:String,
      default:'text'
    },
    maxLength:{
      type:Number,
      default:20
    }
  },
  setup(props,context){
    const {slots} = context
    return ()=>{
      return <div>
        <div class={classes.main}>
          <div class={classes.left}>
            {slots.left?.()}
            <input maxlength={props.maxLength} autocomplete={true} type={props.inputType} v-model={props.Model.value} onInput={(e)=>{
              // props.Model && ( props.Model.value = e.target.value)
            } } />
          </div>

          <div class={classes.right}>
            {slots.right?.()}
          </div>
          <div class={classes.bottom}></div>
        </div>
      </div>
    }
  }
})