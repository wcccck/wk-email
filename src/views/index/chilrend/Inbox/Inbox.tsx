import {defineComponent, nextTick, ref,withModifiers} from "vue";
// @ts-ignore
import MailCard from "@/components/mailCard/mailCard";
import classes from './Inbox.module.scss'
import BScroll from 'better-scroll'
export default defineComponent({
  setup(){
    let main = ref(HTMLDivElement)
    console.log(main)
    nextTick(()=>{
      // @ts-ignore
      let bet = new BScroll(main.value,{
        click:true
      })
    })

    return ()=>{
      return <div class={['wrapper',classes.main]}  ref={main}>
      <div class={[classes.container,'content']}>
        <MailCard onClick={()=>{
          console.log('card Click')
        }}></MailCard>
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
        {/*<MailCard></MailCard>*/}
 </div>
      </div>
    }
  }
})