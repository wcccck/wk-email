import {defineComponent, nextTick, onUnmounted, PropType, Ref, ref} from "vue";
import classes from './List.module.scss'
export default defineComponent({
  props:{
    isLoad:{ // 用来控制是否加载中
      type:Boolean
    },
    loadFun:{
      type:Function
    },
    finish:{
      type:Boolean
    },
    reFresh:{
      type:Function
    }
  },
  setup(props,context){
    const Inter = ref()
    const container = ref()
    const startY = ref(0)
    const maxDistance = 150
    const marginT = 10
    const moveClass = ref(false)
    const flush = ref(false)
    const flushIng = ref(false)
    const timer = ref<number>(0)
    function touchStart(e:TouchEvent){
      startY.value = e.targetTouches[0].clientY
      moveClass.value = false
    }
    function touchMove(e:TouchEvent){
      let slideDistance = e.targetTouches[0].clientY - startY.value
      // if(slideDistance>0) { //
      //   // flush.value = true
      //   if (container.value && slideDistance < maxDistance) {
      //     container.value.style.transform = `translateY(${slideDistance}px)`
      //   }else{
      //     flush.value = true
      //     let distance = slideDistance/20 + maxDistance;
      //     container.value.style.transform = `translateY(${distance}px)`
      //   }
      // }

    }
    function touchEnd(e:TouchEvent){


    }
    onUnmounted(()=>{
      clearInterval(timer.value)
    })
    nextTick(()=>{
      const obs = new IntersectionObserver((entries)=>{
        if(entries[0].intersectionRatio>0.5){ // 触发加载
          props.loadFun?.()
        }
      },{
        threshold:0.5,
        root:container.value
      })
      obs.observe(Inter.value)
    })
    // 加载中
    return ()=>{
      return <div class={[classes.container,moveClass.value ? classes.move : '']} ref={container} onTouchstart={touchStart} onTouchmove={touchMove} onTouchend={touchEnd}>
        {/*{ <div class={classes.flushItem} style={{display:flush.value?"block":'none'}}>松手刷新</div>}*/}
        {/*{ <div class={classes.flushItem} style={{display:flushIng.value?"block":'none'}}>刷新中</div>}*/}
        {context.slots.default?.()}
        { <div class={classes.flushItem} style={{display:props.isLoad?"block":'none'}} ref={Inter}>加载中</div>}
        {/*{props.finish? }*/}
        { <div class={classes.flushItem} style={{display:props.finish?"block":'none'}}>暂无更多</div>}

      </div>
    }
  }
})