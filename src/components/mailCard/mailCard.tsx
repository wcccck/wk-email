import {defineComponent, nextTick, onMounted, PropType, ref, withModifiers} from "vue";
import classes from './mailCard.module.scss'
import {cardType} from "./cardInfo";
import userStore from "../../store/UserStore";



export default defineComponent({
  props:{
    cardInfo:{
      type:Object as PropType<cardType>
    },
    lastMsg:{
      type:String
    },
    unReadNum:{
      type:Number
    }
  },
  setup(props,context){
    const {emit} = context
    const imgUrl = ref('')
    const cardInfo = props.cardInfo
    const userFriend = userStore().userFriend
    // const currentFriend = userFriend.find(item=>{
    //   return
    // })
    // console.log(cardInfo)
    import('./head.jpg').then(res=>{
      imgUrl.value = res.default
    })

    const container = ref()
    const startSlide = ref(true)
    onMounted(()=>{
      // dom渲染结束 开放滑动按钮
      startSlide.value = false
    })
    function cardMove (e:TouchEvent){
      console.log(e.targetTouches[0].clientX)
    }
    function cardStart (e:TouchEvent){

    }
    function cardEnd(e:TouchEvent){

    }
    return ()=>{
      return (
        <div class={classes.main} onClick={()=>{
          emit('myClick')
        }}>

          <div class={classes.body}  style={{left:"0px"}} ref={container} onTouchstart={cardStart} onTouchmove={cardMove}
               onTouchend={cardEnd} >
            <div class={classes.left}>
              <img src={cardInfo?.friend_image} class={classes.headImage}/>
              {props.unReadNum ? <div class={classes.redCircle}>
                <span>{props.unReadNum}</span>
              </div>: ''}
            </div>
            <div class={classes.right}>
              <div class={classes.fromTitle}>
                {cardInfo?.friend_name}
              </div>
              <h3 class={classes.LineMessage}>{props.lastMsg}
              </h3>
            </div>
            <div style={{background:"skyblue",height:"100%",width:"130px",position:"absolute",right:"-150px"}}></div>
          </div>
          <div class={classes.bottom}></div>
        </div>
      )
    }
  }
})