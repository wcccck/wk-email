import {defineComponent, ref,withModifiers} from "vue";
import classes from './mailCard.module.scss'
export default defineComponent({
  props:{
    headImage:{
      type:String,
      // required:true

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
    const {emit} = context
    const imgUrl = ref('')
    import('./head.jpg').then(res=>{
      imgUrl.value = res.default
    })
    return ()=>{
      return (
        <div class={classes.main} onClick={withModifiers(()=>{
          emit('click')
          console.log(12)
        } ,['stop','self']) }>
          {/*<button >12</button>*/}
          <div class={classes.left}>
            <img src={imgUrl.value} class={classes.headImage}/>
          </div>
          <div class={classes.right}>
            <div class={classes.fromTitle}>
              腾讯真内个
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