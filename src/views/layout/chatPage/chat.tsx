import {defineComponent, inject, nextTick, PropType, provide, Ref, ref, watch, watchEffect} from "vue";
import {useRoute,useRouter} from "vue-router";
import classes from './chat.module.scss'
import Icon from "../../../components/Icon/Icon";
import Button from "../../../components/button/Button";
import {MsgType} from "../../../http/Message";
import userStore from "../../../store/UserStore";
import MessageStore from "../../../store/MessageStore";
export default defineComponent({
  props:{
    chatArr:{
      type: Object
    },

  },
  setup(props,context){
    const showChat = inject('chatShow')
    // inject('chatArr') as Ref<Array<any>>
    // const chatArr =
    const msgStore = MessageStore()
    const user = userStore().userInfo
    // getMyid
    const myId = user.id
    // 获取toid
    const sendId = msgStore.currentToId
    // 初始化Message数据
    const sendMsg = ref<MsgType>({
      from:myId,
      to:sendId,
      msg:"",
      type:"0",
      status:"1"
    })

    provide('sendMsg',sendMsg)
    const container = ref()
    nextTick(()=>{
      const item = container.value
      item.scrollTop = item.scrollHeight
    })
    watch(container,(newValue,oldValue)=>{

    })
    return ()=>{
      return <div class={classes.container}  ref={container} style={{display:showChat?.value == true ? 'block':"none"}}>
        <header>
          <Icon IconName={'zuojiantou'} size={'1.7rem'} onMyClick={()=>{
            showChat.value = false
            msgStore.MsgCurrent = []
          }}></Icon>
          <span style={{fontSize:"1.3rem"}}>{msgStore.currentToId}</span>
          <Icon IconName={'more'} size={'1.7rem'} onMyClick={()=>{console.log(4576)}}></Icon>
          <div class={classes.bottom}></div>
        </header>
        <main>
          {msgStore.currentMsgArr.map((item,index)=>{
            return <Chat obj={item} Message={myId == item.from? 'right':'left'}></Chat>
          })}
        </main>
        <Footer container={container}>

        </Footer>
      </div>
    }
  }
})

type MessageType = 'left' | 'right'
const Chat = defineComponent({
  props:{
    obj:{
      type:Object
    },
    userImage:{
      type:String
    },
    Info:{
      type:String
    },
    Message:{
      type:String as PropType<MessageType>,
      // required:true,
      default:"left"
    }
  },
  setup(props,context){

    const obj = props.obj
    const Message = props.Message
    const {slots} = context
    const alertDom = ref()
    nextTick(()=>{
      if(Message == 'left'){
        alertDom.value.style.setProperty('--testColor','#ffffff')
        alertDom.value.style.setProperty('--textColor','black')
      }else{
        alertDom.value.style.setProperty('--textColor','#ffffff')
      }

      // console.log(alertDom.value)
    })

    let imgUrl = ref('')
     import('./head.jpg').then(res=>{
      imgUrl.value = res.default as string
    })
         // .style.setProperty('--primaryColor', 'red');
    return ()=>{
      return <div class={[classes.Chat]} style={{flexDirection:props.Message == 'right' ? "row-reverse" : ""}}>
          <img src={imgUrl.value} class={classes.headImag}/>
          <div ref={alertDom} class={[classes.Alert,props.Message == 'left' ? classes.leftAlert : classes.rightAlert]}>
            <span>{obj.msg}</span>
            <div class={[classes.triangle,props.Message == 'left' ? classes.triangleLeft : classes.triangleRight]}></div>
          </div>
      </div>
    }
  }
})
import {sendMessage} from "../../../http/Message";



const Footer = defineComponent({
  props:{
    container:{
      type:Object
    }
  },
  setup(props,context){

    const sendMsg =  inject('sendMsg')
    const inputVal = ref('')
    return ()=>{
      return <div class={classes.footer}>
        <Icon IconName={'yuyin'} size={'65px'} onClick={()=>{console.log(12)} }></Icon>
        <input type="text" v-model={inputVal.value}/>
        <div class={classes.line}></div>
        <Button onMyClick={()=>{
            sendMsg.value.msg = inputVal.value
            sendMessage(sendMsg.value).then(res=>{
              inputVal.value = ''
              const item = props.container.value
              let hei = item.scrollHeight
              // let inn = setInterval(()=>{
              //   console.log(hei)
              //     if(hei !== item.scrollHeight){
              //       item.scrollTop = item.scrollHeight
              //       clearInterval(inn)
              //     }else if(item.scrollHeight <= 1743){
              //       clearInterval(inn)
              //     }
              // },0)

            })
        }} >发送</Button>
      </div>
    }
  }
})