import {defineComponent, nextTick, PropType, ref, withModifiers} from "vue";
import classes from './mailCard.module.scss'
import {debounce} from "../../utils";


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

    const container = ref()
    const startSlide = ref(true)
    nextTick(()=>{
      startSlide.value = false
      // container.value.style.transform = 'translateX(-60px)'
      // console.log(container.value.style.transform)
    })
    const nowSite = ref(0)
    let nowPageX:number
    return ()=>{
      return (
        <div class={classes.main} onClick={()=>{
          emit('myClick')
        }}>

          <div class={classes.body}  style={{left:"0px"}} ref={container} onTouchstart={((e)=>{
            if(startSlide.value) return
            let left = container.value.style.left.split('p')[0]
            if(left == 0 ){
              nowSite.value = e.targetTouches[0].pageX
            }

          })
          } onTouchmove={(e)=>{
            if(startSlide.value) return
            let left = container.value.style.left.split('p')[0]
            if(left == 0){

            }
            nowPageX = e.targetTouches[0].pageX
            const slideSpace = nowPageX - nowSite.value // 移动的距离
            // 0 ~ -180
            // left <0 && left >-180

            // left < 0 才能往右


            if(left > -180 && slideSpace <0 ){
              if(e.targetTouches[0].pageX <= -180){// 往左滑滑倒底了 再滑也不动
                container.value.style.left = `-180px`
              }else{
                // 没到底
                container.value.style.left = `${slideSpace}px`
              }

            }else if(left<=0 && slideSpace>-180){

              container.value.style.left = `${slideSpace}px`
            }

          } } onTouchend={(e)=>{
            if(startSlide.value) return
            let left = container.value.style.left.split('p')[0]

            // if(left<=50){
            //   let n = left
            //   var a = setInterval(()=>{
            //     n--
            //     container.value.style.left = `${n}px`
            //     if(Math.trunc(n)==-180){
            //       clearInterval(a)
            //     }
            //   },0)
            // }
            // if(left<= -90){
            //   container.value.style.left = `-180px`
            // }else{
            //   container.value.style.left = `0px`
            // }

          } } >
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

            <div style={{background:"skyblue",height:"100%",width:"130px",position:"absolute",right:"-150px"}}></div>
          </div>
          <div class={classes.bottom}></div>
        </div>
      )
    }
  }
})