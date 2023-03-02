import {defineComponent, provide, inject, ref, KeepAlive,Transition,watch} from "vue";
import Tabbar, {TabItem} from "../../components/tabbar/tabbar";
import {RouterView} from "vue-router";
import classes from './layout.module.scss'
import Chat from "./chatPage/chat";
import MessageStore from "../../store/MessageStore";
export default defineComponent({
  setup(props,context){
    const chatShow = ref(false)
    provide('chatShow',chatShow)

    // const msgStore = MessageStore()
    const chatArr = ref([])
    watch(chatArr.value,(newv,old)=>{
      console.log(newv)
    })
    provide('chatArr',chatArr)
    return ()=>{

      return <div class={classes.layout}>

        <RouterView></RouterView>
        <Tabbar>
          <TabItem title={'消息'} Icon={'xiaoxi'} path={'/layout/message'}></TabItem>
          <TabItem title={'通讯录'} Icon={'tongxunlu'} path={'/layout/address'}></TabItem>
          <TabItem title={'发现'} Icon={'faxian'} path={'/layout/discover'}></TabItem>
          <TabItem title={'个人'} Icon={'me'} path={'/layout/profile'}></TabItem>
        </Tabbar>
        <Transition name={'fade'}>
          {chatShow.value ? <Chat chatArr={chatArr}></Chat> : ''}
        </Transition>



      </div>
    }
  }
})