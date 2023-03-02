import {defineComponent, PropType, ref, withModifiers} from "vue";
import classes from './mailCard.module.scss'
export default defineComponent({
  props:{
    cardInfo:{
      type:Object
    },
    cardName:{
      type:String
    }
  },
  setup(props,context){
    const {emit} = context
    const imgUrl = ref('')
    const cardInfo = props.cardInfo
    import('./head.jpg').then(res=>{
      imgUrl.value = res.default
    })
    const nowSite = ref(0)
    return ()=>{
      return (
        <div class={classes.main} onTouchstart={((e)=>{
          nowSite.value = e.targetTouches[0].pageX

        })
          } onTouchmove={(e)=>{
            let nowPageX = e.targetTouches[0].pageX

        }}  onClick={()=>{
          emit('myClick')
        }}>

          <div class={classes.left}>
            <img src={imgUrl.value} class={classes.headImage}/>
          </div>
          <div class={classes.right}>
            <div class={classes.fromTitle}>
              {props.cardName}
            </div>
            <h3 class={classes.LineMessage}>{cardInfo?.LineMessage}
            </h3>
          </div>
          <div class={classes.bottom}></div>
        </div>
      )
    }
  }
})