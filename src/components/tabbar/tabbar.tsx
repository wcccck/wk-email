import {defineComponent, PropType, provide, inject, ref, Ref} from "vue";
import classes from './tabbar.module.scss'
import {useRouter, RouteLocationRaw,useRoute} from "vue-router";
import useIndex from '../../store/TabBarIndex'
import Icon from "../Icon/Icon";
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
    },
    Icon:{
      type:String
    }
  },
  setup(props, {emit}) {
    const activeIndex =  inject('activeIndex') as Ref<number>
    const index = useIndex()
    const ItemClick = function () {
      activeIndex.value = props.itemIndex as number
      index.activeIndex = props.itemIndex
      Router.push(props.path!)
    }
    const Router = useRouter()

    // console.log(message.activeIndex)
    return () => {
      return (

          <span onTouchend={ItemClick} class={[(props.itemIndex == index.activeIndex)? classes.activeItem : '',classes.tab]}>
            {props.Icon ? <Icon size={'50px'} IconName={props.itemIndex == index.activeIndex? props.Icon +'_r' : props.Icon}></Icon> : ''}
            {props.title}
          </span>
      )
    }
  }
})