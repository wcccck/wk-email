import {defineComponent} from "vue";
import classes from './mailCard.module.scss'
export default defineComponent({
  props:{
    headImage:{
      type:String,
      required:true
    },
    InfoTitle:{
      type:String,
      required:true
    },
    InfoTitle2:{
      type:String,
      required:true
    },
    LineMessage:{
      type:String,
      required:true
    },
  },
  setup(props,context){
    return ()=>{
      return (
        <div class={classes.main}>

          <div class={classes.left}>
            <img src={props.headImage} class={classes.headImage}/>
          </div>
          <div class={classes.right}>
            文字等东西
          </div>
          <div class={classes.bottom}></div>
        </div>
      )
    }
  }
})