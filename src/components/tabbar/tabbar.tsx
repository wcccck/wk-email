import {defineComponent, PropType, provide, inject, ref, Ref} from "vue";
import classes from './tabbar.module.scss'
import {useRouter, RouterLink, RouteLocationRaw} from "vue-router";
// type tabItem = {
//   name:String,
//   Index:number
// }
export default defineComponent({
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props, ctx) {
    const defaultSlots = ctx.slots.default!
    const activeIndex = ref(props.activeIndex || 0)
    console.log(defaultSlots)
    provide('activeIndex',activeIndex)
    // console.log(vNodes)
    return () => {
      const vNodes = defaultSlots().map((vNode,index)=>{
        if(!vNode.props){
          vNode.props ={}
        }
        vNode.props.itemIndex= index
        return vNode
      })
      return <div class={classes.tabBar}>
        {vNodes}
      </div>
    }
  }
})

export const TabItem = defineComponent({
  props: {
    title: {
      type: String
    },
    path: {
      type: String as PropType<RouteLocationRaw>,
      require: true
    },
    itemIndex:{
      type:Number
    }
  },
  setup(props, {emit}) {
    const activeIndex =  inject('activeIndex') as Ref<number>
    const ItemClick = function () {
      activeIndex.value = props.itemIndex as number
      Router.push(props.path!)
    }
    const Router = useRouter()

    return () => {
      return (
          <span onClick={ItemClick} class={[props.itemIndex == activeIndex.value? classes.activeItem : '',classes.tab]}>
            {props.title}
          </span>
      )
    }
  }
})