import {defineComponent} from "vue";
import classes from './mailCard.module.scss'
export default defineComponent({
  props:{
    headImage:{
      type:String,
      required:true
    },
    fromTitle:{
      type:String,
      // required:true
    },
    lineTitle:{
      type:String,
      // required:true
    },
    LineMessage:{
      type:String,
      // required:true
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
            <div class={classes.fromTitle}>
              前程无忧51job
            </div>
            <div class={classes.lineTitle}>
              你真帅你妈的
            </div>
            <h3 class={classes.LineMessage}>灰色预览文字 灰色预览文字 灰色预览文字 灰色预览文字
              灰色预览文字
              灰色预览文字
              灰色预览文字
              灰色预览文字
              灰色预览文字
            </h3>
          </div>
          <div class={classes.bottom}></div>
        </div>
      )
    }
  }
})