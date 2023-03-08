import {defineComponent, provide, inject, ref, KeepAlive,Transition,watch} from "vue";
import Tabbar, {TabItem} from "../../components/tabbar/tabbar";
import {RouterView} from "vue-router";
import classes from './layout.module.scss'
import Chat from "./chatPage/chat";
import useUserInfo from '@/store/UserStore'
import MessageStore from "../../store/MessageStore";
import {changeArr} from "./chatPage";
export default defineComponent({
  setup(props,context){
    const chatShow = ref(false)
    provide('chatShow',chatShow)
    const MsgStore = MessageStore()
    const userInfo = useUserInfo() // 个人信息
    const id = userInfo.userInfo.id
    const chatArr = ref([])
    watch(chatArr.value,(newv,old)=>{
      console.log(newv)
    })
    const evtSource = new EventSource(`http://localhost:7777/stream/${id}`); // 开启SSE链接
    evtSource.onmessage = function (e) {
      console.log('推送')
      const DBArr = JSON.parse(e.data) as Array<any>
      MsgStore.MsgSSE = [...DBArr] // 服务器推送的信息
      MsgStore.currentMsgArr = changeArr(MsgStore.MsgSSE)
      MsgStore.currentMsgArr.forEach(item=>{
          if(item.toId == MsgStore.currentToId){
            MsgStore.currentMsgArr = item.data
          }
      })
      console.log(MsgStore.currentMsgArr)

      // cardList.value.forEach(item=>{ // 过滤数据
      //   if(item.toId == MsgStore.currentToId){
      //     MsgStore.currentMsgArr = item.data
      //   }
      // })
    }
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