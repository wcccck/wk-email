import {defineComponent, inject, nextTick, Ref, ref, Transition, watch, watchEffect} from "vue";
// @ts-ignore
import MailCard from "@/components/mailCard/mailCard";
import classes from './index.module.scss'
import BScroll from 'better-scroll'
import {getReceiveMessage} from '../../http/Message'
import {getFriend} from '../../http/address'
import MessageStore from "../../store/MessageStore";
// @ts-ignore
import useUserInfo from '@/store/UserStore'
import {changeArr} from "../layout/chatPage";

export type MsgDataType = {
  toId:string | number
  data:Array<any>
}
// const s = new
export default defineComponent({
  setup(props,context){
    const userInfo = useUserInfo() // 个人信息
    const id = userInfo.userInfo.id
    if(userInfo.userFriend.length >0){
      getFriend(id).then(res=>{
        userInfo.userFriend = res.data.data
      })
    }
    const friend = userInfo.userFriend
    const cardList = ref<MsgDataType[]>([]) // 渲染数据
    const MsgStore = MessageStore() // 持久化数据
    const chatShow = inject('chatShow') as Ref<boolean> // chat页面控制
    const chatArr = inject('chatArr') // chat页面数据
    watchEffect(()=>{
      cardList.value = changeArr(MsgStore.MsgSSE)
      cardList.value.forEach(item=>{ // 过滤数据
        if(item.toId == MsgStore.currentToId){
          MsgStore.currentMsgArr = item.data
        }
      })
    })
    getReceiveMessage(id).then(res=>{
      MsgStore.MsgSSE = res.data.data // 持久化
      cardList.value = changeArr(res.data.data)
    })
    let main = ref()
    nextTick(()=>{
      new BScroll(main.value,{
        click:true
      })

    })

    return ()=>{
      return <div>
        <div class={classes.header}>
          消息
        </div>
        <div class={['wrapper', classes.main]} ref={main}>
          <div class={[classes.container, 'content']}>
            {cardList.value.map((item, index,array) => {
              let i = 0 // 红点
              const data = item.data // 传入数据
              const fr = friend.find((el)=>{
                return el.friend_id == item.toId
              })
              const lastMsg = data[data.length-1].msg
              data.forEach((item)=>{
                if(item.status == 3) i ++
              })
              return <MailCard unReadNum={i} lastMsg={lastMsg}  cardInfo={fr} onMyClick={() => {
                MsgStore.currentMsgArr = data
                chatArr.value = cardList
                MsgStore.currentToId = item.toId;
                chatShow && (chatShow.value = true)
              }}></MailCard>
            })}
          </div>
        </div>
      </div>
    }
  }
})

