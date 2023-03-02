import {defineComponent, inject, nextTick, Ref, ref, Transition} from "vue";
// @ts-ignore
import MailCard from "@/components/mailCard/mailCard";
import classes from './index.module.scss'
import BScroll from 'better-scroll'
import {getReceiveMessage} from '../../http/Message'
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
    // 个人信息
    const userInfo = useUserInfo()
    // id
    const id = userInfo.userInfo.id
    // 消息框数据
    const cardList = ref<MsgDataType[]>([])
    // pinal数据仓库
    const MsgStore = MessageStore()
    const chatShow = inject('chatShow') as Ref<boolean>
    const chatArr = inject('chatArr')
    const evtSource = new EventSource(`http://localhost:7777/stream/${id}`);
    evtSource.onmessage = function (e) {
      const DBArr = JSON.parse(e.data) as Array<any>
      if(DBArr.length != MsgStore.MsgSSE.length){
        MsgStore.MsgSSE = [...DBArr]

        cardList.value = changeArr(MsgStore.MsgSSE)
        console.log('cck')
        console.log(cardList.value)
        cardList.value.forEach(item=>{
          if(item.toId == MsgStore.currentToId){
            MsgStore.currentMsgArr = item.data
          }
        })
      }
    }
    getReceiveMessage({messageType:'sgoige'},id).then(res=>{
      MsgStore.MsgSSE = res.data.data // 持久化

      cardList.value = changeArr(res.data.data)
      console.log(cardList.value)
    })
    let main = ref(HTMLDivElement)
    nextTick(()=>{
      // @ts-ignore
      let bet = new BScroll(main.value,{
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
              // console.log(cardList.value)
              // console.log(32)
              const data = item.data
              return <MailCard cardName={item.toId}  cardInfo={data} onMyClick={() => {
                console.log(2)
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

