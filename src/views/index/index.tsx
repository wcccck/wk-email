import {defineComponent, provide, inject, ref, Transition, withModifiers, Ref} from "vue";
import {RouterView,useRoute} from "vue-router";
import {getIndexInfo} from '../../http/index'
import SideBar from "./sideBar/sideBar";
import {sideBarItem} from './sideBar/sideBar'
import classes from './index.module.scss'
import Icon from "../../components/Icon/Icon";
import Tabbar, {TabItem} from "../../components/tabbar/tabbar";




export default defineComponent({
  setup(){
    const sideBarItem = ref<sideBarItem[]>([
      {IconName:'youxiang',activeName:'Inbox',title:'收件箱'},
      {IconName:'close',activeName:'UnRead',title:'未读'}
    ])
    const Route = useRoute()
    const showBar = ref(false)
    getIndexInfo().then(res=>{
      console.log(res)
    })
    function closeSideBar(){
      showBar.value && (showBar.value = false)
    }
    provide('showBarVariable',showBar)
    return ()=>{
      return (
        <div class={classes.main}  onClick={withModifiers(closeSideBar,['stop'] )} >

          <IndexHeader  btnText={Route.meta.chinaName ? Route.meta.chinaName as string : '主页'}></IndexHeader>
          <Transition name={'fade'}>
            {/*@ts-ignore*/}
            {showBar.value ? <SideBar onCloseSideBar={()=>{showBar.value = false}   } sideItemArr={sideBarItem.value}/> : ''}
          </Transition>
          <RouterView></RouterView>
        </div>
      )
    }
  }
})

const IndexHeader = defineComponent({
  props:{
    btnText:{
      type:String,
      required:true
    }
  },
  setup(props){
    const showFatherBar = inject('showBarVariable') as Ref<boolean>
     // = true
    return ()=>{
      return <div class={classes.header}>
        <div class={classes.left} onClick={withModifiers(()=>{
          showFatherBar.value = true
          console.log(34)
        },['stop']) }>
          <Icon IconName={'list'} size={'1.5rem'}></Icon>
          {props.btnText}
        </div>
        <div>right</div>
      </div>
    }
  }
})